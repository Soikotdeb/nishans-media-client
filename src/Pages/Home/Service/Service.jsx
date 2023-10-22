import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import {graphics} from "../../../assets/";
import { SiAdobeillustrator } from 'react-icons/si';
import { AiFillPrinter } from 'react-icons/ai';
import {BsFillCupFill } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';

const Service = () => {
    return (
        <div className="p-20">
            <SectionTitle></SectionTitle>
            <div className="grid grid-cols-4 gap-3 mt-10">
                <div className=" p-7 text-center shadow-2xl border-b-4 border-primary">
                    <SiAdobeillustrator className="mx-auto text-5xl text-primary"></SiAdobeillustrator>
                    <div className="space-y-2 mt-3">
                        <h1 className="text-3xl font-bold">Graphics Design</h1>
                        <p className="font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, nihil.</p>
                    </div>
                </div>
                <div className=" p-7 text-center shadow-2xl border-b-4 border-primary">
                    <AiFillPrinter className="mx-auto text-5xl text-primary"></AiFillPrinter>
                    <div className="space-y-2 mt-3">
                        <h1 className="text-3xl font-bold">Digital Print</h1>
                        <p className="font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, nihil.</p>
                    </div>
                </div>
                <div className=" p-7 text-center shadow-2xl border-b-4 border-primary">
                    <BsFillCupFill className="mx-auto text-5xl text-primary"></BsFillCupFill>
                    <div className="space-y-2 mt-3">
                        <h1 className="text-3xl font-bold">Print Item</h1>
                        <p className="font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, nihil.</p>
                    </div>
                </div>
                <div className=" p-7 text-center shadow-2xl border-b-4 border-primary">
                    <CgWebsite className="mx-auto text-5xl text-primary"></CgWebsite>
                    <div className="space-y-2 mt-3">
                        <h1 className="text-3xl font-bold">Web Design</h1>
                        <p className="font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, nihil.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;