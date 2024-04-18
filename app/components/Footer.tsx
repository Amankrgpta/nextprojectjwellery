import Link from 'next/link';

import AboutUs from "./Footer/AboutUs";
import ContactUs from "./Footer/ContactUs";
import Information from "./Footer/Information";
import OurCollections from "./Footer/OurCollections";

export default function Footer() {
  return (
    <footer className="z-10">
      <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="./../images/top_img.png"
          alt="Logo"
          className="relative mx-auto block w-30 pt-10"
        />
      </Link>

      <h1 className='text-white bg-black px-4 my-7 font-playfair text-2xl md:text-4xl lg:text-4xl leading-10 mb-14 text-center'>Jewelery for every moment</h1>
      <div className="mx-auto py-2 px-8 md:py-8 md:px-16 md:gap-7 md:w-4/5 xl:w-3/5 grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4  "> 
      <div><AboutUs/></div>
      <div><OurCollections/></div>
      <div><Information/></div>
      <div><ContactUs/></div>
      </div>
    </footer>
  );
}
