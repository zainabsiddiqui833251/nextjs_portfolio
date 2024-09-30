'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { db } from '../../../lib/firebase'; // Adjust this path as necessary
import { collection, addDoc } from 'firebase/firestore';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Send data to the 'contacts' collection
      await addDoc(collection(db, 'contacts'), formData);
      
      // Send confirmation email
      await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
    } catch (error) {
      alert('Error sending message!');
      console.error(error);
    }
  };
  

  return (
    <section id='contact' className='p-10 w-[100%]'>
      <h1 className="text-[3vw] uppercase text-center text-[#00ffff] font-bold mb-4 " id='proj-head1'>Contact Me</h1>
      <div className="contact-container flex justify-between items-center w-[90%] m-auto">
        <div className="child-1 w-[50%]  p-[0.5rem] ">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              <h3 className='uppercase text-[#00ffff] text-[1rem] m-[1%] mt-5 mb-[3%]'><i className="bi bi-person"></i>  Full Name:</h3>
              <input type="text" name="name" id="name" placeholder='Full Name' value={formData.name} onChange={handleChange}  className='w-[90%] p-[0.8%] m-[0.6%] text-[1rem] text-[white] font-[bold]  bg-transparent border-b-2 focus:outline-none focus:border-b-2' required />
            </label><br />
            <label htmlFor="email">
              <h3 className='uppercase text-[#00ffff] text-[1rem] m-[1%] mt-5 mb-[3%]'><i className="bi bi-envelope"></i>  Email:</h3>
              <input type="email" name="email" id="email" placeholder='Email'  className='w-[90%] p-[0.8%] m-[0.6%] text-[1rem] text-[white] font-[bold]  bg-transparent border-b-2 focus:outline-none focus:border-b-2' value={formData.email} onChange={handleChange} required />
            </label><br />
            <label htmlFor="phone">
              <h3 className='uppercase text-[#00ffff] text-[1rem] m-[1%] mt-5 mb-[3%]'><i className="bi bi-telephone"></i>  Phone Number:</h3>
              <input type="tel" name="phone" id="phone" placeholder='Phone Number' value={formData.phone} onChange={handleChange}  className='w-[90%] p-[0.8%] m-[0.6%] text-[1rem] text-[white] font-[bold]  bg-transparent border-b-2 focus:outline-none focus:border-b-2' required />
            </label><br />
            <label htmlFor="message">
              <h3 className='uppercase text-[#00ffff] text-[1rem] m-[1%] mt-5 mb-[3%]'><i className="bi bi-chat"></i>  Message:</h3>
              <textarea name="message" rows={1} id="message" placeholder='Message' value={formData.message} onChange={handleChange}  className='w-[90%] p-[0.8%] m-[0.6%] text-[1rem] text-[white] font-[bold]  bg-transparent border-b-2 focus:outline-none focus:border-b-2' required />
            </label><br />
            <button type="submit" className='border-solid border-[2px] capitalize w-[20vw] flex justify-center items-center text-[1rem] border-[#00ffff] p-2 rounded-[10px] hover:bg-[#00ffff] hover:text-[#070606] m-auto mt-[2%]'>Send</button>
          </form>
        </div>
        <div className="child-2 h-[37vw] w-[45%] ml-[5%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d452.073677276375!2d67.06231083610689!3d24.980080200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340e5c7671d2b%3A0xee74b1c78d36951a!2sPlot%20A%201033%2C%20Sector%2011-A%20Sector%2011%20A%20North%20Karachi%20Twp%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1726740913477!5m2!1sen!2s"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className=' w-[90%] m-auto h-[100%]'
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;

