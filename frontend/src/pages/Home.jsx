import {
  Brands,
  Counter,
  Featured,
  Projects,
  Services,
  Testimonial,
} from "../components/common/page-componets";


const Home = () => {
  return (
    <div className="pt-16 px-[3%] md:px-[6%]">
      <Featured />
      <Counter />
      <Projects />
      <Testimonial />
      <Brands />

    </div>
  );
};

export default Home;
