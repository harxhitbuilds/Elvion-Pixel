import AuthCard from "@/components/auth-page/auth-card";
import AuthVideo from "@/components/auth-page/auth-video";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const AuthPage = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPosition: [
        "50% 10%",
        "52% 15%",
        "48% 12%",
        "53% 18%",
        "50% 10%",
      ],
      backgroundSize: [
        "100% 100%",
        "110% 110%",
        "105% 105%",
        "115% 120%",
        "100% 100%",
      ],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }, [controls]);

  return (
    <div className="min-h-screen h-screen w-full bg-black py-12 px-56 relative">
      <motion.div
        className="absolute inset-0 z-0"
        animate={controls}
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 10%, #000000 40%, #f59e0b 100%)
          `,
        }}
      />
      <div className="h-full bg-black flex items-center justify-between p-2 rounded-xl relative z-10 border border-zinc-900">
        <AuthVideo />
        <AuthCard />
      </div>
    </div>
  );
};
export default AuthPage;
