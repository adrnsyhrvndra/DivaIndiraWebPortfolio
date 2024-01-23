import * as React from "react";
import { HeroCol1 } from "./subcomponents/HeroCol1/HeroCol1";
import { Suspense, lazy } from "react";
import { LoadingLazy } from "./subcomponents/LoadingLazy/LoadingLazy";

const LazyImage = lazy(() => import("./LazyImage"));

export const HeroSection = () => {

  let mobileImageDivas = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705917997/divaWebPortfolio/reduceResolution/Group_9267_y9y1cr.png";
  let tabletPcDivaImages = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705661272/divaWebPortfolio/reduceResolution/Desktop_x5jtbk.png";

  return (
    <div
      aria-label="hero-section"
      className="grid grid-cols-12 relative mt-10 lg:px-14 lg:gap-3 lg:pb-44 lg:mt-[5.5rem] xl:px-14 xl:pb-44 xl:mt-[5.5rem] 2xl:pb-60"
    >
      <HeroCol1/>
      <div className="col-span-12 order-2 md:order-1 md:mt-10 lg:mt-0 lg:order-2 lg:col-span-7">
        <Suspense fallback={<LoadingLazy />}>
          <LazyImage
            src={tabletPcDivaImages}
            alt="image-for-laptop"
            className="hidden md:block md:w-[80%] scale-100 transition-all cursor-pointer hover:scale-110 md:mx-auto lg:w-full"
          />
          <LazyImage
            src={mobileImageDivas}
            alt="image-for-mobile"
            className="w-[90%] scale-100 transition-all cursor-pointer hover:scale-110 mx-auto md:hidden"
          />
        </Suspense>
      </div>
    </div>
  );
};