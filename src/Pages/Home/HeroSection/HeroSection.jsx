
import bannerBG from "../../../assets/banner-bg.png";

const HeroSection = () => {
    return (
        <div className="p-5 md:p-20 md:flex gap-10 items-center">
           <div className="md:w-7/12 space-y-5">
                <h4 className="text-3xl font-bold text-[#e50000]">Welcome to</h4>
                <h1 className="text-[60px] shadow-lg font-bold">Nisha Media</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptate facilis ut asperiores explicabo. Cum, voluptas quae nihil vel molestiae laborum at necessitatibus ipsa deleniti rem! Sed, minima? Cumque, sequi.</p>
                <button className="btn text-1xl bg-[#e50000] text-white">Call now: 01789890789</button>
            </div> 
            <div className="">
                <img src={bannerBG} alt="" />
            </div>
        </div>
    );
};

export default HeroSection;