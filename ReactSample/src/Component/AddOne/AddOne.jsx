import React from 'react'

import '../AddOne/AddGallery.jsx'
import '../AddOne/AddOne.css'

import { addPic } from './addPic.js';

import AddGallery from '../AddOne/AddGallery.jsx'

const AddOne = () => {
  return (
    <>
      <div className='addOne row'>
        <div className="heading row">
          <h4 className='col-lg-6'>Best of Electronics</h4>
          {/* <i class="bi bi-arrow-right-circle col-lg-6"></i> */}
        </div>
        {addPic.map((images) => {
          return <AddGallery details={images} key={images.id} />
        })}
      </div>
    </>
  );
}

export default AddOne