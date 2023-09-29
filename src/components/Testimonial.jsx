import Image from 'next/image'

const Testimonial = () => {
    return <div className="container mx-auto py-16 text-base">
        <div>
            <p className="uppercase text-brand font-medium mb-4">Testimonial List</p>
            <p className="font-semibold text-3xl max-w-lg mb-12">Better Agency/SEO Solution At Your Fingertips</p>
        </div>
        <div className="grid grid-cols-3 gap-8">
            <div className="shadow-lg rounded-[20px] p-7 flex flex-col items-center">
                <Image
                    className='rounded-[#20px] pb-10'
                    src="/img/test.png"
                    alt=""
                    width={100}
                    height={100} />
                <p className='text-center pb-7 text-[#9D9D9D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                <p className="font-semibold text-2xl pb-3 uppercase">Alice Bradley</p>
                <p className='text-[#16px]'>Backend Developer</p>
            </div>
            <div className="shadow-lg rounded-[20px] p-7 flex flex-col items-center">
                <Image
                    className='rounded-[#20px] pb-10'
                    src="/img/test.png"
                    alt=""
                    width={100}
                    height={100} />
                <p className='text-center pb-7 text-[#9D9D9D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                <p className="font-semibold text-2xl pb-3 uppercase">Alice Bradley</p>
                <p className='text-[#16px]'>Backend Developer</p>
            </div>
            <div className="shadow-lg rounded-[20px] p-7 flex flex-col items-center">
                <Image
                    className='rounded-[#20px] pb-10'
                    src="/img/test.png"
                    alt=""
                    width={100}
                    height={100} />
                <p className='text-center pb-7 text-[#9D9D9D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                <p className="font-semibold text-2xl pb-3 uppercase">Alice Bradley</p>
                <p className='text-[#16px]'>Backend Developer</p>
            </div>
            <div className="shadow-lg rounded-[20px] p-7 flex flex-col items-center">
                <Image
                    className='rounded-[#20px] pb-10'
                    src="/img/test.png"
                    alt=""
                    width={100}
                    height={100} />
                <p className='text-center pb-7 text-[#9D9D9D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                <p className="font-semibold text-2xl pb-3 uppercase">Alice Bradley</p>
                <p className='text-[#16px]'>Backend Developer</p>
            </div>
            <div className="shadow-lg rounded-[20px] p-7 flex flex-col items-center">
                <Image
                    className='rounded-[#20px] pb-10'
                    src="/img/test.png"
                    alt=""
                    width={100}
                    height={100} />
                <p className='text-center pb-7 text-[#9D9D9D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                <p className="font-semibold text-2xl pb-3 uppercase">Alice Bradley</p>
                <p className='text-[#16px]'>Backend Developer</p>
            </div>
            <div className="shadow-lg rounded-[20px] p-7 flex flex-col items-center">
                <Image
                    className='rounded-[#20px] pb-10'
                    src="/img/test.png"
                    alt=""
                    width={100}
                    height={100} />
                <p className='text-center pb-7 text-[#9D9D9D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                <p className="font-semibold text-2xl pb-3 uppercase">Alice Bradley</p>
                <p className='text-[#16px]'>Backend Developer</p>
            </div>
        </div>
    </div>;
};
export default Testimonial;