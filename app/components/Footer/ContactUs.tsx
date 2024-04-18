import Link from "next/link";
function ContactUs() {
  return (
    <div className="py-10 justify-around">
      <Link
        href="/contact"
        className="text-white px-2 md:px-2 md:py-0 md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-400 lg:font-Lato-700 text-nowrap underline"
      >
        Contact Us
      </Link>
      <ul className="nav-ul justify-around ">
        <li className="my-2">
          <Link
            href="#"
            className="text-white px-2 md:px-2 md:py-0 md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-400 lg:font-Lato-700 "
          >
            amankumargupta2328@gmail.com
          </Link>
        </li>
        <li className="my-2">
          <Link
            href="#"
            className="text-white px-2 md:px-2 md:py-0 md:text-xl lg:px-3 lg:py-1 hover:bg-white hover:text-black hover:rounded-2xl text-base lg:text-2xl font-Lato-400 lg:font-Lato-700 text-nowrap"
          >
            +919122709244
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ContactUs;
