import { spaceImages } from '@/data/spaceImages';
import Image from 'next/image';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const zoomOutProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

const SlideShow = () => {
  return (
    <div className="max-w-[700px] mx-auto">
      <Zoom {...zoomOutProperties} >
        {Object.entries(spaceImages).map(([index, value]) => (
          <div key={index} className='flex items-center justify-center'>
            <Image key={index} src={value.image} alt={value.alt} height={550}/>
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default SlideShow