import React from 'react'


import {categories} from './categories';
import '../Categories/Categories.css';
import CategoriesGallery from '../Categories/CategoresGallery.jsx';



const CategoriesMain = () => {
  return (
    <>
        <div className='categories row'>
            <h2>Categories</h2>
            {categories.map((images) => {
                return <CategoriesGallery details={images} key={images.id} />
            })}
        </div>
    </>
  );
}

export default CategoriesMain