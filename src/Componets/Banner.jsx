import BannerImage from "../assets/banner.jpg";

function Banner() {
  return (
    <div className="w-full h-[25rem] relative ">
      <img className="h-full w-full" src={BannerImage} />
      <div className="flex flex-col gap-4 absolute top-10 left-0 right-0 w-[20rem] mx-auto ">
        <div className="text-5xl font-semibold text-white">Crypto Tracker</div>
        <div className=" font-semibold text-sm text-white text-center"> Get all info regarding crypto currencies </div>
      </div>
    </div>
  );
}

export default Banner;
