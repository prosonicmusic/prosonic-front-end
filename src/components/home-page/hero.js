import bg from "../../../public/images/studio6.jpg";

function Hero() {
  return (
    <header className="bg-hero h-[50vh] bg-center bg-no-repeat bg-cover relative mb-[30px] before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-hero_before">
      <div className="flex flex-col items-center justify-center h-full px-8 text-center">
        <h1 className="text-[60px] tracking-[8px] font-thin z-20 max-[900px]:text-[100%]">
          Listen, Pick up, Order
        </h1>
        <p className="text-[23px] max-w-[600px] mt-[20px] mb-[30] tracking-[7px] z-20 max-[900px]:text-[100%]">
          Sound Like a Pro With Prosonic
        </p>
      </div>
    </header>
  );
}

export default Hero;
