import React from 'react'
import './Testimonials.css'
import AVR1 from '../../assets/avatar1.jpg'
import AVR2 from '../../assets/avatar2.jpg'
import AVR3 from '../../assets/avatar3.jpg'
import AVR4 from '../../assets/avatar4.jpg'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVR1} alt="Avatar" />
            <h5 className='client__name'>Cabib Namakedov</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Quas voluptates ab dolor 
              et soluta vero, quam vitae illum temporibus 
              molestias quae iure natus expedita!
              Velit enim qui quaerat laboriosam commodi!
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVR2} alt="Avatar" />
            <h5 className='client__name'>Arsen Carnester</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Quas voluptates ab dolor 
              et soluta vero, quam vitae illum temporibus 
              molestias quae iure natus expedita!
              Velit enim qui quaerat laboriosam commodi!
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVR3} alt="Avatar" />
            <h5 className='client__name'>Edward blander</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Quas voluptates ab dolor 
              et soluta vero, quam vitae illum temporibus 
              molestias quae iure natus expedita!
              Velit enim qui quaerat laboriosam commodi!
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVR4} alt="Avatar" />
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Quas voluptates ab dolor 
              et soluta vero, quam vitae illum temporibus 
              molestias quae iure natus expedita!
              Velit enim qui quaerat laboriosam commodi!
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials