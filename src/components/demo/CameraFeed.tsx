import Card from "../common/Card";

export default function CameraFeed() {
  return (
    <Card glass className="p-0 overflow-hidden">
      {/* Camera feed placeholder */}
      <div className="relative bg-gray-900 aspect-video flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black" />

        {/* Animated grid overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 400 300"
        >
          <defs>
            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(37, 99, 235, 0.1)" />
            </linearGradient>
          </defs>
          <g stroke="url(#grid-gradient)" strokeWidth="0.5">
            {Array.from({ length: 20 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 15}
                x2="400"
                y2={i * 15}
              />
            ))}
            {Array.from({ length: 26 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 15}
                y1="0"
                x2={i * 15}
                y2="300"
              />
            ))}
          </g>
        </svg>

        {/* Center text */}
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 rounded-full border-4 border-blue-500 animate-pulse mx-auto mb-4" />
          <p className="text-blue-400 font-medium">Live Camera Feed</p>
        </div>

        {/* Live indicator */}
        <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 bg-red-500/80 px-3 py-1 rounded-full">
          <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse" />
          <span className="text-white text-xs font-bold">LIVE</span>
        </div>

        {/* Corner markers */}
        {[
          "top-4 left-4",
          "top-4 right-4",
          "bottom-4 left-4",
          "bottom-4 right-4",
        ].map((pos) => (
          <div
            key={pos}
            className={`absolute ${pos} w-3 h-3 border-2 border-blue-400 z-20`}
          />
        ))}
      </div>

      {/* Info bar */}
      <div className="p-4 border-t border-white/10 bg-white/5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-100">Front Entrance</p>
            <p className="text-xs text-gray-400">FPS: 30 | Resolution: 4K</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs text-gray-400">Connected</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
