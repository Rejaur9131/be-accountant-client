import React from 'react';
import HeroCard from './HeroCard';

const Hero = () => {
  return (
    <div
      className='hero min-h-screen bg-red-600'
      style={{
        backgroundImage: `url("https://beantown.website/html/be/html/content/accountant4/images/accountan4-section-bg1.png")`,
      }}
    >
      <div className='hero-content items-start flex-col lg:flex-row-reverse'>
        <img
          src='https://beantown.website/html/be/html/content/accountant4/images/accountant4-slider-pic3.webp'
          className='max-w-md'
          alt=''
        />
        <div className='text-white text-left'>
          <p className='pt-4 pb-8 text-xl'>Be Accountant</p>
          <h1 className='text-7xl font-bold'>
            Accountant Services <br />
            <span className='text-neutral'>and</span> Tax Optimization
          </h1>
          <img
            src='https://beantown.website/html/be/html/content/accountant4/images/accountant4-slider-icon.svg'
            className='py-12'
            alt=''
          />
          <div className='flex gap-8'>
            <HeroCard
              customerType='Individual Customers'
              image='https://beantown.website/html/be/html/content/accountant4/images/accountan4-faq-pic2.webp'
            ></HeroCard>
            <HeroCard
              customerType='Business Customers'
              image='https://beantown.website/html/be/html/content/accountant4/images/accountan4-faq-pic3.webp'
            ></HeroCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
