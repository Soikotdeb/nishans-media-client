import { BsBehance, BsFacebook, BsGlobe } from "react-icons/bs";
import nishanImage from "../../../assets/Nishans.png";
import signature from "../../../assets/signature.png";


const Banner = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="md:flex items-center justify-center">
                <div className="w-full md:w-1/3 md:p-20 p-10">
                    <img className="" src={nishanImage} alt="" />
                    <div className="mt-10 px-5">
                        <img src={signature} alt="" />
                        <h3 className="text-xl font-bold">Wasim Ahmed Nishan</h3>
                        <p>CEO, Nishan Media</p>
                    </div>
                    <div className="flex gap-5 px-10 mt-5">
                        <a href="https://www.facebook.com/wasimnishans/"><BsFacebook className='text-primary text-3xl'/></a>
                        <a href="https://www.behance.net/nishansmedia"><BsBehance className='text-primary text-3xl'/></a>
                        <a href="http://www.creationit.info/"><BsGlobe className='text-primary text-3xl'/></a>
                    </div>
                </div>
                <div className="p-8 relative md:w-2/3 w-full">
                    <h1 className="md:text-2xl text-primary font-bold mb-5">Pioneering Innovation in the Digital Print Industry</h1>
                    <p className="text-base md:text-xl">As a founder and CEO of a graphic design and printing house, my mission is to provide innovative and high-quality services to our customers, creativity, and collaboration to ensure that our clients receive the best possible products, services, and experiences. We are dedicated to understanding our customers’ needs and delivering solutions that meet and exceed their expectations. </p>
                    <p className="mt-5 text-base md:text-xl">
                        Thank you again for your continued trust and support. We look forward to working with you and delivering the best solutions for your graphic design and printing needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;