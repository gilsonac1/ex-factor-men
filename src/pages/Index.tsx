import { motion } from "framer-motion";
import backgroundImage from "@/assets/background.jpg";
import bradImage from "@/assets/brad-browning.png";

const Index = () => {
  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center bg-background px-6 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          className="w-full h-full object-cover blur-[12px] scale-105 opacity-40"
          alt="Atmospheric background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
      </div>

      {/* Content Layer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative z-10 w-full max-w-2xl text-center"
      >
        <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
          The Ex Factor Guide — Men's Portal
        </span>

        <h1 className="text-4xl md:text-6xl text-foreground mb-8 tracking-tight leading-[1.1] text-balance">
          Welcome.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed font-light max-w-lg mx-auto text-pretty">
          Access Brad Browning's specific digital program for men to understand
          relationship dynamics and communication.
        </p>

        <img
          src={bradImage}
          alt="Brad Browning"
          className="w-full max-w-md mx-auto rounded-sm mb-12 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
        />

        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center h-16 px-10 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-[0.15em] rounded-sm shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-shadow hover:shadow-[0_20px_60px_rgba(37,99,235,0.5)] cursor-pointer"
        >
          Access the Men's Presentation Here
        </motion.a>
      </motion.div>

      {/* Footer */}
      <footer className="absolute bottom-8 w-full px-6 text-center z-10">
        <p className="text-[10px] text-muted-foreground/50 max-w-3xl mx-auto leading-relaxed uppercase tracking-wider">
          This site is not a part of the Google website or Google Inc.
          Additionally, this site is NOT endorsed by Google in any way. Google
          is a trademark of Google LLC.
          <span className="block mt-4 text-muted-foreground/60">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <span className="mx-3">|</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Use
            </a>
          </span>
        </p>
      </footer>
    </section>
  );
};

export default Index;
