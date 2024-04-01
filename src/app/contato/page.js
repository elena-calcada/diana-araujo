'use client'
import AnimatedTitle from "@/components/AnimatedTitle";
import { DividerOne } from "@/components/Dividers";
import LinkButtom from "@/components/LinkButtom";
import SectionLayout from "@/components/SectionLayout";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuInstagram, LuMapPin, LuPhone } from "react-icons/lu";

const variants = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5
    }
  }
}

export default function Contact() {
  return (
    <main>
      <SectionLayout className="!px-0">
        <motion.div
          className="w-full mx-auto mt-6 flex justify-between items-center gap-10 xl:max-w-[1200px] lg-max:flex-col lg-max:w-full lg-max:px-0"
          variants={variants}
          initial='initial'
          animate='animate'
        >

          <div
            className="lg-max:px-10 lg:w-1/2 flex flex-col gap-[1rem] font-text text-base text-textColor lg-max:mb-8"
          >
            <AnimatedTitle
              title="Contato"
              className="sm-max:text-6xl lg-max:text-center"
            />

            <p className="text-textColor font-text lg-max:text-center">
              Entre em contato, tire suas dúvidas e marque uma consulta.
            </p>

            <ul className="my-6">
              <li>
                <Link
                  href="tel:+552299931164"
                  target="_blank"
                  className="flex gap-2 text-textColor font-text lg-max:justify-center"
                >
                  <LuPhone size={26}/>
                  (22) 9 9993-1164
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.google.com.br/maps/place/Av.+Profa.+Carmem+Carneiro,+409+-+Jardim+Carioca,+Campos+dos+Goytacazes+-+RJ,+28080-424/@-21.7419446,-41.3246163,17z/data=!3m1!4b1!4m5!3m4!1s0xbdd4ffb5aa75a9:0x2a44206e87b844a7!8m2!3d-21.7419496!4d-41.3224276"
                  target="_blank"
                  className="flex gap-2 text-textColor font-text my-4 lg-max:justify-center"
                >
                  <LuMapPin size={26}/>
                  Av. Profa. Carmem Carneiro, 409
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.instagram.com/dradianaaraujo90' 
                  target={'_blank'}
                  className="flex gap-2 text-textColor font-text lg-max:justify-center"
                >
                  <LuInstagram size={26}/>
                  @dradianaaraujo90
                </Link>
              </li>
            </ul>

            <LinkButtom
              href="https://api.whatsapp.com/send?phone=+5522999931164&text=Olá Diana! Cheguei aqui   por meio do seu site. Gostaria de marcar uma consulta."
              className="lg-max:mx-auto xl:w-[250px]"
              title="Agendar consulta"
            />
          </div>

          <div className="w-full shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.989194660252!2d-41.32500252586417!3d-21.74194459727966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdd4ffb5aa75a9%3A0x2a44206e87b844a7!2sAv.%20Profa.%20Carmem%20Carneiro%2C%20409%20-%20Jardim%20Carioca%2C%20Campos%20dos%20Goytacazes%20-%20RJ%2C%2028080-424!5e0!3m2!1spt-BR!2sbr!4v1711975026390!5m2!1spt-BR!2sbr" height="450" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full"
            >
            </iframe>
          </div>

        </motion.div>

      </SectionLayout>

      <DividerOne/>
    </main>
  )
}