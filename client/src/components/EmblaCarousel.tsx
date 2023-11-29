// Import necessary React hooks and libraries
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel-react";

// Define the prop types for the EmblaCarousel component
type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  imageByIndex: (index: number) => string;
};

// Define the EmblaCarousel functional component
const EmblaCarousel: React.FC<PropType> = (props) => {
  // Destructure props for easier access
  const { slides, options } = props;
  const imageByIndex =
    props.imageByIndex ||
    ((index: number) => `https://picsum.photos/seed/${index}/800/600`);
  
  // Initialize state for Embla Carousel reference and API, and scroll progress
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Define callback function for scroll event
  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  // Set up useEffect to handle scroll events and reinitialization
  useEffect(() => {
    // Check if emblaApi is available
    if (!emblaApi) return;

    // Call onScroll on initialization and on scroll events
    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("scroll", onScroll);
  }, [emblaApi, onScroll]);

  // Render the EmblaCarousel component
  return (
    <div className="embla">
      {/* Embla Carousel viewport */}
      <div className="embla__viewport rounded-md w-full h-full" ref={emblaRef}>
        {/* Embla Carousel container */}
        <div className="embla__container">
          {/* Map through slides and render each one */}
          {slides.map((index) => (
            <div className="embla__slide w-full h-full gap-2" key={index}>
              {/* Image for the slide */}
              <img
                className="embla__slide__img aspect-w-3 aspect-h-2 overflow-hidden rounded-md"
                src={imageByIndex(index)}
                alt="Your alt text"
              />
            </div>
            // Uncomment the following lines for an alternative slide structure
            /*
            <div className="embla__slide" key={index}>
              <div className="embla__slide__img aspect-w-3 aspect-h-2 overflow-hidden rounded-md">
                <img
                  src={imageByIndex(index)}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            */
          ))}
        </div>
      </div>
      {/* Embla Carousel progress bar */}
      <div className="embla__progress">
        <div
          className="embla__progress__bar"
          style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
        />
      </div>
    </div>
  );
};

// Export the EmblaCarousel component
export default EmblaCarousel;
