'use client'
import AnimatedTitle from "@/components/AnimatedTitle";
import CardTreatment from "@/components/CardTreatment";
import ClinicalStaff from "@/components/ClinicalStaff";
import { DividerOne, DividerTwo } from "@/components/Dividers";
import SectionLayout from "@/components/SectionLayout";
import { motion } from "framer-motion";

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

export default function Treatments() {
  return (
    <main>
      <SectionLayout>
        <AnimatedTitle
          title=" Nossos tratamentos"
          className="text-center mt-6 sm:text-6xl xs:!text-[2.75rem]"
        />

        <motion.p 
          className="font-text text-base text-textColor text-center mb-16 mt-6 max-w-[600px] mx-auto"
          variants={variants}
          initial='initial'
          animate='animate'
        >
          Oferecemos o melhor atendimento nos mais diversos tipos de tratamentos e com os melhores especialistas.
        </motion.p>

        <CardTreatment/>
      </SectionLayout>

      <DividerOne/>

      <SectionLayout className="!bg-white">
        <h3 className="text-titleColor font-title font-bold text-center mt-6 mb-10 sm:text-6xl xs:text-5xl">
          Corpo Clínico
        </h3>
        <p className="font-text text-base text-textColor text-center mb-16 mt-6 max-w-[600px] mx-auto">
          Contamos com profissionais capacitados e experientes em diversas áreas da odontologia.
        </p>

        <ClinicalStaff/>
      </SectionLayout>

      <DividerTwo/>
    </main>
  )
}