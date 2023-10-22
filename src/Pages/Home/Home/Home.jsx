import DesignResource from "../DesignResource/DesignResource";
import HeroSection from "../HeroSection/HeroSection";
import Products from "../Products/Products";
import Quote from "../Quote/Quote";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Service></Service>
      <Products></Products>
      <Quote></Quote>
      <DesignResource></DesignResource>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

