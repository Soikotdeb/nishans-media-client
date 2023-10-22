
import nishanImage from "../../../assets/Nishans.png";
import signature from "../../../assets/signature.png";
import { FaQuoteLeft } from "react-icons/fa";

const Quote = () => {
    return (
        <div className="flex items-center m-20 bg-gray-200 shadow-2xl">
            <div className="p-8 relative">
                <h1 className="text-5xl text-primary font-bold mb-5">Revolutionizing the Digital Print Industry</h1>
                <p className="text-xl">❝My goal is to provide our clients with innovative and high-quality services. We strive to cultivate a culture of excellence, creativity, and collaboration to ensure our clients receive products, services, and experiences of exceptional quality.
                    <br /> <br />
                    We are committed to understanding our clients needs and dedicated to fulfilling their expectations. I extend my heartfelt gratitude for your unwavering belief and support. We look forward to working with you and delivering our best for your graphic design and printing needs.❞</p>
                <FaQuoteLeft className="text-[150px] text-primary opacity-10 absolute top-52 left-44"></FaQuoteLeft>
                <div className="mt-20">
                    <img src={signature} alt="" />
                    <h3 className="text-xl font-bold">Wasim Ahmed Nishan</h3>
                    <p>CEO, Nishan Media</p>
                </div>
            </div>
            <img src={nishanImage} alt="" />
        </div>
    );
};

export default Quote;