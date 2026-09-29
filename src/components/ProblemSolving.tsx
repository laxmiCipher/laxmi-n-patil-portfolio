import React, { useState } from 'react';
import { 
  Binary, 
  Brain, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Search, 
  ArrowRight, 
  Play, 
  RotateCcw,
  Boxes,
  Cpu
} from 'lucide-react';

export const ProblemSolving: React.FC = () => {
  // Simple interactive Binary Search visualizer in Java logic
  const [array] = useState([2, 5, 8, 12, 16, 23, 38, 56, 72, 91]);
  const [target, setTarget] = useState(23);
  const [step, setStep] = useState(0);
  
  // Binary Search step calculations
  // Steps:
  // Step 0: Initial Array, low = 0 (2), high = 9 (91), mid = 4 (16). 16 < 23 -> search right
  // Step 1: low = 5 (23), high = 9 (91), mid = 7 (56). 56 > 23 -> search left
  // Step 2: low = 5 (23), high = 6 (38), mid = 5 (23). 23 == 23 -> Target Found at index 5!
  const binarySearchSteps = [
    { low: 0, high: 9, mid: 4, message: 'Step 1: Check mid (index 4 = 16). Since 16 < 23, discard left half (low = mid + 1).' },
    { low: 5, high: 9, mid: 7, message: 'Step 2: Check mid (index 7 = 56). Since 56 > 23, discard right half (high = mid - 1).' },
    { low: 5, high: 6, mid: 5, message: 'Step 3: Check mid (index 5 = 23). Match found! Returns index 5 in O(log N) time.' },
  ];

  const currentStepData = binarySearchSteps[Math.min(step, binarySearchSteps.length - 1)];

  return (
    <section id="problem-solving" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium">
            <Brain className="w-3.5 h-3.5" />
            <span>Algorithmic Thinking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Problem Solving & Continuous Learning
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
          <p className="text-slate-400 text-sm max-w-xl">
            Developing strong computational logic, efficient algorithms, and structured thinking in Java.
          </p>
        </div>

        {/* 4 Key Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          
          {/* Card 1: DSA Practice */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 w-fit mb-4">
              <Binary className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              DSA Practice
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Practicing Data Structures and Algorithms using Java, focusing on memory efficiency and optimal runtime performance.
            </p>
          </div>

          {/* Card 2: Java Problem Solving */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 w-fit mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Java Problem Solving
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Solving programming problems to improve logical thinking and coding skills with clean, idiomatic Java implementations.
            </p>
          </div>

          {/* Card 3: Logical Thinking */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 w-fit mb-4">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Logical Thinking
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Analyzing edge cases, breaking down algorithmic complexity, and formulating structured step-by-step solutions.
            </p>
          </div>

          {/* Card 4: Continuous Learning */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 w-fit mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Continuous Learning
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Continuously developing algorithmic problem-solving skills through consistent practice, code reviews, and structured learning.
            </p>
          </div>

        </div>

        {/* Visual Java Algorithm Showcase & Concept Visualizer */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-indigo-950/30 border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Array Search Visualizer */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    Algorithm Illustration in Java
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Binary Search (O(log N))
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mt-1">
                  Step-by-Step Divide & Conquer
                </h4>
              </div>

              {/* Array visualization boxes */}
              <div className="space-y-2">
                <div className="text-xs text-slate-400 font-mono flex items-center justify-between">
                  <span>Target Value = <strong className="text-cyan-400">{target}</strong></span>
                  <span>Step {step + 1} of {binarySearchSteps.length}</span>
                </div>

                <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 pt-1">
                  {array.map((num, idx) => {
                    const isMid = idx === currentStepData.mid;
                    const isLow = idx === currentStepData.low;
                    const isHigh = idx === currentStepData.high;
                    const inRange = idx >= currentStepData.low && idx <= currentStepData.high;
                    const isTarget = num === target && step === 2;

                    return (
                      <div
                        key={idx}
                        className={`flex flex-col items-center justify-center p-2 rounded-lg border font-mono text-xs transition-all ${
                          isTarget
                            ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 scale-105 shadow-md shadow-emerald-500/30'
                            : isMid
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 font-bold'
                            : inRange
                            ? 'bg-slate-950 text-slate-200 border-slate-700'
                            : 'bg-slate-950/40 text-slate-600 border-slate-900 opacity-40'
                        }`}
                      >
                        <span className="text-sm">{num}</span>
                        <span className="text-[9px] text-slate-400 mt-0.5">[{idx}]</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step explanation */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300">
                <p className="text-cyan-300 font-medium">
                  {currentStepData.message}
                </p>
              </div>

              {/* Step Controls */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep((prev) => (prev + 1) % binarySearchSteps.length)}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{step === binarySearchSteps.length - 1 ? 'Restart Trace' : 'Next Step'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Reset"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Java Clean Code Block */}
            <div className="lg:col-span-6 rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs overflow-x-auto">
              <div className="flex items-center justify-between text-slate-500 pb-2 mb-2 border-b border-slate-800/80">
                <span className="text-slate-400">BinarySearch.java</span>
                <span className="text-cyan-400/80">Java Method</span>
              </div>
              <pre className="text-slate-300 leading-relaxed">
                <code>
{`public int binarySearch(int[] arr, int target) {
    int low = 0;
    int high = arr.length - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (arr[mid] == target) {
            return mid; // Element found
        }
        if (arr[mid] < target) {
            low = mid + 1; // Discard left half
        } else {
            high = mid - 1; // Discard right half
        }
    }
    return -1; // Element not present
}`}
                </code>
              </pre>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
