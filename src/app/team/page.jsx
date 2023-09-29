import Breadcrumb from "@/components/Breadcrumb";
import SubscribeSection from "@/components/SubscribeSection";
import TeamList from "@/components/TeamList";

const Page = () => {
  return <div>
    <Breadcrumb title={'Team'}/>
    <TeamList />
    <SubscribeSection/>
  </div>;
};
export default Page;