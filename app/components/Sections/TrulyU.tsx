const TrulyU = () => {
  return (
    <div className="p-[7vw] max-w-[1290px] h-auto items-center flex flex-col md:flex-row justify-between  rounded-br-[240px] gap-10 bg-[#212121] mx-[8vw] my-[8vw] ">
      <div className="order-2"> 
      <img
        className="rounded-br-[240px] object-cover    w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] lg:w-[586.5px] lg:h-[600px]"
        src="/images/truly.png" 
        alt="image"/>
      </div>
<div className="gap-[42px] md:h-1/2 md:w-1/2 flex flex-col justify-center items-center px-2 py-2">
  <h2 className="font-playfair text-white font-bold text-2xl md:text-4xl lg:text-4xl text-center text-nowrap md:py-4 mx-auto">
    Be truly You
  </h2>
  <div>
    <p className="font-lato text-white text-2 md:text-[18px] lg:text-[26px] ">
      We believe jewelry is not just an ornament but an expression of
      ourselves. With that belief, we created a collection that not only
      stands out but also fits the millennial lifestyle.
    </p>
  </div>
  <div className="text-center bg-[#E3D4C9] w-[269px] h-[70px] px-8 py-4">
    <button className="text-[#201A1E] font-Lato font-bold leading-[38.4px] text-[32px] text-nowrap">
      See Collection
    </button>
  </div>
</div>

    </div>
  );
};

export default TrulyU;