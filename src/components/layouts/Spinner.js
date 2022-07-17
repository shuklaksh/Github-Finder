import spinnerGif from './assets/spinner.gif'
import {Zoom} from 'react-preloaders';
import React from 'react';

function Spinner() {
  return (
    <React.Fragment>
    <div className='w-100 mt-20 bg-transparent'>
        <img width={180}
        className='text-center mx-auto bg-transparent'
        src= { spinnerGif } 
        alt='Loading.....' 
        />
    </div>
    </React.Fragment>
  )
    
}

export default Spinner
