import Breadcrumb from "@/components/Breadcrumb";
import SubscribeSection from "@/components/SubscribeSection";
import Testimonial from "@/components/Testimonial";

const Page = () => {
  return <div>
    <Breadcrumb title={'Testimonial List'} />
    <Testimonial/>
    <SubscribeSection/>
  </div>;
};
export default Page;