import { typesOfTreatments } from "@/data/typesOfTreatments";
import { motion } from "framer-motion";
import Image from "next/image";

const variantsCard = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1
    }
  }
}

const CardTreatment = () => {
  return(
    <motion.div 
      className="max-w-[400px] grid grid-cols-6 gap-10 mx-auto
      xl:max-w-[1200px] md:max-w-[800px] 
      "
      variants={variantsCard}
      initial='initial'
      animate='animate'
    >
     {Object.entries(typesOfTreatments).map(([index, value]) => (
        <motion.div 
          key={index} 
          className="flex flex-col justify-center items-center gap-4
          bg-white shadow-xl py-[2.5rem] px-[2rem] border-b-[0.25rem] border-b-primaryColor rounded-md
          col-span-6 xl:col-span-2 md:col-span-3
          "
          initial={{y:50}}
          whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        >

          <Image src={value.image} alt={value.alt} />

          <div className="max-w-[16.5rem] text-center">
            <h3 className="text-titleColor font-title font-bold text-2xl mb-4">
              {value.title}
            </h3>
            <p className="text-textColor font-text">
              {value.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default CardTreatment