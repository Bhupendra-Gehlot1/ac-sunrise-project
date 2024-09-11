import {
  AboutUs,
  Brands,
  Categories,
  Featured,
  Feeds,
  Team,
  WhatWeDo,
} from "../components/common/page-componets";
import {
  GetInTouch,
  Testimonial,
} from "../components/home/home-3";
import {
  Hero,
  Filters,
  
} from "../components/home/home-2";


const HomeThree = () => {
  return (
    <div className="pt-16 px-[3%] md:px-[6%]">
      <Hero />
      <Filters />
      <div className="mt-10">
        <AboutUs />
        <WhatWeDo />
        <Featured />
        <Categories />
        <GetInTouch />
        <Team />
        <Testimonial />
        <Feeds />
        <Brands />
      </div>
    </div>
  );
};

export default HomeThree;
