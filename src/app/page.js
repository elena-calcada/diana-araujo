'use client'
import AnimatedTitle from "@/components/AnimatedTitle";
import LinkButtom from "@/components/LinkButtom";
import { motion } from "framer-motion";
import Image from "next/image";
import desktop from "../../public/images/home-desktop.png";
import mobile from "../../public/images/home-mobile.png";
import tablet from "../../public/images/home-tablet.png";

const variants = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5
    }
  }
}

export default function Home() {
  return (
    <main className="">
      <section>
        <div className="h-[calc(100vh+8rem)] relative">
          <Image 
            src={desktop} 
            alt="teste"
            priority 
            className="h-[calc(100vh+8rem)] absolute md-max:hidden lg:object-cover"
          />

          <Image 
            src={tablet} 
            alt="teste"
            priority 
            className="h-[calc(100vh+8rem)] absolute md-max:object-cover lg:hidden"
          />

          <Image 
            src={mobile} 
            alt="teste"
            priority 
            className="h-[calc(100vh+8rem)] absolute sm-max:object-cover md:hidden"
          />

          <div className="w-full absolute px-10 top-[12rem] sm:top-[14rem]
           lg:top-[12rem] 2xl:top-[18rem] text-center
          ">
            <AnimatedTitle 
              title=" Diana Araújo"
              className="!text-[5rem] sm:!text-[6rem] md:!text-[6rem] lg:!text-[7rem] 2xl:!text-[9rem]"
            />
            <motion.div
              variants={variants}
              initial='initial'
              animate='animate'
              
            >
              <p className="max-w-[500px] md:max-w-[600px] lg:max-w-[800px] mx-auto font-text font-normal text-titleColor text-base lg:text-xl mt-2 mb-10">
                Na Clínica Odontológica Diana Araújo, proporcionamos saúde e bem estar através da Odontologia Humanizada. Contamos com uma equipe  multidisciplinar, capacitada e experiente nas mais diversas áreas da Odontologia.
              </p>

              <LinkButtom
                href="https://api.whatsapp.com/send?phone=+5522999931164&text=Olá Diana! Cheguei aqui   por meio do seu site. Gostaria de marcar uma consulta."
                className=""
                title="Agendar consulta"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
