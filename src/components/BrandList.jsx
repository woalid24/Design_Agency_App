import Image from 'next/image'

const BrandList = () => {
  return (
    <div className="bg-[#F8FFF9]">
      <div className="container mx-auto py-10">
        <div className="flex justify-between">
          <Image src="/img/brands/google.png" alt="" width={100} height={100} />
          <Image src="/img/brands/trello.png" alt="" width={100} height={100} />
          <Image src="/img/brands/monday.png" alt="" width={100} height={100} />
          <Image src="/img/brands/notion.png" alt="" width={100} height={100} />
          <Image src="/img/brands/slack.png" alt="" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};
export default BrandList;
