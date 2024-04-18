import Link from "next/link";

function OurCollections() {
  return (
    <div className="py-10 justify-around">
      <Link
        href="/collections"
        className="text-white px-2 md:px-2 md:py-0 md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-400 lg:font-Lato-700 text-nowrap underline"
      >
        Our Collections
      </Link>
      <ul className="nav-ul bg-black justify-around">
        <li className="my-2">
          <Link
            href="/collections/gold"
            className="text-white px-2 md:px-2 md:py-0 md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-400 lg:font-Lato-700 text-nowrap"
          >
            Gold
          </Link>
        </li>
        <li className="my-2">
          <Link
            href="/collections/silver"
            className="text-white px-2 md:px-2 md:py-0 md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-400 lg:font-Lato-700 text-nowrap"
          >
            Silver
          </Link>
        </li>
        <li className="my-2">
          <Link
            href="/collections/diamond"
            className="text-white px-2 md:px-2 md:py-0 md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-400 lg:font-Lato-700 text-nowrap"
          >
            Diamond
          </Link>
        </li>
        <li className="my-2">
          <Link
            href="/collections/bridal"
            className="text-white px-2 md:px-2 md:py-0 md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-400 lg:font-Lato-700 text-nowrap"
          >
            Bridal
          </Link>
        </li>
        <li className="my-2">
          <Link
            href="/collections/traditional"
            className="text-white px-2 md:px-2 md:py-0 md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-400 lg:font-Lato-700 text-nowrap"
          >
            Traditional
          </Link>
        </li>
        <li className="my-2">
          <Link
            href="/collections/millennial"
            className="text-white px-2 md:px-2 md:py-0 md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-400 lg:font-Lato-700 text-nowrap"
          >
            Millennial
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default OurCollections;
