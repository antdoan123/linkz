import { useRouter } from "next/router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HalloweenLanding() {
  const router = useRouter();
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(() => {
      router.push("/invite");
    }, 1200);
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/halloweenbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Floating particles */}
      {["🎃", "🕷️", "👻", "🦇", "🕸️"].map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl pointer-events-none select-none"
          style={{
            left: `${10 + i * 20}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
          animate={{ y: [0, -12, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        >
          {emoji}
        </motion.span>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[0.4em] text-orange-300/80 text-xs sm:text-sm mb-3 font-light">
            Are you ready to die?
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white drop-shadow-lg">
            Halloween Night
          </h1>
          <p className="mt-2 text-orange-200/70 text-sm sm:text-base tracking-widest uppercase">
            Costume Required
          </p>
        </motion.div>

        {/* Envelope */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center gap-4 mt-4"
        >
          <AnimatePresence mode="wait">
            {!opening ? (
              <motion.button
                key="envelope"
                onClick={handleOpen}
                whileHover={{ scale: 1.06, rotate: -1, filter: "drop-shadow(0 0 20px rgba(251,146,60,0.6))" }}
                whileTap={{ scale: 0.97 }}
                exit={{ scale: 1.4, opacity: 0, y: -50 }}
                transition={{ exit: { duration: 0.6 } }}
                className="focus:outline-none cursor-pointer"
                aria-label="Open your invitation"
              >
                <img
                  src="/envelope.png"
                  alt="Your invitation"
                  className="w-56 sm:w-72 md:w-80 drop-shadow-2xl"
                />
              </motion.button>
            ) : (
              <motion.div
                key="opening"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 1.4, opacity: 0, y: -60 }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src="/envelope.png"
                  alt="Opening"
                  className="w-56 sm:w-72 md:w-80 drop-shadow-2xl"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pulse ring behind envelope hint */}
          {!opening && (
            <motion.div
              className="absolute w-64 sm:w-80 h-32 sm:h-40 rounded-full border border-orange-400/20 pointer-events-none"
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: opening ? 0 : 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="text-orange-200/60 text-xs sm:text-sm uppercase tracking-widest"
          >
            Open if you DARE!
          </motion.p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="flex items-center gap-4 mt-2"
        >
          <div className="h-px w-12 sm:w-16 bg-orange-400/30" />
          <span className="text-lg">🎃</span>
          <div className="h-px w-12 sm:w-16 bg-orange-400/30" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-orange-200/40 text-xs uppercase tracking-widest"
        >
          Friday, October 30 · Stanton, CA
        </motion.p>

      </div>
    </main>
  );
}