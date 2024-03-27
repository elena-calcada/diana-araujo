import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const zoomOutProperties = {
  duration: 8000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  scale: 1.4,
  arrows: true
};

const CardTestimonial = () => {
  return (
    <div className="max-w-[700px] mx-auto">
      <Zoom {...zoomOutProperties}>
      {testimonials.map((testimonial) => (
          <div 
            key={testimonial.name}
            className="max-w-[500px] mx-auto p-8 bg-white rounded shadow-lg xs:px-12"
          >
            <blockquote>
              <p className="font-text text-titleColor text-base mb-4 relative indent-8">
                <span
                  className="text-primaryColor font-serif absolute text-7xl left-[-2.2rem] top-[-0.7rem]"
                >
                  &ldquo;
                </span>
                {testimonial.testimonial}
              </p>
              <cite className="flex items-center text-textColor text-base font-text">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.alt}
                  className="w-[2rem] h-[2rem] rounded-full mr-2"
                />
                {testimonial.name}
              </cite>
            </blockquote>
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default CardTestimonial