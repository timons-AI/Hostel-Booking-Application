import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel-react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  imageByIndex: (index: number) => string;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const imageByIndex =
    props.imageByIndex ||
    ((index: number) => `https://picsum.photos/seed/${index}/800/600`);
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("scroll", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla ">
      <div className="embla__viewport rounded-md w-full h-full" ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((index) => (
            <div className="embla__slide w-full h-full gap-2" key={index}>
              <img
                className="embla__slide__img aspect-w-3 aspect-h-2 overflow-hidden rounded-md"
                src={imageByIndex(index)}
                alt="Your alt text"
              />
            </div>
            // <div className="embla__slide" key={index}>
            //   <div className="embla__slide__img aspect-w-3 aspect-h-2 overflow-hidden rounded-md">
            //     <img
            //       src={imageByIndex(index)}
            //       alt={`Slide ${index + 1}`}
            //       className="h-full w-full object-cover object-center"
            //     />
            //   </div>
            // </div>
          ))}
        </div>
      </div>
      <div className="embla__progress">
        <div
          className="embla__progress__bar"
          style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
        />
      </div>
    </div>
  );
};

export default EmblaCarousel;
