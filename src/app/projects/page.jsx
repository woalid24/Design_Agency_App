import AllProject from "@/components/AllProject";
import Breadcrumb from "@/components/Breadcrumb";
import SubscribeSection from "@/components/SubscribeSection";

const Page = () => {
  return <div>
    <Breadcrumb title={'All Project'}/>
    <AllProject/>
    <SubscribeSection/>
  </div>;
};
export default Page;