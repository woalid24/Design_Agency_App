import AllService from "@/components/AllService";
import Breadcrumb from "@/components/Breadcrumb";
import SubscribeSection from "@/components/SubscribeSection";

const Page = () => {
  return <div>
    <Breadcrumb title={'Service'}/>
    <AllService/>
    <SubscribeSection/>
  </div>;
};
export default Page;