import GoldSection from './Sections/GoldSection';
import MatchSection from './Sections/MatchSection';
import Socials from './Sections/Socials';
import TrulyU from './Sections/TrulyU';
import { useState,useEffect } from 'react';
export default function Sections(){
    
    return(
        <div style={{
            background: 'radial-gradient(56.98% 56.98% at 55.68% 21.79%, #090909 0%, #181818 100%)'
          }}> 
          <img className="w-full" src="/images/Rectangle 16 (1).png" alt="" />
        <GoldSection/>
        <TrulyU/>
        <MatchSection/>
        <Socials/>
        </div>
    )
}