
import { GrGroup } from 'react-icons/gr';

const StatList = () => {
  return <div className='container mx-auto '>
          {/* STATS LIST */}
          <div className='flex justify-evenly	my-20'>
        <div className="shadow-xl rounded-xl px-20 py-10">
          <div className='flex flex-col items-center'>
          <div className='bg-secbrand h-24 w-24 rounded-2xl flex items-center justify-center text-4xl mb-5'><GrGroup /></div>
          <p className='font-semibold text-3xl'>240452</p>
          <p className='font-medium text-lg'>Followers</p>
          </div>
        </div>
        <div className="shadow-xl rounded-xl px-20 py-10">
          <div className='flex flex-col items-center'>
          <div className='bg-secbrand h-24 w-24 rounded-2xl flex items-center justify-center text-4xl mb-5'><GrGroup /></div>
          <p className='font-semibold text-3xl'>240452</p>
          <p className='font-medium text-lg'>Followers</p>
          </div>
        </div>
        <div className="shadow-xl rounded-xl px-20 py-10">
          <div className='flex flex-col items-center'>
          <div className='bg-secbrand h-24 w-24 rounded-2xl flex items-center justify-center text-4xl mb-5'><GrGroup /></div>
          <p className='font-semibold text-3xl'>240452</p>
          <p className='font-medium text-lg'>Followers</p>
          </div>
        </div>
        <div className="shadow-xl rounded-xl px-20 py-10">
          <div className='flex flex-col items-center'>
          <div className='bg-secbrand h-24 w-24 rounded-2xl flex items-center justify-center text-4xl mb-5'><GrGroup /></div>
          <p className='font-semibold text-3xl'>240452</p>
          <p className='font-medium text-lg'>Followers</p>
          </div>
        </div>
      </div>
  </div>;
};
export default StatList;