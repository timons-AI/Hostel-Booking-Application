import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";
import imageByIndex from "./imageByIndex";

// import "./css/base.css";
import "./css/sandbox.css";
import "./css/embla.css";

const OPTIONS: EmblaOptionsType = { dragFree: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function CarouselImageSlider() {
  return (
    <main className="sandbox">
      <section className="sandbox__carousel">
        <EmblaCarousel
          slides={SLIDES}
          options={OPTIONS}
          imageByIndex={imageByIndex}
        />
      </section>
    </main>
  );
}
