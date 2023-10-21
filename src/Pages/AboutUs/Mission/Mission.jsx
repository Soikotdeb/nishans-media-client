import { AiFillPieChart} from 'react-icons/ai';
// import { BiPaperPlane } from 'react-icons/bi';
// import {FaCertificate } from 'react-icons/fa';


const Mission = () => {
    return (
        <div className="bg-black text-white">
            <div className="flex flex-col md:flex-row items-center justify-center p-5 md:p-20">
                <div className="p-5 md:p-10 text-center md:text-start w-full md:w-1/3">
                    <AiFillPieChart className='text-white text-3xl'/>
                    <h2 className="text-2xl md:text-3xl mb-4">Vision</h2>
                    <p>To become the most trusted and reliable partner for clients in the graphic design and printing industry.</p>
                </div>
                <div className="p-5 md:p-10 text-center md:text-start w-full md:w-1/3">
                    <h2 className="text-2xl md:text-3xl mb-4">Mission</h2>
                    <p>To provide cost-effective, high-quality graphic design and printing solutions to our clients through our commitment to excellence and dedication to customer satisfaction.</p>
                </div>
                <div className="p-5 md:p-10 text-center md:text-start w-full md:w-1/3">
                    <h2 className="text-2xl md:text-3xl mb-4">Quality Service</h2>
                    <p>- Professional Design</p>
                    <p>- Fast Turnaround Design</p>
                    <p>- High Quality Printing</p>
                    <p>- Satisfaction Guaranteed</p>
                </div>
            </div>
        </div>
    );
};

export default Mission;
