import React from 'react';
import slide1 from '../assets/images/1.png'
import slide2 from '../assets/images/2.png'
import slide3 from '../assets/images/3.png'

function Carousel() {
    return (
        <>
        
           <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slide1} class="d-block w-100" alt="slide1"/>
      
    </div>
    <div class="carousel-item">
      <img src={slide2} class="d-block w-100" alt="slide2"/>
    </div>
    <div class="carousel-item">
      <img src={slide3} class="d-block w-100" alt="slide3"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


        </>
    );
}

export default Carousel;


