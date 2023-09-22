import React from 'react'
import '../SecondaryNav/SecondaryNav.css'
import '../SecondaryNav/SecondaryGallery.jsx'

import { gallery } from './gallery';
import SecondaryGallery from '../SecondaryNav/SecondaryGallery.jsx';

function SecondNav() {
  return (
    <>
      <div className="secondNav row">
        {gallery.map((images) => {
          return <SecondaryGallery details={images} key={images.id} />
        })}
      </div>
    </>
  );
}

export default SecondNav