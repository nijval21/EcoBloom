import React, {useState} from 'react'
import { CiBadgeDollar } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import person from '../assets/images/person.png'
import { PiHandCoinsBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import map from '../assets/images/map.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const UserDashboard = () => {
  const [nav1, setNav1] = useState(true);

  const handleNav1 = () => {
    setNav1(!nav1);
  };
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='h-screen'>
      <div className='w-full h-[14%] bg-[#0f1035] text-white flex justify-between '>
        <div className='flex items-center'>
          <div onClick={handleNav} className='text-2xl lg:3xl block xl:hidden ml-2 '>
              {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
          <div className='ml-5 xl:m-6 text-3xl font-bold hidden xl:flex'>
            USER DASHBOARD
          </div>
          <a className='flex items-center sm:text-2xl md:text-3xl lg:text-3xl m-5 xl:m-8 sm:m-7 lg:m-6 gap-1 sm:gap-2 lg:gap-3 cursor-pointer hover:text-blue-400 '>
            <div className='hidden text-[1.23rem] md:text-3xl lg:text-3xl sm:flex'> View Rewards </div> <div className='text-3xl'> < PiHandCoinsBold /> </div>
          </a>
        </div>
        <div className='flex justify-end items-center text-2xl sm:text-2xl md:text-3xl mr-1'>
          <a className='mx-1 sm:mx-2 lg:mx-3 xl:mx-8 cursor-pointer hover:scale-110 duration-300'>
            <FaRegEnvelope/>
          </a>
          <a className='mx-1 sm:mx-3 lg:mx-5 xl:mx-8 cursor-pointer hover:scale-110 duration-300'>
            <FaRegBell/>
          </a >
          <div className='flex mx-2 sm:mx-5 lg:mx-8 items-center'>
            <img className='w-[60px] mx-4 rounded-full hover:scale-110 duration-300' src={person} alt="" />
            <div className='text-3xl hidden sm:flex'>Hizrian</div>
            <a className='ml-2 mr-5 cursor-pointer text-3xl'> <div onClick={handleNav1} className='block'>
              {nav1 ? <TiArrowSortedUp/> : <div className='mt-2'> <TiArrowSortedDown/> </div>}
               </div> </a>
          </div>
        </div>
        <div className={!nav1 ? ' flex flex-col cursor-pointer text-white text-2xl absolute right-10 top-[7.25rem] sm:w-[25%] border-r border-r-gray-900 bg-[#0f1035] ease-up-down duration-0' : 'ease-up-down duration-0 fixed left-[-200%]'}>
        
          <a className='p-4 border-b border-gray-600 hover:scale-100 duration-300'>Edit Password</a>
          <a className='p-4 border-b border-gray-600 hover:scale-100 duration-300'>Edit Photo</a>
          <a className='p-4 border-b border-gray-600 hover:scale-100 duration-300'>Edit Name</a>
          <a className='p-4 hover:scale-100 duration-300'>Logout</a>
        </div>



      </div>
      
      <div className='flex'>
        <div className='hidden xl:flex h-[797px] bg-[#0f1035] w-[25%] flex-col items-center pb-2 border-t border-[#eef0e5]'>
          <button className=' flex justify-center items-center gap-1 bg-[#eef0e5] text-[#0f1035] xl:text-[17px] 2xl:text-[22px] font-bold rounded-xl h-[2.8rem]  2xl:h-[3.20rem] w-56 2xl:w-64 my-4 2xl:my-6 hover:scale-105 duration-300'> <FaPlus/> Join Community</button>
          <p className='text-[#eef0e5] text-2xl 2xl:text-3xl font-bold mb-8'>Joined Communities</p>
          <div className='flex flex-col gap-4 2xl:gap-5' >
            <a href="">
              <div className='flex pb-5 2xl:pb-3 border-b-2 xl:gap-3 2xl:gap-7 px-4 2xl:px-7 hover:scale-105 duration-300'>
              <img className='w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full' src={person} alt="" />
              <div className='flex flex-col'><p className='text-[#eef0e5] text-[0.88rem] 2xl:text-xl mt-1 2xl:mt-0'>GreenPeace Organisation</p>
              <p className='text-[#eef0e5] text-[0.75rem] 2xl:text-[1rem]'>345 Peoples</p></div>
              </div>
            </a>
            <a href="">
              <div className='flex pb-5 2xl:pb-3 border-b-2 xl:gap-3 2xl:gap-7 px-4 2xl:px-7 hover:scale-105 duration-300'>
              <img className='w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full' src={person} alt="" />
              <div className='flex flex-col'><p className='text-[#eef0e5] text-[0.88rem] 2xl:text-xl mt-1 2xl:mt-0'>GreenPeace Organisation</p>
              <p className='text-[#eef0e5] text-[0.75rem] 2xl:text-[1rem]'>345 Peoples</p></div>
              </div>
            </a>
            <a href="">
              <div className='flex pb-5 2xl:pb-3 border-b-2 xl:gap-3 2xl:gap-7 px-4 2xl:px-7 hover:scale-105 duration-300'>
              <img className='w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full' src={person} alt="" />
              <div className='flex flex-col'><p className='text-[#eef0e5] text-[0.88rem] 2xl:text-xl mt-1 2xl:mt-0'>GreenPeace Organisation</p>
              <p className='text-[#eef0e5] text-[0.75rem] 2xl:text-[1rem]'>345 Peoples</p></div>
              </div>
            </a>
            <a href="">
              <div className='flex pb-5 2xl:pb-3 border-b-2 xl:gap-3 2xl:gap-7 px-4 2xl:px-7 hover:scale-105 duration-300'>
              <img className='w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full' src={person} alt="" />
              <div className='flex flex-col'><p className='text-[#eef0e5] text-[0.88rem] 2xl:text-xl mt-1 2xl:mt-0'>GreenPeace Organisation</p>
              <p className='text-[#eef0e5] text-[0.75rem] 2xl:text-[1rem]'>345 Peoples</p></div>
              </div>
            </a>
            <a href="">
              <div className='flex pb-5 2xl:pb-3 border-b-2 xl:gap-3 2xl:gap-7 px-4 2xl:px-7 hover:scale-105 duration-300'>
              <img className='w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full' src={person} alt="" />
              <div className='flex flex-col'><p className='text-[#eef0e5] text-[0.88rem] 2xl:text-xl mt-1 2xl:mt-0'>GreenPeace Organisation</p>
              <p className='text-[#eef0e5] text-[0.75rem] 2xl:text-[1rem]'>345 Peoples</p></div>
              </div>
            </a>
            <a href="">
              <div className='flex pb-5 2xl:pb-3 border-b-2 xl:gap-3 2xl:gap-7 px-4 2xl:px-7 hover:scale-105 duration-300'>
              <img className='w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full' src={person} alt="" />
              <div className='flex flex-col'><p className='text-[#eef0e5] text-[0.88rem] 2xl:text-xl mt-1 2xl:mt-0'>GreenPeace Organisation</p>
              <p className='text-[#eef0e5] text-[0.75rem] 2xl:text-[1rem]'>345 Peoples</p></div>
              </div>
            </a>            
          </div>
          <button className=' flex justify-center items-center gap-1 bg-[#eef0e5] text-[#0f1035] xl:text-[17px] 2xl:text-[22px] font-bold rounded-xl h-[2.8rem]  2xl:h-[3.20rem] w-56 2xl:w-64 my-4 2xl:my-5 hover:scale-105 duration-300'>View More <div className='mt-[0.32rem] text-3xl'><FaLongArrowAltRight/></div> </button>
        </div>
        <div className='w-full 2xl:w-[75%] lg:h-[797px] bg-[#eef0e5] flex flex-col lg:flex-row lg:justify-center items-center justify-center gap-20'>
          <div>
            <a href="">
              <img className='mt-10 w-[600px] 2xl:w-[700px]' src={map} alt="" />
            </a>
          </div>
          <div className='flex flex-col items-center gap-8 mr-6 '>
            <p className='text-[25px] font-bold text-[#0F1035] '>UPCOMING CAMPAIGNS</p>
            <div className='border-black border-[1px] flex flex-col gap-5 pt-5 bg-[#E1E5CD] w-[110%]'>
              <a href="">
                <div className=' flex pb-3 border-b-2 gap-7 px-2 hover:scale-105 duration-300'>
                  <div className='text-6xl '><SlCalender/></div>
                  <div className='flex flex-col'><p className='text-black text-[1.15rem] '>ENVIRONMENT HELPERS</p>
                  <div className='flex justify-between items-baseline gap-3 '>
                    <div>
                      <div className='text-[0.9rem]'>
                      24TH JAN,2024
                      </div>
                      <div className='text-[0.7rem]'>
                      210 Peoples joined
                      </div>
                    </div>
                      <div className='flex justify-center items-center text-[20px] gap-1'>
                        Join now <div className='mt-1'><FaLongArrowAltRight/></div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="">
                <div className=' flex pb-3 border-b-2 gap-7 px-2 hover:scale-105 duration-300'>
                  <div className='text-6xl '><SlCalender/></div>
                  <div className='flex flex-col'><p className='text-black text-[1.15rem] '>ENVIRONMENT HELPERS</p>
                  <div className='flex justify-between items-baseline gap-3 '>
                    <div>
                      <div className='text-[0.9rem]'>
                      24TH JAN,2024
                      </div>
                      <div className='text-[0.7rem]'>
                      210 Peoples joined
                      </div>
                    </div>
                      <div className='flex justify-center items-center text-[20px] gap-1'>
                        Join now <div className='mt-1'><FaLongArrowAltRight/></div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="">
                <div className=' flex pb-3 border-b-2 gap-7 px-2 hover:scale-105 duration-300'>
                  <div className='text-6xl '><SlCalender/></div>
                  <div className='flex flex-col'><p className='text-black text-[1.15rem] '>ENVIRONMENT HELPERS</p>
                  <div className='flex justify-between items-baseline gap-3 '>
                    <div>
                      <div className='text-[0.9rem]'>
                      24TH JAN,2024
                      </div>
                      <div className='text-[0.7rem]'>
                      210 Peoples joined
                      </div>
                    </div>
                      <div className='flex justify-center items-center text-[20px] gap-1'>
                        Join now <div className='mt-1'><FaLongArrowAltRight/></div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="">
                <div className=' flex pb-3 border-b-2 gap-7 px-2 hover:scale-105 duration-300'>
                  <div className='text-6xl '><SlCalender/></div>
                  <div className='flex flex-col'><p className='text-black text-[1.15rem] '>ENVIRONMENT HELPERS</p>
                  <div className='flex justify-between items-baseline gap-3 '>
                    <div>
                      <div className='text-[0.9rem]'>
                      24TH JAN,2024
                      </div>
                      <div className='text-[0.7rem]'>
                      210 Peoples joined
                      </div>
                    </div>
                      <div className='flex justify-center items-center text-[20px] gap-1'>
                        Join now <div className='mt-1'><FaLongArrowAltRight/></div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <button className=' flex justify-center items-center gap-1 bg-[#eef0e5] text-[#0f1035] xl:text-[17px] 2xl:text-[22px] font-bold rounded-xl h-[2.8rem] border-4 border-[#0f1035] 2xl:h-[3.20rem] w-56 2xl:w-64 my-4 2xl:my-5 hover:scale-105 duration-300'>View More <div className='mt-[0.32rem] text-3xl'><FaLongArrowAltRight/></div> </button>
          </div>
          
        </div>
      </div>
      <div className={nav ? 'absolute left-0 top-[7.75rem] flex flex-col   border-r border-r-gray-900 ease-in-out duration-500 h-[797px] bg-[#0f1035]' : 'ease-in-out duration-500 fixed left-[-200%]'}>
      <div className='flex bg-[#0f1035] w-[300px] flex-col items-center pb-2 border-t border-[#eef0e5]'>
          <button className=' flex justify-center items-center gap-1 bg-[#eef0e5] text-[#0f1035] xl:text-[17px] 2xl:text-[22px] font-bold rounded-xl h-[2.8rem]  2xl:h-[3.20rem] w-56 2xl:w-64 my-4 2xl:my-6 hover:scale-105 duration-300'> <FaPlus/> Join Community</button>
          <p className='text-[#eef0e5] text-2xl 2xl:text-3xl font-bold mb-8'>Joined Communities</p>
          <div className='flex flex-col gap-3 2xl:gap-5' >
            <a href="">
              <div className='flex pb-3 border-b-2 xl:gap-3 2xl:gap-7 px-4 2xl:px-7 hover:scale-105 duration-300'>
              <img className='w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full mr-3' src={person} alt="" />
              <div className='flex flex-col'><p className='text-[#eef0e5] text-[0.9rem] 2xl:text-xl mt-1 2xl:mt-0'>GreenPeace Organisation</p>
              <p className='text-[#eef0e5] text-[0.75rem] 2xl:text-[1rem]'>345 Peoples</p></div>
              </div>
            </a>
            <a href="">
              <div className='flex pb-3 border-b-2 xl:gap-3 2xl:gap-7 px-4 2xl:px-7 hover:scale-105 duration-300'>
              <img className='w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full mr-3' src={person} alt="" />
              <div className='flex flex-col'><p className='text-[#eef0e5] text-[0.9rem] 2xl:text-xl mt-1 2xl:mt-0'>GreenPeace Organisation</p>
              <p className='text-[#eef0e5] text-[0.75rem] 2xl:text-[1rem]'>345 Peoples</p></div>
              </div>
            </a>
            <a href="">
              <div className='flex pb-3 border-b-2 xl:gap-3 2xl:gap-7 px-4 2xl:px-7 hover:scale-105 duration-300'>
              <img className='w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full mr-3' src={person} alt="" />
              <div className='flex flex-col'><p className='text-[#eef0e5] text-[0.9rem] 2xl:text-xl mt-1 2xl:mt-0'>GreenPeace Organisation</p>
              <p className='text-[#eef0e5] text-[0.75rem] 2xl:text-[1rem]'>345 Peoples</p></div>
              </div>
            </a>
            <a href="">
              <div className='flex pb-3 border-b-2 xl:gap-3 2xl:gap-7 px-4 2xl:px-7 hover:scale-105 duration-300'>
              <img className='w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full mr-3' src={person} alt="" />
              <div className='flex flex-col'><p className='text-[#eef0e5] text-[0.9rem] 2xl:text-xl mt-1 2xl:mt-0'>GreenPeace Organisation</p>
              <p className='text-[#eef0e5] text-[0.75rem] 2xl:text-[1rem]'>345 Peoples</p></div>
              </div>
            </a>
            <a href="">
              <div className='flex pb-3 border-b-2 xl:gap-3 2xl:gap-7 px-4 2xl:px-7 hover:scale-105 duration-300'>
              <img className='w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full mr-3' src={person} alt="" />
              <div className='flex flex-col'><p className='text-[#eef0e5] text-[0.9rem] 2xl:text-xl mt-1 2xl:mt-0'>GreenPeace Organisation</p>
              <p className='text-[#eef0e5] text-[0.75rem] 2xl:text-[1rem]'>345 Peoples</p></div>
              </div>
            </a>
            <a href="">
              <div className='flex pb-3 border-b-2 xl:gap-3 2xl:gap-7 px-4 2xl:px-7 hover:scale-105 duration-300'>
              <img className='w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full mr-3' src={person} alt="" />
              <div className='flex flex-col'><p className='text-[#eef0e5] text-[0.9rem] 2xl:text-xl mt-1 2xl:mt-0'>GreenPeace Organisation</p>
              <p className='text-[#eef0e5] text-[0.75rem] 2xl:text-[1rem]'>345 Peoples</p></div>
              </div>
            </a>            
          </div>
          <button className=' flex justify-center items-center gap-1 bg-[#eef0e5] text-[#0f1035] xl:text-[17px] 2xl:text-[22px] font-bold rounded-xl h-[2.8rem]  2xl:h-[3.20rem] w-56 2xl:w-64 my-4 2xl:my-5 hover:scale-105 duration-300'>View More <div className='mt-[0.32rem] text-3xl'><FaLongArrowAltRight/></div> </button>
        </div> 
      </div>
    </div>
  )
}

export default UserDashboard