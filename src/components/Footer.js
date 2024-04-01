'use client'
import { menuItens } from "@/data/menuItems"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"

const MotionLink = motion(Link)

const Footer = () => {
  return(
    <footer className="bg-bacgroundColorFooter">
      <div className="max-w-[700px] sm-max:max-w-[500px] mx-auto flex xs:flex-col xs:gap-10 px-10 justify-between items-center py-8">
        <div className="flex flex-col items-center">
          <h2
            className="text-titleColor font-title text-lg font-semibold mb-4"
          >
            Navegação
          </h2>

          <nav>
            <ul className="flex flex-col items-center gap-3">
              {menuItens.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.path} 
                    className="font-text text-base text-textColor"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col justify-center items-center">
            <h2
              className="text-titleColor font-title text-lg font-semibold mb-4"
            >
              Localização
            </h2>
            <div className="flex flex-col items-center">
              <p className="font-text text-textColor">Avanida Carmem Carneiro, 409</p>
              <p className="font-text text-textColor">Parque Jardim Carioca</p>
              <p className="font-text text-textColor">Campos dos Goytacazes / RJ</p>
              <p className="font-text text-textColor">Telefone: (22) 9 9993-1164</p>
            </div>
          </div>
          <div className="flex gap-8">
            <MotionLink
              href='https://www.instagram.com/dradianaaraujo90' 
              target={'_blank'}
              className="w-8"
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
            >
              <FaInstagram className="h-7 w-7 text-textColor"/>
            </MotionLink>
            <MotionLink
              href='https://www.instagram.com/dradianaaraujo90' 
              target={'_blank'}
              className="w-8"
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
            >
              <FaWhatsapp className="h-7 w-7 text-textColor"/>
            </MotionLink>
          </div>
        </div>
      </div>
      <div className="bg-primaryColor py-1 px-10">
        <div className="max-w-[1200px] mx-auto flex sm-max:flex-col items-center justify-between">
          <span className="text-white font-text">
            {new Date().getFullYear()} &copy; Todos os direitos reservados.
          </span>
          <div className="flex items-center font-text text-white">
            Odontologia
            <span className="text-[#E4B742] text-2xl px-1">&#9825;</span>
            Humanizada
          </div>
          <Link 
            href='https://api.whatsapp.com/send?phone=+5522999931164&text=Olá Diana! Cheguei aqui por meio do seu site. Gostaria de marcar uma consulta.'
            className='underline underline-offset-2 text-white font-text'
            target={'_blank'}
          >
            Diga olá
          </Link>
          </div>
      </div>
    </footer>
  )
}

export default Footer