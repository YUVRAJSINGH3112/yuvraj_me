export default function IOSLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xl">
      
      {/* Glass Card */}
      <div className="flex flex-col items-center gap-4 px-8 py-6 rounded-2xl 
                      bg-white/10 border border-white/20 shadow-xl backdrop-blur-lg">

        {/* Spinner */}
        <div className="h-10 w-10 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>

        {/* Text */}
        <p className="text-sm text-white/70 tracking-wide">Loading...</p>
      </div>

    </div>
  );
}