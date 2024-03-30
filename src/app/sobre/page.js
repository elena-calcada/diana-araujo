'use client'
import AnimatedTitle from "@/components/AnimatedTitle";
import CardTestimonial from "@/components/CardTestimonial";
import { DividerOne, DividerTwo } from "@/components/Dividers";
import SectionLayout from "@/components/SectionLayout";
import SlideShow from "@/components/SlideShow";
import { motion } from "framer-motion";
import Image from "next/image";
import aboultImage from "../../../public/images/aboult.png";

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

export default function Aboult() {
  return (
    <main>
      <SectionLayout id="sobre">
          <AnimatedTitle
            title="Sobre nós"
            className="text-center mt-6 sm-max:text-6xl"
          />

          <motion.div 
            className="w-full mx-auto mt-8 flex justify-between items-center xl:max-w-[1200px] lg-max:flex-col lg-max:w-full lg-max:px-0"
            variants={variants}
            initial='initial'
            animate='animate'
          >
            <div className="lg-max:w-full flex justify-center">
              <Image
                src={aboultImage}
                alt="Foto da Diana Araújo de óculos, olhando para a câmera e sorrindo"
                priority
                className="xl:w-[525px] "
                
              />
            </div>
            <div 
              className="xl:w-1/2 lg-max:mt-10 flex flex-col gap-[1rem] font-text text-base text-textColor "
            >
              <p>
                Olá! Sou Diana, há mais de 10 anos responsável pelo consultório odontológico Diana Araújo. Aqui, o atendimento ao paciente é feito seguindo o conceito da Odontologia Humanizada, o que representa uma tranquilizadora diferença nessa área.
              </p>
              <p>
                Essa é a hora em que você me pergunta: “Mas, Diana, o que isso significa 🤔?”
              </p>
              <p>
                Bom, significa que o paciente é tratado com atenção, cuidado, empatia... e que o relacionamento dentista-paciente é cultivado com tempo e paciência. Em outras palavras, implica oferecer um atendimento que realmente resolve o seu problema de uma forma eficiente, inteligente e humana, reforçada por um ambiente aconchegante, acolhedor e, claro, sempre com aquele cafezinho esperto só esperando por você.
              </p>
              <p>
                “Legal!... mas por que esse tipo de atendimento é assim tão especial 🤔?”
              </p>
              <p>
                Então, a humanização transforma o atendimento odontológico em algo prazeroso, dando a você a possibilidade de superar dificuldades como, por exemplo, a odontofobia, conhecida também como medo de dentista.
              </p>
              <p>
                Huuum!… não está acreditando em mim, né 😅?!
              </p>
              <p>
                Vamos fazer o seguinte: que tal você marcar um horário e vir até aqui, para que eu mostre como esse tipo de atendimento realmente funciona?
              </p>
              <p>
                Combinado? Aguardo você 😉!
              </p>
            </div>
          </motion.div>
      </SectionLayout>

      <DividerOne/>

      <SectionLayout
        id="space"
        className="!bg-white"
      >
        <h2
          className="inline-block w-full text-titleColor font-title font-bold text-6xl text-center mb-12"
        >
          Nosso Espaço
        </h2>

        <p className="font-text text-base text-textColor text-center mb-10 max-w-[600px] mx-auto">
          Venha conhecer o nosso espaço. Um ambiente humanizado, aconchegante e acolhedor. Aqui você se sentirá tranquilo e seguro.
        </p>

        <SlideShow/>
      </SectionLayout>

      <DividerTwo/>

      <SectionLayout id="testimonials">
        <h2
          className="inline-block w-full text-titleColor font-title font-bold text-6xl text-center mb-24"
        >
          O que as pessoas estão dizendo?
        </h2>

        <CardTestimonial/>
      </SectionLayout>

      <DividerOne/>
    </main>  
  )
}