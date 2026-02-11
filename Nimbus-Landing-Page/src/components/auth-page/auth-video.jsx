import authVideo from "../../../public/videos/auth-page-video.mp4";

const AuthVideo = () => {
  return (
    <div className="h-full w-[35vw] bg-red-500 rounded-xl overflow-hidden flex items-center justify-center">
      <video
        src={authVideo}
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};
export default AuthVideo;
