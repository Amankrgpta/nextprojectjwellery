import Link from "next/link";

export default function Gifting() {
    return (
      <div 
      className="relative pt-[5.56vw] pb-[9.86vw] "
      style={{
        background: 'radial-gradient(56.98% 56.98% at 55.68% 21.79%, #090909 0%, #181818 100%)'
      }}> 
        <div className="relative w-[83.33vw] aspect-[2/1] mx-auto mt-[5.57vw] overflow-hidden bg-white mb-[5.57vw] ">
          <img className="w-full aspect-[500/750] -translate-y-[27vw]" src="/images/gifting_01.png" alt="hello" />
          <div className="absolute top-1/3 grid grid-cols-1 grid-flow-row w-full aspect-[1200/216] gap-[2.92vw]">
              <div className="font-playfair font-bold text-[5vw] text-center">Gifts that make <span className="font-kaushan">memories</span></div>
              <Link href="/collections/gifting/gifting-subsection"> 
              <div className="flex justify-center">
                   <button className=" font-lato font-bold text-[2.22vw] px-[3.33vw] py-[2.22vw] border-[3px] border-black text-black hover:bg-black mx-auto hover:text-[#e3d4c9] transition duration-100 ease-out hover:ease-in" >See Collection</button> 
      </div></Link>
          </div>
        </div>

        {/* section 2 starts here */}
        <div className="font-playfair font-bold text-[4.45vw] text-[#E2D5C7]  text-center mb-[6.32vw]">Antiques & Souvenirs</div>
        <div className="relative w-[83.33vw] aspect-[2/1] mx-auto mt-[5.57vw] overflow-hidden bg-white mb-[5.57vw]">

          <img className="w-full aspect-[734/489] -translate-y-[8vw]" src="/images/gifting_02.png" alt="hello" />
           
              <div className="w-full flex justify-center absolute top-[7vw]">
                   <button className=" font-lato font-bold text-[2.22vw] px-[3.33vw] py-[2.22vw] border-[3px] border-[#e3d4c9] text-[#e3d4c9] hover:bg-[#e3d4c9] mx-auto hover:text-black transition duration-100 ease-out hover:ease-in" >See Collection</button> 
                      
      </div>
      
          </div>

          {/* section 3 starts here */}
          <div className="font-playfair font-bold text-[4.45vw] text-[#E2D5C7]  text-center mb-[6.32vw] ">Coins</div>
        <div className="relative w-[83.33vw] aspect-[2/1] mx-auto mt-[5.57vw] overflow-hidden bg-white ">

          <img className="w-full aspect-[797/448]" src="/images/gifting_03.png " alt="hello" />
              <div className="w-full flex justify-center absolute top-[7vw]">
                   <button className=" font-lato font-bold text-[2.22vw] px-[3.33vw] py-[2.22vw] border-[3px] border-[#e3d4c9] text-[#e3d4c9] hover:bg-[#e3d4c9] mx-auto hover:text-black transition duration-100 ease-out hover:ease-in" >See Collection</button> 
                      
      </div>
          </div>
        </div>
    )
  }
  
  