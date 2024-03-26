'use client'
import { motion } from "framer-motion"

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    }
  }
}
const singelWord = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    }
  }
}

const AnimatedTitle = ({title, className=''}) => {
  return (
    <div className='w-full mx-auto flex items-center justify-center overflow-hidden'>
      <motion.h1 className={`inline-block w-full text-titleColor font-title font-bold mb-8 text-7xl ${className}`}
        variants={quote}
        initial='initial'
        animate='animate'
      >
        {
          title.split(' ').map((word, index) => 
            <motion.span key={word+'-'+index} className='inline-block'
              variants={singelWord}
            >
              {word}&nbsp;
            </motion.span>
          )
        }
      </motion.h1>
    </div>
  )
}

export default AnimatedTitle