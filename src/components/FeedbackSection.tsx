import React, { useState, useEffect } from 'react';
import { VERIFIED_FEEDBACK } from '../data/portfolioData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeInSection } from './FadeInSection';
import { motion, AnimatePresence } from 'motion/react';

export const FeedbackSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState(false);
  const total = VERIFIED_FEEDBACK.length;

  // Auto-play cycle every 6 seconds, pausing when user hovers
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handleSelect = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const currentItem = VERIFIED_FEEDBACK[currentIndex];

  return (
    <section
      id="feedback"
      className="py-12 sm:py-18 bg-white dark:bg-[#161822] border-b border-slate-200 dark:border-white/10 relative overflow-hidden"
      aria-labelledby="feedback-heading"
    >
      <FadeInSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-md bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/30 text-xs font-semibold text-red-600 dark:text-[#FF4A4A] uppercase tracking-wider mb-2.5">
              <span>Endorsements</span>
            </div>
            <h2
              id="feedback-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#FAF9F6] tracking-tight"
            >
              Testimonials
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
              Authentic recommendations from executive leaders, C-level stakeholders, and commercial directors who have worked directly with Rajakumar.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              id="slider-prev-btn"
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#1E2230] border border-slate-200 dark:border-white/15 flex items-center justify-center text-slate-800 dark:text-[#FAF9F6] hover:bg-red-600 hover:text-white dark:hover:bg-[#FF2E2E] dark:hover:border-[#FF2E2E] transition-colors focus:outline-hidden cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="slider-next-btn"
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#1E2230] border border-slate-200 dark:border-white/15 flex items-center justify-center text-slate-800 dark:text-[#FAF9F6] hover:bg-red-600 hover:text-white dark:hover:bg-[#FF2E2E] dark:hover:border-[#FF2E2E] transition-colors focus:outline-hidden cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Fixed-dimension Card Container (zero layout shift/reflow) */}
          <div className="metafic-card relative w-full h-[270px] sm:h-[240px] md:h-[220px] p-6 sm:p-7 rounded-2xl bg-[#F1F5F9] dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 shadow-xs overflow-hidden flex flex-col justify-between">
            
            {/* Top Bar: index indicator */}
            <div className="flex items-center justify-end shrink-0 mb-1">
              <span className="text-xs font-semibold text-slate-400 dark:text-[#94A3B8]">
                {currentIndex + 1} of {total}
              </span>
            </div>

            {/* Absolute positioning slide track */}
            <div className="relative flex-1 w-full overflow-hidden">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, x: direction > 0 ? 25 : -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -25 : 25 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 flex flex-col justify-between h-full"
                >
                  {/* Quote with line clamping and vertical scrolling protection */}
                  <div className="flex-1 flex items-center overflow-y-auto pr-1">
                    <p className="text-slate-800 dark:text-[#FAF9F6] italic text-sm sm:text-base md:text-lg font-medium leading-relaxed line-clamp-4 overflow-y-auto">
                      "{currentItem.text}"
                    </p>
                  </div>

                  {/* Author and Role Sign-off */}
                  <div className="pt-3 border-t border-slate-200 dark:border-white/10 shrink-0 mt-2">
                    <h4 className="font-heading text-sm sm:text-base font-bold text-slate-900 dark:text-[#FAF9F6]">
                      {currentItem.name}
                    </h4>
                    <p className="text-xs text-red-600 dark:text-[#FF4A4A] font-semibold mt-0.5">
                      {currentItem.title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {VERIFIED_FEEDBACK.map((_, idx) => (
              <button
                key={idx}
                id={`slider-dot-${idx}`}
                type="button"
                onClick={() => handleSelect(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-7 bg-red-600 dark:bg-[#FF2E2E]'
                    : 'w-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};
