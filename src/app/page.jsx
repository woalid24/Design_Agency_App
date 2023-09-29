import FeaturedProject from "@/components/FeaturedProject";
import HeroList from "@/components/HeroList";
import StatList from "@/components/StatList";
import SubscribeSection from "@/components/SubscribeSection";
import WorkList from "@/components/WorkList";

const Page = () => {
  return<div>
      <HeroList />
      <WorkList />
      <StatList />
      <FeaturedProject />
      <SubscribeSection/>
    </div>;
};
export default Page;