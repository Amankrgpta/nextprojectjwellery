'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const toggleDropdown = () => {
    setDropdownVisible(true);
  };

  const closeDropdown = () => {
    // Only close the dropdown if the mouse is not hovering over a collection link
      setDropdownVisible(false);
  };

  const handleHover = (link: string) => {
    setHoveredLink(link);
    setDropdownVisible(true);
  };

  return (
    <div className='z-10' onClick={closeDropdown}>
      <Link href="/">
        <img
          src="./../images/top_img.png"
          alt="Logo"
          className="mx-auto py-1 px-8 w-[30vw] gap-2 md:py-4 md:px-16 md:gap-2.5 md:w-72"
        />
      </Link>

      <nav className="mx-auto py-1 px-8 md:py-4 md:px-16 md:gap-7 md:w-4/5">
        <ul className="flex justify-around sm:gap-[2px] gap-1 lg:gap-2">
          <li>
            <Link href="/about-us/our-story" onClick={closeDropdown} className="text-white px-[1px] md:px-2 md:py-0 text-[11.7px] md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-500 lg:font-Lato-700 text-nowrap">
              Our Story
            </Link>
          </li>
          <li className="nav-li">
            <div className='relative'>
              <div onMouseEnter={toggleDropdown} className="text-white px-[1px] md:px-2 md:py-0 text-[11.7px] md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-500 lg:font-Lato-700 text-nowrap">
                Collections
              </div>
              {dropdownVisible && (
                <div onMouseEnter={() => setDropdownVisible(true)}   className="z-20 absolute md:top-[40px] bg-[#212121] px-[2vw] shadow-md w-[80vw] md:w-[60vw] lg:w-[50vw] md:left-[-10vw] left-[-15vw] pb-[3vw]">
                  <div className='absolute top-[50px] md:top-[70px] lg:top-[90px] right-[2vw] '>
                    {hoveredLink === "gold" && <img className=' w-[220px] h-[220px] lg:w-[20vw] lg:h-[18vw]' src="/images/Rectangle 17.png" alt="asdfghb" />}
                    {hoveredLink === "diamond" && <img className=' w-[220px] h-[220px] lg:w-[20vw] lg:h-[18vw]' src="/images/image.png" alt="" />}
                    {hoveredLink === "silver" && <img className=' w-[220px] h-[220px] lg:w-[20vw] lg:h-[18vw]' src="/images/image 72.png" alt="" />}
                    {hoveredLink === "millenial" && <img className=' w-[220px] h-[220px] lg:w-[20vw] lg:h-[18vw]' src="/images/image 141.png" alt="" />}
                    {hoveredLink === "platinum" && <img className=' w-[220px] h-[220px] lg:w-[20vw] lg:h-[18vw]' src="/images/imgs9.png" alt="" />}
                    {hoveredLink === "bridal" && <img className=' w-[220px] h-[220px] lg:w-[20vw] lg:h-[18vw]' src="/images/8@2x.png" alt="" />}
                    {hoveredLink === "gifting" && <img className=' w-[220px] h-[220px] lg:w-[20vw] lg:h-[18vw]' src="/images/HQ9A8066.png" alt="" />}
                  </div>
                  <div className='text-center text-[16px] md:text-xl lg:text-2xl text-white pt-[2vw] pb-[1vw] '>Collections</div>
                  <hr />
                  <Link href="/collections/gold" onMouseEnter={() => handleHover("gold")} onClick={closeDropdown} className="block text-[16px] md:text-xl text-2xl text-white pt-[2vw] hover:opacity-[0.7]">
                    Gold
                  </Link>
                  <Link href="/collections/diamond" onMouseEnter={() => handleHover("diamond")} onClick={closeDropdown} className="block text-[16px] md:text-xl text-2xl text-white pt-[0.5vw] hover:opacity-[0.7]">
                    Diamond
                  </Link>
                  <Link href="/collections/silver" onMouseEnter={() => handleHover("silver")} onClick={closeDropdown} className="block text-[16px] md:text-xl text-2xl text-white pt-[0.5vw] hover:opacity-[0.7]">
                    Silver
                  </Link>
                  <Link href="/collections/millennial" onMouseEnter={() => handleHover("millenial")} onClick={closeDropdown} className="block text-[16px] md:text-xl text-2xl text-white pt-[0.5vw] hover:opacity-[0.7]">
                    Millenial
                  </Link>
                  <Link href="/collections/platinum" onMouseEnter={() => handleHover("platinum")} onClick={closeDropdown} className="block text-[16px] md:text-xl text-2xl text-white pt-[0.5vw] hover:opacity-[0.7]">
                    Platinum
                  </Link>
                  <Link href="/collections/bridal" onMouseEnter={() => handleHover("bridal")} onClick={closeDropdown} className="block text-[16px] md:text-xl text-2xl text-white pt-[0.5vw] hover:opacity-[0.7]">
                    Bridal
                  </Link>
                  <Link href="/collections/gifting" onMouseEnter={() => handleHover("gifting")} onClick={closeDropdown} className="block text-[16px] md:text-xl text-2xl text-white pt-[0.5vw] hover:opacity-[0.7]">
                    Gifting
                  </Link>
                  
                
                </div>
              )}
            </div>
          </li>
          <li>
            <Link href="/information/schemes" onClick={closeDropdown} className="text-white px-[1px] md:px-2 md:py-0 text-[11.7px] md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-500 lg:font-Lato-700 text-nowrap">
              Schemes
            </Link>
          </li>
          <li>
            <Link href="/about-us/store-locator" onClick={closeDropdown} className="text-white px-[1px] md:px-2 md:py-0 text-[11.7px] md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-500 lg:font-Lato-700 text-nowrap">
              Store Locator
            </Link>
          </li>
          <li className=" block">
            <Link href="/contact" onClick={closeDropdown} className="text-white px-[1px] md:px-2 md:py-0 text-[11.7px] md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-500 lg:font-Lato-700 text-nowrap">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}