import {useRef} from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m2nfurv', 'template_1gm4p6u', form.current, 'yximBkZr5f8Dn2gxw')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>kirubelkinfe01@gmail.com</h5>
            <a href='mailto:kirubelkinfe01@gmail.com'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>kirubelkinfe01@gmail.com</h5>
            <a href='mailto:kirubelkinfe01@gmail.com'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>kirubelkinfe01@gmail.com</h5>
            <a href='mailto:kirubelkinfe01@gmail.com'>Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea rows="7" name="message" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact