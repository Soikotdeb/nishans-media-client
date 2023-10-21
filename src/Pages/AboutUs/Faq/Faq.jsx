import { FaGratipay } from 'react-icons/fa';

const Faq = () => {
    return (
        <div className="flex flex-col md:flex-row gap-5 p-5 md:p-10 my-10">
            <div className="md:w-1/2 w-full md:p-0 p-5">
                <h2 className="text-3xl font-bold text-black">Best Quality Printed Crest & Mugs At Affordable Price!</h2>
                <div className='flex gap-20 mt-10'>
                    <div className='mt-5 text-start'>
                        <ul className='space-y-4'>
                            <li className='flex gap-2 items-center'><FaGratipay className='text-[#FF0800]'></FaGratipay>Award Program</li>
                            <li className='flex gap-2 items-center'><FaGratipay className='text-[#FF0800]'></FaGratipay>Award Program</li>
                            <li className='flex gap-2 items-center'><FaGratipay className='text-[#FF0800]'></FaGratipay>Award Program</li>
                        </ul>
                    </div>
                    <div className='mt-5 text-start'>
                        <ul className='space-y-4'>
                            <li className='flex gap-2 items-center'><FaGratipay className='text-[#FF0800]'></FaGratipay>Award Program</li>
                            <li className='flex gap-2 items-center'><FaGratipay className='text-[#FF0800]'></FaGratipay>Award Program</li>
                            <li className='flex gap-2 items-center'><FaGratipay className='text-[#FF0800]'></FaGratipay>Award Program</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 w-full shadow md:p-10 p-5">
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title  font-medium">
                        আমরা আপনার কাস্টম ডিজাইন করতে পারবো
                    </div>
                    <div className="collapse-content">
                        <p>অবশ্যই হ্যাঁ. আমাদের বিশেষজ্ঞদের একটি দল রয়েছে যা  আপনার চিন্তাভাবনা-কে সর্বোচ্চ মানদণ্ডে ডিজাইন এবং কাস্টমাইজ করতে সহায়তা করতে পারে। আপনি একটি অনন্য লোগো, ওয়েবসাইট বা পণ্য খুঁজছেন ?  আমাদের টিম আপনাকে  আমাদের সর্বোচ্চ দিয়ে সহায়তা করবে।  আজই আমাদের সাথে যোগাযোগ করুন!</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-medium">
                        আপনার পেমেন্ট নিরাপদ এবং সুরক্ষিত
                    </div>
                    <div className="collapse-content">
                        <p>হ্যাঁ, আপনার পেমেন্ট নিরাপদ এবং সুরক্ষিত। সমস্ত অর্থপ্রদান নিরাপদ, এনক্রিপ্ট করা সংযোগের মাধ্যমে প্রক্রিয়া করা হয় যাতে আপনার আর্থিক তথ্য নিরাপদ এবং সুরক্ষিত থাকে।</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-medium">
                        আমাদের ডিসকাউন্ট এবং কুপন অফার
                    </div>
                    <div className="collapse-content">
                        <p>হ্যাঁ, আমরা ডিসকাউন্ট এবং কুপন অফার করি। আমাদের বর্তমান অফার সম্পর্কে আরও তথ্যের জন্য আমাদের ওয়েবসাইট দেখুন।</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;