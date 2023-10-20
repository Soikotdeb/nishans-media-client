import { BiSolidQuoteLeft } from 'react-icons/bi';

const Testimonials = () => {
    return (
        <div className="bg-[#2D2D2D]">
            <h2 className='text-white font-semibold text-center pt-20 text-3xl'>Our Happy Clients!</h2>
            <div className="w-11/12 mx-auto grid grid-cols-3 p-20 gap-10">
                <div className="overflow-hidden rounded bg-black text-white">
                    <div className="p-6 border-b">
                        <BiSolidQuoteLeft className='text-red-600 text-3xl' />
                        <p>
                            Nishan’s Media was a pleasure to work with. From the start of the project, they were responsive and attentive to our needs and provided us with quality work that exceeded our expectations. They are highly professional and knowledgeable, and I highly recommend them to anyone in need of printing services.”
                        </p>
                    </div>
                    <div className="p-6">
                        <header className="flex gap-4">
                            <a
                                href="#"
                                className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                            >
                                <img
                                    src="https://www.nishansmedia.com/wp-content/uploads/2023/04/Preetham-.png"
                                    alt="user name"
                                    title="user name"
                                    width="48"
                                    height="48"
                                    className="max-w-full rounded-full"
                                />
                            </a>
                            <div>
                                <h3 className="text-xl font-medium">
                                    Preethom Datta
                                </h3>
                                <p className="text-sm">Senior Associates</p>
                            </div>
                        </header>
                    </div>
                </div>
                <div className="overflow-hidden rounded bg-black text-white">
                    <div className="p-6 border-b">
                        <BiSolidQuoteLeft className='text-red-600 text-3xl' />
                        <p>Nishan’s Digital Sign & Printing provided me with excellent service and high quality products. I was very pleased with the outcome and would highly recommend their services to anyone in need of printing or design work. They were very helpful and accommodating, and their attention to detail was impressive.”
                        </p>
                    </div>
                    <div className="p-6">
                        <header className="flex gap-4">
                            <a
                                href="#"
                                className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                            >
                                <img
                                    src="https://www.nishansmedia.com/wp-content/uploads/2023/04/college-01.png"
                                    alt="user name"
                                    title="user name"
                                    width="48"
                                    height="48"
                                    className="max-w-full rounded-full"
                                />
                            </a>
                            <div>
                                <h3 className="text-xl font-medium">
                                    Imperial College
                                </h3>
                                <p className="text-sm">Moulvibazar</p>
                            </div>
                        </header>
                    </div>
                </div>
                <div className="overflow-hidden rounded bg-black text-white">
                    <div className="p-6 border-b">
                        <BiSolidQuoteLeft className='text-red-600 text-3xl' />
                        <p>I have been working with Nishan’s Media for many years now and their digital printing services have always been outstanding. They offer quick turnaround times and great customer service. The quality of their work is always top-notch and their prices are very reasonable. I highly recommend them for any digital printing needs.</p>
                    </div>
                    <div className="p-6">
                        <header className="flex gap-4">
                            <a
                                href="#"
                                className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                            >
                                <img
                                    src="https://www.nishansmedia.com/wp-content/uploads/2023/04/muhibur-rahman.png"
                                    alt="user name"
                                    title="user name"
                                    width="48"
                                    height="48"
                                    className="max-w-full rounded-full"
                                />
                            </a>
                            <div>
                                <h3 className="text-xl font-medium">
                                    M. Muhibur
                                </h3>
                                <p className="text-sm">Chairman, BIS</p>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;