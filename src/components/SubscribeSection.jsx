"use client"

const SubscribeSection = () => {
  return <div>
    <div className="container mx-auto mt-16 mb-32 text-base flex justify-center items-center flex-col">
      <p className="uppercase text-brand text-xl font-medium mb-4 text-center">Subscribe</p>
      <p className="font-semibold text-3xl max-w-lg text-center">Subscribe to get the latest news about us</p>
      <p className="text-center text-sm text-[#8B8B8B] mb-10">Please drop your email below to get daily update about what we do</p>
      <div className="flex items-center border border-black rounded-xl p-1">
        <input className="appearance-none bg-transparent border-none w-96 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Your Email Adress" aria-label="Email"/>
        <button className="flex flex-row items-center gap-1 py-3 px-5 border-2 bg-sec rounded-xl text-lg text-white">Subscribe</button>
      </div>
    </div>
  </div>;
};
export default SubscribeSection;