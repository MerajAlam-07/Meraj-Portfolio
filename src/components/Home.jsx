import React from 'react';
import M_1 from '../assets/M_1.jpg'
import Resum from '../assets/Meraj_alam.pdf'

const Home = () => {
    return (
        <div className='md:px-10 px-7 my-14 md:h-screen cursor-pointer  bg-[#1a1a29]' id='home' >
            <div>
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                                   {/* image & content */}
                                       {/* text */}
                    <div className='text-white'>
                        <h6 className='text-3xl mt-12'>Hello, I'm</h6>
                        <h1 className='font-semibold md:text-5xl my-4 text-3xl'>MD MERAJ ALAM</h1>
                        <p className='md:w-96'> UI designer, React developer. I create seamless web experiences for end-users.</p>
                        <div className='mt-5'>
                            <button className='btn transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary'>About me</button> 
                            <a  className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white" href={Resum} download="Resum">RESUME</a>
                        </div>
                    </div>
                                         {/* img */}
                    <div className='order-first md:order-last relative'>
                        <img className='rounded-full w-[450px] h-[450px]'
                        src={M_1} alt="" />
                    </div>
                </div>
            </div>
            <div className='h-24 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block'>
            </div>
        </div>
    );
};

export default Home;