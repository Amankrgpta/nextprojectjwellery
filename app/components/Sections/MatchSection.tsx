import React from "react";
import Link from 'next/link';
import "tailwindcss/tailwind.css";
function MatchSection() {
  return (
    <div className="m-[8vw] p-[8vw] bg-[#212121]">
      <div className="pb-[6vw]">
        <h1 className="text-white font-playfair bold text-center text-2xl md:text-4xl lg:text-4xl  ">
          Find Your Perfect Match
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-[2vw]">
      <Link href="/collections/bridal"> 
        <div className="h-auto overflow-hidden w-[100%]">
          <div className="relative group">
            <img
              className="max-w-[800px] h-[42vw] w-[200%] transition-transform duration-500 group-hover:translate-x-[-50%] overflow-hidden z-[0]"
              src="../images/Bridal.png"
              alt=""
            />
            <p className="text-white font-lato font-bold absolute bottom-[1.5px] left-0 right-0 mx-auto text-center transition-transform duration-500 group-hover:translate-x-[-34%] text-[12px] md:text-[18px] lg:text-[30px]">
              Bridal
            </p>
          </div>
        </div>
        </Link>

        <div className="col-span-2 grid-rows-4 grid-flow-col">
        <div className="overflow-hidden">
   <Link href={`/collections/diamond`}>
  <div className="relative group h-[20vw]"> 
    <img
      className="max-w-[1600px] max-h-[60vw] h-[130%] w-[100%]  transition-transform duration-500 group-hover:translate-y-[-20%] overflow-hidden"
      src="../images/Diamond frame.png"
      alt=""
    />
    <p className="text-white font-lato font-bold absolute bottom-[1.5px] left-0 right-0 mx-auto text-center transition-transform duration-500 group-hover:translate-x-[-38%] text-[12px] md:text-[18px] lg:text-[30px]">
      Diamond
    </p>
  </div>
  </Link>
</div>

          <div className="grid grid-cols-2 gap-[2vw] mt-[2vw]">
            <div className="h-auto overflow-hidden w-[100%]">
              <Link href="/collections/silver">
              <div className="relative group">
                <img
                  className="max-w-[1600px] h-[20vw] w-[122%] transition-transform duration-500 group-hover:translate-x-[-16%] overflow-hidden z-[0]"
                  src="../images/Silver frame.png"
                  alt=""
                />
                <p className="text-white font-lato font-bold absolute bottom-[1.5px] left-0 right-0 mx-auto text-center transition-transform duration-500 group-hover:translate-x-[-33%] text-[12px] md:text-[18px] lg:text-[30px]">
                  Silver
                </p>
              </div>
              </Link>
            </div>

            <div className="h-auto overflow-hidden w-[100%]">
              <Link href="/collections/gold"> 
              <div className="relative group">
                <img
                  className="max-w-[1600px] h-[20vw] w-[140%] transition-transform duration-500 group-hover:translate-x-[-20%] overflow-hidden z-[0]"
                  src="../images/Gold frame.png"
                  alt=""
                />
                <p className="text-white font-lato font-bold absolute bottom-[1.5px] left-0 right-0 mx-auto text-center transition-transform duration-500 group-hover:translate-x-[-35%] text-[12px] md:text-[18px] lg:text-[30px]">
                  Gold
                </p>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[2vw] mt-[2vw]">
        <div className="h-auto overflow-hidden w-[100%]">
          <Link href="/collections/gifting" >
          <div className="relative group">
            <img
              className="max-w-[1600px] h-[20vw] w-[140%] transition-transform duration-500 group-hover:translate-x-[-20%] overflow-hidden z-[0]"
              src="../images/Gifting frame.png"
              alt=""
            />
            <p className="text-white font-lato font-bold absolute bottom-[1.5px] left-0 right-0 mx-auto text-center transition-transform duration-500 group-hover:translate-x-[-37%] text-[12px] md:text-[18px] lg:text-[30px]">
              Gifting
            </p>
          </div>
          </Link>
        </div>

        <div className="h-auto overflow-hidden w-[100%]">
          <Link href='/components/match-section/platinum'> 
          <div className="relative group">
            <img
              className="max-w-[1600px] h-[20vw] w-[140%] transition-transform duration-500 group-hover:translate-x-[-20%] overflow-hidden z-[0]"
              src="../images/Platinum frame.png"
              alt=""
            />
            
            <p className="text-white font-lato font-bold absolute bottom-[1.5px] left-0 right-0 mx-auto text-center transition-transform duration-500 group-hover:translate-x-[-34%] text-[12px] md:text-[18px] lg:text-[30px]">
              Platinum
            </p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MatchSection;
