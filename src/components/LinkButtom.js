import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"


const LinkButtom = ({href, title, className=''}) => {
  return (
    <Link href={href} className={`${className} inline-flex items-center gap-2 text-white bg-primaryColor py-4 px-8 text-lg font-title rounded-xl hover:opacity-90 transition-[opacity] duration-300 shadow-lg sm-max:text-base`}>
      <FaWhatsapp className="h-6 w-6 text-white sm-max:h-5 sm-max:w-5"/>
      {title}
    </Link>
  )
}

export default LinkButtom