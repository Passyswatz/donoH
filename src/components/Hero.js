import React from 'react'
import Homeimage from '../assets/hero.jpg'
export default function Hero(){

        const gradientStyle = {
        background: 'linear-gradient(180deg, rgba(253, 254, 255, 0) 70%, #FDFEFF 100%, #FDFEFF 100%)',};
  return (


    <div className='relative'>
         <img src={Homeimage} alt='img' className='w-[1457px]  top-[134.9px] left-[-11px] rounded-4'/>
         <div className=" absolute w-[431px] h-[234px] top-[150px] left-[150px]">
            <h1 className='font-montserrat font-semibold text-8xl leading-78 '>
            It is through Giving that we live. 
            </h1>
         </div>
         <div  style={gradientStyle}  className="absolute inset-0 ">
            
         </div>
    </div>
  )
}

