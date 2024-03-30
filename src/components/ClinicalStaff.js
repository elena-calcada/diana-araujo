import { clinicalStaff } from "@/data/clinicalStaff";
import { motion } from "framer-motion";
import Image from "next/image";

const ClinicalStaff = () => {
  return(
    <div 
      className="max-w-[400px] grid grid-cols-6 gap-10 mx-auto
      md:max-w-[1200px]
      "
    >
      {Object.entries(clinicalStaff).map(([index, value]) => (
        <motion.div 
          key={index}
          className="col-span-6 mx-auto flex flex-col gap-4 justify-center items-center
          md:col-span-2
          "
          initial={{y:50}}
          whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        >
          <Image src={value.image} alt={value.alt} />

          <div className="text-center">
            <h4 className="text-titleColor font-title font-semibold text-xl">
              {value.identification}
            </h4>
            <h5 className="text-textColor font-text">
              {value.specialty}
            </h5>
            <p className="text-textColor font-text">
              {value.cro}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ClinicalStaff