import React from 'react';

const HeroCard = (props: { customerType: string; image?: string }) => {
  return (
    <div className='grid grid-cols-2 bg-slate-100 rounded-lg px-12 items-center'>
      <img src={props.image} alt='' />
      <p className=' text-black font-bold text-xl'>{props.customerType}</p>
    </div>
  );
};

export default HeroCard;
