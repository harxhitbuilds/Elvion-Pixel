import { Button } from "@/components/ui/button";

import { useAuthStore } from "@/stores/useAuthStore";
import {
  auth,
  signInWithPopup,
  provider,
} from "@/configurations/firebase.config.js";
import { FcGoogle } from "react-icons/fc";

const AuthCard = () => {
  const { signUp } = useAuthStore();
  const handleGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();
      await signUp(idToken);
    } catch (error) {
      console.error("Google auth failed:", error);
    }
  };
  return (
    <div className="mr-12">
      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        <div className="backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-inter text-white mb-2 font-robert-medium font-bold">
              Welcome to Nimbus
            </h1>
            <p className="text-zinc-400 font-robert-regular">
              Your AI-powered travel companion
            </p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={handleGoogleAuth}
              className="w-full bg-white text-black hover:bg-gray-100 py-6 font-medium cursor-pointe rounded-xl cursor-pointer"
            >
              <FcGoogle className="mr-3 h-5 w-5 font-robert-regular" />
              Continue with Google
            </Button>

            <p className="text-xs text-zinc-500 text-center mt-6 font-robert-regular">
              By continuing, you agree to our{" "}
              <a href="#" className="text-white hover:text-gray-300 underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-white hover:text-gray-300 underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthCard;
