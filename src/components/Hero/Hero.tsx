import React from 'react';

const Hero = () => {
  return (
    <div
      className='hero min-h-screen bg-red-500'
      style={{
        backgroundImage: `url("https://beantown.website/html/be/html/content/accountant4/images/accountan4-section-bg1.png")`,
      }}
    >
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img
          src='https://beantown.website/html/be/html/content/accountant4/images/accountant4-slider-pic3.webp'
          className='max-w-md mt-2'
        />
        <div className='text-white'>
          <h1 className='text-5xl font-bold'>Box Office News!</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
