import React from 'react'
import kitten1 from '../img/kitten1.jpeg';
import kitten2 from '../img/kitten2.jpeg';
import kitten3 from '../img/kitten3.jpeg';
import kitten4 from '../img/kitten4.jpeg';

const Home = () => {
  return (
    <>
    <div>Hi friends this is the home pageeeeee where we eill be adding cute cat pics later :D</div>

    <div className="kitten-collage">
    <img src={kitten1} alt="Kitten 1" className="kitten-image" />
    <img src={kitten2} alt="Kitten 2" className="kitten-image" />
    <img src={kitten3} alt="Kitten 3" className="kitten-image" />
    <img src={kitten4} alt="Kitten 4" className="kitten-image" />
     </div>
    </>

  )
}

export default Home