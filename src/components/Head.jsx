import React from "react";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { MdLiveHelp } from 'react-icons/md';
import { GiKenya } from 'react-icons/gi';
import './Head.css';

const Head = () => {
  return (
    <div className='head'>
      <div className='lefttop'>
        <span className='phone'>
          <BsFillTelephoneFill />
        </span>
        <span className='phone-label'>
          +254794937897
        </span>
        <span className='email'>
          <TfiEmail />
        </span>
        <span className='email-label'>
          quickcheckstore@gmail.com
        </span>
      </div>
      <div className='right'>
        <span className='help'>
          <MdLiveHelp />
          Help
        </span>
        <span className='country'>
          <GiKenya />
          Kenya
        </span>
        <span className='currency'>kes</span>
      </div>
    </div>
  );
}

export default Head;
