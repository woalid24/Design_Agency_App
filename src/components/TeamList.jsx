import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Image from 'next/image' 

const TeamList = () => {
  return (
    <div>
      <div className="container mx-auto py-16 text-base">
        <div>
          <p className="uppercase text-brand font-medium mb-4">Our Team Member</p>
          <p className="font-semibold text-3xl max-w-lg mb-12">Check our awesome team members</p>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-7 border-2 rounded-[20px]">
            <Image src="/img/team.png" alt="" width={392} height={387} />
            <div className="bg-white flex items-center gap-2 rounded-full px-8 py-4 absolute translate-y-64 text-gray-600">
              <FaFacebookF /> | <FaXTwitter /> | <FaInstagram />
            </div>
            <p className="font-semibold text-3xl pb-12">Devon Lane</p>
          </div>
          <div className="flex flex-col items-center gap-7 border-2 rounded-[20px]">
            <Image src="/img/team.png" alt="" width={392} height={387} />
            <div className="bg-white flex items-center gap-2 rounded-full px-8 py-4 absolute translate-y-64 text-gray-600">
              <FaFacebookF /> | <FaXTwitter /> | <FaInstagram />
            </div>
            <p className="font-semibold text-3xl pb-12">Devon Lane</p>
          </div>
          <div className="flex flex-col items-center gap-7 border-2 rounded-[20px]">
            <Image src="/img/team.png" alt="" width={392} height={387} />
            <div className="bg-white flex items-center gap-2 rounded-full px-8 py-4 absolute translate-y-64 text-gray-600">
              <FaFacebookF /> | <FaXTwitter /> | <FaInstagram />
            </div>
            <p className="font-semibold text-3xl pb-12">Devon Lane</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamList;
