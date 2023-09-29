import { FaAngleRight } from "react-icons/fa6";

const Breadcrumb = ({title}) => {
    return <section className="bg-[#F8F9FC]">
    <div className="container mx-auto -mt-32 pb-20">
        <h2 className="pt-48 text-[40px] mb-5">{title}</h2>
        <div className="flex items-center gap-4">
        <p>Home</p>
        <FaAngleRight />
        <p className="text-brand">{title}</p>
        </div>
        </div>
    </section>;
};
export default Breadcrumb;