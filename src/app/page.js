'use client'
import AnimatedTitle from "@/components/AnimatedTitle";
import LinkButtom from "@/components/LinkButtom";
import { motion } from "framer-motion";
import Image from "next/image";
import desktop from "../../public/images/home-desktop.png";

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
    <>
      <main className="">
        <section id="home">
            <div className="h-[calc(100vh+8rem)] relative">
              <Image 
                src={desktop} 
                alt="teste" 
                className="object-cover h-[calc(100vh+8rem)] absolute"
              />

              <div className="w-[55%] absolute left-48 top-40">
                <AnimatedTitle title="Diana Araújo"/>

                <motion.div
                  variants={variants}
                  initial='initial'
                  animate='animate'
                >
                  <p className="w-3/4 font-text font-normal text-titleColor text-xl mt-2 mb-8">
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
    </>
  );
}
