import React from "react";

{/* <svg x="0" y="0" width="258" height="258">
        

      </svg> */}

const PlantLoader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white/40 dark:bg-black/30 backdrop-blur-md flex items-center justify-center">
      <div className="w-[260px] h-[300px] flex flex-col items-center justify-center relative">
        {/* Progress Bar */}
        <div className="w-2/3 h-2 mt-12 rounded-full bg-green-100 overflow-hidden relative z-10">
          <div className="h-full bg-green-500 animate-progress" />
        </div>
      </div>

      <style jsx>{`

        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-progress {
          width: 50%;
          animation: progress 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PlantLoader;
