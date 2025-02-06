import React from 'react'

export default function ProgressBar({ name, score }: { name: string, score: number }) {
     const progress = (score / 5) * 100;
     return (
          <div className="relative p-1 rounded-md">
               <h3 className="text-left text-sm font-bold text-black">{name}</h3>
               {/* Progress Bar */}
               <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                         className="h-full bg-Yellow transition-all rounded-full"
                         style={{ width: `${progress}%` }}
                    ></div>
               </div>
          </div>
     )
}

