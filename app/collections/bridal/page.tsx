export default function Bridal() {
  return (
    <div className="bg-[#121212]">
      <div>
        <img
          className="b-green-500 absolute top-[70vw] h-[100vw] md:h-[80vw]"
          src="../../images/Subtract 2.png"
          alt="background image"
        />
      </div>

      <div className=" z-10 relative">
        <div className=" bg-gray-700 w-[100vw] h-[50vw] z-10">
          <img
            src="../../images/Rectangle 16.png"
            alt="first picture"
            className="w-[100%]"
          />
        </div>
        <div className=" flex justify-center absolute top-[35vw] left-1/2 right-1/2 z-10">
          <h2 className="text-white font-playfair font-bold text-2xl md:text-4xl lg:text-7xl text-nowrap text-center z-10">
            For the once in a <br /> Lifetime moment
          </h2>
          <span className="text-white font bold text-xl md:text-3xl lg:text-5xl text-nowrap items-centers mt-[1vw] border-2 lg:border-[3px] border-white    p-[2vw] m-[5vw] z-10">
            Request a tour
          </span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-1 ">
        <div className=" w-full z-10">
          {" "}
          <h1 className="text-center text-white font-playfair font-bold text-2xl md:text-4xl lg:text-7xl text-nowrap mt-[7vw] z-10 ">
            Our most beloved collection
          </h1>
        </div>
        <div className="mt-[6vw]  w-[80vw] h-[40vw] mx-auto z-10">
          <img
            src="../../images/image 53.png"
            alt="second picture"
            className="w-[100%]"
          />
        </div>
        <div className="mt-[6vw]  w-[80vw] h-[40vw] mx-auto z-10">
          <img
            src="../../images/image 51.png"
            alt="third picture"
            className="w-[100%]"
          />
        </div>
        <div className="mt-[6vw]  w-[80vw] h-[40vw] mx-auto z-10">
          <img
            src="../../images/image 100.png"
            alt="forth picture"
            className="w-[100%]"
          />
        </div>

        <div className="transform rotate-180 top-[20vw]">
          <img
            className="absolute left-[0px] h-[100vw] md:h-[80vw] "
            src="../../images/Subtract 2.png"
            alt="background image"
          />
        </div>

        <div className="mt-[6vw]  w-[80vw] h-[40vw] mx-auto z-10">
          <img
            src="../../images/image 55.png"
            alt="fifth picture"
            className="w-[100%]"
          />
        </div>
        <div className=" w-full flex justify-center my-[5vw] z-10">
          {" "}
          <span className="text-white font bold text-xl md:text-3xl lg:text-5xl text-nowrap items-centers mt-[1vw] border-2 lg:border-[3px] border-white p-[2vw] z-10">
            Book a call
          </span>{" "}
        </div>
      </div>
      <div className="relative ">
        <img
          className=" absolute  top-[-50vw] h-[100vw] md:h-[80vw]"
          src="/images/Subtract 2.png"
          alt="background"
        />
      </div>
    </div>
  );
}
