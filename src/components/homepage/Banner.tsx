import React from 'react';
import bannerr from "@/assets/banner.png"
import Image from "next/image";

const Banner = () => {
    return (
        <div className='bg-black text-white flex border-white border-2'>
            <div className='py-4 p-2'>
                <p>WORKOUT LIBRARY</p>
                <h2 className='font-bold text-6xl'>TRAIN WITH INTENT. LOG <br/>
EVERY SET.</h2>
<p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br/>
into today's plan, and watch the week's work add up.</p>
<button className='btn btn-success'>ROWSE WORKOUTS</button>
            </div>
            <div className='py-8 p-30'>
           <Image src={bannerr}
 height={350} 
 width={200}
  alt="Logo" />
            </div>
        </div>
    );
};

export default Banner;