"use client";

import { useEffect, useRef } from "react";

const stats = {
  username: "yuvrajsingh3112",
  globalRank: 478878,
  solved: 294,
  easy: { solved: 162, total: 949 },
  medium: { solved: 119, total: 2067 },
  hard: { solved: 13, total: 942 },
  profileUrl: "https://leetcode.com/yuvrajsingh3112",
};

const difficulties = [
  { label: "Easy", key: "easy", color: "#00b8a9" },
  { label: "Medium", key: "medium", color: "#ffc01e" },
  { label: "Hard", key: "hard", color: "#ef4743" },
];

function DonutChart({ easy, medium, hard, total }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const cx = 50, cy = 50, r = 38, lw = 8;
    const segments = [
      { val: easy, color: "#00b8a9" },
      { val: medium, color: "#ffc01e" },
      { val: hard, color: "#ef4743" },
    ];
    const gap = 0.05;
    let angle = -Math.PI / 2;

    ctx.clearRect(0, 0, 100, 100);

    // Background track
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = "#2a2a4a";
    ctx.lineWidth = lw;
    ctx.stroke();

    segments.forEach((seg) => {
      const sweep = (seg.val / total) * Math.PI * 2 - gap;
      ctx.beginPath();
      ctx.arc(cx, cy, r, angle + gap / 2, angle + sweep + gap / 2);
      ctx.strokeStyle = seg.color;
      ctx.lineWidth = lw;
      ctx.lineCap = "round";
      ctx.stroke();
      angle += sweep + gap;
    });
  }, [easy, medium, hard, total]);

  return (
    <div style={{ position: "relative", width: 100, height: 100, flexShrink: 0 }}>
      <canvas ref={canvasRef} width={100} height={100} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 24, fontWeight: 600, color: "#fff", lineHeight: 1 }}>
          {total}
        </span>
        <span style={{ fontSize: 10, color: "#888", marginTop: 2 }}>Solved</span>
      </div>
    </div>
  );
}

export default function LeetCodeStats() {
  const total = stats.easy.solved + stats.medium.solved + stats.hard.solved;

  return (
    <div
      style={{
        borderRadius: 12,
        padding: "20px",
        maxWidth: 340,
        width: "100%",
        fontFamily: "sans-serif",
        color: "#e0e0e0",
        border: "0.5px solid #2a2a4a",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* LeetCode icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M13.5 3.5L6 14H12L10.5 20.5L18 10H12L13.5 3.5Z"
              fill="#FFA116"
            />
          </svg>
          <a
            href={stats.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 14, fontWeight: 500, color: "#fff", textDecoration: "none" }}
          >
            {stats.username}
          </a>
        </div>
        <span style={{ fontSize: 13, color: "#888" }}>#{stats.globalRank.toLocaleString()}</span>
      </div>

      {/* Body: donut + diff list */}
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 16 }}>
        <DonutChart
          easy={stats.easy.solved}
          medium={stats.medium.solved}
          hard={stats.hard.solved}
          total={total}
        />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
          {difficulties.map(({ label, key, color }) => {
            const { solved, total: tot } = stats[key];
            const pct = Math.round((solved / tot) * 100);
            return (
              <div key={key} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                  <span style={{ color }}>{label}</span>
                  <span style={{ color: "#aaa" }}>
                    {solved} / {tot}
                  </span>
                </div>
                <div
                  style={{
                    height: 3,
                    borderRadius: 2,
                    background: "#2a2a4a",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      height: 3,
                      borderRadius: 2,
                      background: color,
                      width: `${pct}%`,
                      transition: "width 0.6s ease",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rank footer */}
      <div
        style={{
          textAlign: "right",
          fontSize: 13,
          color: "#aaa",
          borderTop: "0.5px solid #2a2a4a",
          paddingTop: 10,
        }}
      >
        Rank{" "}
        <span style={{ color: "#fff", fontWeight: 500 }}>
          #{stats.globalRank.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
