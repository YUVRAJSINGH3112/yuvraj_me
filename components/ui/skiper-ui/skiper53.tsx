"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardAction,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const Skiper53 = () => {
  const images = [
    {
      src: "https://leetcode.com/u/yuvrajsingh3112/",
      alt: "LeetCode",
      code: "# 23",
    },
    {
      src: "https://github.com/YUVRAJSINGH3112",
      alt: "GitHub",
      code: "# 23",
    },
    {
      src: "https://www.hackerrank.com/profile/yuvrajsingh3112s",
      alt: "HackerRank",
      code: "# 23",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-background">
      <HoverExpand_002 className="" images={images} />
    </div>
  );
};

export { Skiper53 };

const HoverExpand_002 = ({
  images,
  className,
}: {
  images: { src: string; alt: string; code: string }[];
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(1);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-6xl px-5", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex w-full flex-col items-center justify-center gap-1">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-xl"
              initial={{ height: "2.5rem", width: "24rem" }}
              animate={{
                height: activeImage === index ? "24rem" : "3rem",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
            >
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute h-full w-full bg-linear-to-t from-black/50 to-transparent"
                  />
                )}
              </AnimatePresence>

              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute flex h-full w-full flex-col items-end justify-end px-4 pb-5 z-10"
                  >
                    <p className="text-left text-xs text-white/50">
                      {image.code}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <Card className="w-full h-full border-0 p-4">
                <CardHeader>
                  <CardTitle className="">{image.alt}</CardTitle>
                  <CardAction>
                    <Link href={image.src} className="text-muted-foreground">
                    <ExternalLink size={20}/>
                    </Link>
                  </CardAction>
                </CardHeader>
                <CardContent className="h-full">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit laboriosam ratione, magni corporis natus neque inventore, officiis id aperiam consectetur hic excepturi, explicabo commodi animi quas? Ipsam aliquid velit nostrum!</p>
                </CardContent>
              </Card>

            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export { HoverExpand_002 };