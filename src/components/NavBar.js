'use client'
import { menuItens } from "@/data/menuItems"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import logo from "../../public/images/logo.svg"

export const CustomLink = ({href, title, className=""}) => {
  const pathName = usePathname()
  return (
    <Link href={href} className={`${className} relative group text-base font-medium font-title hover:text-secondColor ${pathName === href ? "text-secondColor" : "text-titleColor"}`}>
      {title}

      <span
        className={`
          h-[1.3px] inline-block absolute left-0 -bottom-0.5
          group-hover:w-full bg-secondColor transition-[width] ease duration-300
          ${pathName === href ? "w-full bg-secondColor" : "w-0"}
        `}
      >&nbsp;</span>
    </Link>
  )
}
const CustomMobileLink = ({href, title, className="", toggle}) => {
  const router = useRouter()
  const pathName = usePathname()

  const handleClik = () => {
    toggle()
    router.push(href)
  }
  
  return (
    <button 
      href={href} 
      className={`${className} relative group text-white text-base font-medium font-title`}
      onClick={handleClik}  
    >
      {title}
      <span
        className={`
          h-[1.3px] inline-block bg-white absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${pathName === href ? "w-full" : "w-0"}
        `}
      >&nbsp;</span>
    </button>
  )
}

const NavBar = () => {
  const [shadow, setShadow] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleShadow = () => {
      if(window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener("scroll", handleShadow)
  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={shadow ? "w-full py-2 px-10 fixed z-50 bg-backgroundColor shadow-lg" : "w-full py-2 px-10 fixed z-50 bg-backgroundColor"}>
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
          <Link href="/">
            <Image 
              src={logo} 
              alt="Logotipo Diana Araújo"
              priority
            />
          </Link>
          <nav className="lg:block hidden">
            <ul className="flex gap-6">
              {menuItens.map((item, index) => (
                <li key={index}>
                  <CustomLink href={item.path} title={item.title} className="" />
                </li>
              ))}
            </ul>
          </nav>
          <nav className="flex-wrap gap-8 lg:flex hidden">
            <motion.div
              className="shadow-lg p-2 rounded-full shadow-gray-400"
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
            >
              <Link
                href='https://www.instagram.com/dradianaaraujo90' 
                target={'_blank'}
                className="w-6"
              > 
                <FaWhatsapp className="h-7 w-7 fill-primaryColor"/>
              </Link>
            </motion.div>
            <motion.div
              className="shadow-lg p-2 rounded-full shadow-gray-400"
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
            >
              <Link
                href='https://www.instagram.com/dradianaaraujo90' 
                target={'_blank'}
                className="w-8"
              >
                <FaInstagram className="h-7 w-7 fill-primaryColor"/>
              </Link>
            </motion.div>
          </nav>

          <button 
          className="flex-col justify-center items-center lg:hidden block"
          onClick={handleClick}
          >
            <span 
              className={`bg-primaryColor block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm
              ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}
              `}
            ></span>
            <span 
              className={`bg-primaryColor block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5
                ${isOpen ? "opacity-0" : "opacity-100"}
              `}
            ></span>
            <span 
              className={`bg-primaryColor block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm
                ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}
              `}
            ></span>
          </button>
        </div>
      
      {
        isOpen 

        ?

        <>
          <motion.div
            className="min-w-[70vw] max-h-[70vh] flex flex-col gap-8 items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-primaryColor/90 rounded-lg backdrop-blur-md py-32"
            initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
            animate={{scale:1, opacity:1}}
          >
            <nav className="">
              <ul className="flex flex-col gap-8 items-center ">
                {menuItens.map((item, index) => (
                  <li key={index}>
                    <CustomMobileLink 
                      href={item.path} 
                      title={item.title} 
                      toggle={handleClick} 
                    />
                  </li>
                ))}
              </ul>
            </nav>
            
            <nav className="flex items-center justify-center flex-wrap gap-8">
              <motion.div
                className="shadow-md p-2 rounded-full shadow-gray-400"
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
              >
                <Link
                  href='https://api.whatsapp.com/send?phone=+5522999931164&text=Olá Diana! Cheguei aqui por meio do seu site. Gostaria de marcar uma consulta.' 
                  target={'_blank'}
                  className="w-6"
                > 
                  <FaWhatsapp className="fill-white h-7 w-7"/>
                </Link>
              </motion.div>
              <motion.div
                className="shadow-md p-2 rounded-full shadow-gray-400"
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
              >
                <Link
                  href='https://www.instagram.com/dradianaaraujo90' 
                  target={'_blank'}
                  className="w-8"
                >
                  <FaInstagram className="fill-white h-7 w-7"/>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        </>

        :

        null
      }
    </header>
  )
}

export default NavBar