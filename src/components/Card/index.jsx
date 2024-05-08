import React from "react";

const Card = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='card w-full bg-base-100 shadow-2xl'>
        <figure className='px-10 pt-10'>
          <div className='avatar'>
            <div className='w-24 rounded'>
              <img
                alt='avatar'
                src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              />
            </div>
          </div>
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>Hafiyyan Abdul Aziz</h2>
          <p>081283793435</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
