import Link from "next/link"
function AboutUs() {
  return (
    <div className="py-10 justify-around">
            <Link href="/about-us" className="text-white px-2 md:px-2 md:py-0 md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-400 lg:font-Lato-700 text-nowrap underline">
              About Us
            </Link>
       <ul className="nav-ul bg-black justify-around">
          <li className="my-2">
            <Link href="/about-us/our-story" className="text-white px-2 md:px-2 md:py-0 md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-400 lg:font-Lato-700 text-nowrap">
              Our Story
            </Link>
          </li>
          <li className="my-2">
            <Link href="/about-us/media" className="text-white px-2 md:px-2 md:py-0 md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-400 lg:font-Lato-700 text-nowrap">
              Media
            </Link>
          </li>
          <li className="my-2">
            <Link href="/about-us/store-locator" className="text-white px-2 md:px-2 md:py-0 md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-400 lg:font-Lato-700 text-nowrap">
              Store Locator
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default AboutUs
