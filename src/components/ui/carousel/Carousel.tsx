import { FaChevronLeft } from "react-icons/fa6";
import Slides, { SlidesProps } from "./Slides";
import { FaChevronRight } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";


interface CarouselProps {
	items: SlidesProps[] 
}

const Carousel: React.FC<CarouselProps> = ({items}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });

	const totalScroll = Math.max(0, items.length - 1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleScroll = useCallback(
    (direction: 'next' | 'prev') => {
      if (!emblaApi) return;

      setCurrentIndex((prevIndex) => {
        const newIndex = direction === 'next' ? prevIndex + 1 : prevIndex - 1;
        if (newIndex < 0 || newIndex > totalScroll) return prevIndex;
        emblaApi.scrollTo(newIndex);
        return newIndex;
      });
    },
    [emblaApi, totalScroll]
  );

  // Reset carousel to start at 0 index when relevancy filter changes
  useEffect(() => {
    setCurrentIndex(0);
    if (emblaApi) emblaApi.scrollTo(0);
  }, [ emblaApi]);
	return(
		<div>
      <div className="relative mx-auto w-11/12 md:w-full">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="-ml-4 h-[580px] flex">
            {items.map((item, index) => (
              <Slides key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 z-50 flex w-full -translate-y-1/2 justify-between">
          <button
            onClick={() => handleScroll('prev')}
            disabled={currentIndex === 0}
            className="-ml-4 flex h-10 w-10 items-center rounded-full bg-gray-800 p-4 shadow-md disabled:opacity-0 sm:-ml-6 sm:h-12 sm:w-12"
          >
            <FaChevronLeft className="fill-white" />
          </button>
          <button
            onClick={() => handleScroll('next')}
            disabled={currentIndex >= totalScroll}
            className="-mr-4 flex h-10 w-10 items-center rounded-full bg-gray-800 p-4 shadow-md disabled:opacity-0 sm:-mr-6 sm:h-12 sm:w-12"
          >
            <FaChevronRight className="fill-white" />
          </button>
        </div>
      </div>
		</div>
	)
}
export default Carousel;
