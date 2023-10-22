import person2 from "../../../assets/person2.jpg"
import person3 from "../../../assets/person3.jpg"
import { BsFillChatQuoteFill } from 'react-icons/bs';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Testimonial = () => {
    return (
        <div className="px-20">
            <SectionTitle></SectionTitle>
            <div className="flex gap-5 mt-12">
                <div className="border flex p-10 items-center">
                    <div className="w-8/12 pr-10">
                        <p>❝Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sapiente vero deserunt quis, impedit recusandae, facilis incidunt tempora tempore vitae, sunt ratione delectus ab similique.❞</p>
                        <h3 className="text-2xl font-bold mt-4">Tasmiya Rahman</h3>
                        <p>Moulvibazar, Sylhet</p>
                    </div>
                    <div className="w-4/12 relative">
                        <img className="h-28 w-28 rounded-full" src={person2} alt="" />
                        <BsFillChatQuoteFill className="absolute left-0 bottom-0 text-primary text-5xl"></BsFillChatQuoteFill>
                    </div>
                </div>
                <div className="border flex items-center p-10">
                    <div className="w-8/12 pr-10">
                        <p>❝Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sapiente vero deserunt quis, impedit recusandae, facilis incidunt tempora tempore vitae, sunt ratione delectus ab similique.❞</p>
                        <h3 className="text-2xl font-bold mt-4">Mahi Ahmed</h3>
                        <p>Moulvibazar, Sylhet</p>
                    </div>
                    <div className="w-4/12 relative">
                        <img className="h-28 w-28 rounded-full" src={person3} alt="" />
                        <BsFillChatQuoteFill className="absolute left-0 bottom-0 text-primary text-5xl"></BsFillChatQuoteFill>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;


