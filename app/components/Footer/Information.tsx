import Link from 'next/link';

function Information() {
  return (
    <div className="py-10 justify-around">
            <Link href="/information" className="text-white px-2 md:px-2 md:py-0 md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-400 lg:font-Lato-700 text-nowrap underline">
              Information
            </Link>
       <ul className="nav-ul bg-black justify-around">
          <li className="my-2">
            <Link href="/information/schemes" className="text-white px-2 md:px-2 md:py-0 md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-400 lg:font-Lato-700 text-nowrap">
              Schemes
            </Link>
          </li>
          <li className="my-2">
            <Link href="/information/career" className="text-white px-2 md:px-2 md:py-0 md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-400 lg:font-Lato-700 text-nowrap">
              Career
            </Link>
          </li>
          
        </ul>
    </div>
  )
}

export default Information
