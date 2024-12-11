import React, { useState } from 'react'
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to submit mail using formspree
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email.trim() === '' || state.name.trim() === ''){
      alert("You need to enter a name and email for sending a contact message!");
      return;
    }
    if (state.message.trim().length <2){
      alert("Invalid Message | You need to enter a message of atleast 2 characters");
      return;
    }

    fetch("https://formspree.io/f/xyyralpw", {
      method: 'POST',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
      .then(response => {
        if (response.ok) {
          alert('Message sent successfully.');
          setState({
            name: '',
            email: '',
            message: ''
          });
        } else {
          alert('There was a problem with your submission. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      });
  };

  return (
    <div className='bg-purple-500/20 '>

      {/* All the contents */}
      <Fade duration={500} delay={200}>
        <div
          className='mx-2 sm:mx-auto p-2 sm:p-4
          sm:w-[655px] md:w-[790px] lg:w-[1004px]
          bg-purple-900/60 hover:bg-purple-200 rounded-lg group/contact
          shadow-[0_0_5px_black] hover:shadow-[0_0_15px_black] transition duration-500'
        >

          {/* Title of the section */}
          <Fade>
            <div className="flex text-purple-400 group-hover/contact:text-purple-900
            font-bold text-2xl sm:text-4xl text-center justify-center underline underline-offset-4">
              <p>Contact me</p>
            </div>
          </Fade>

          {/* Contact Form */}
          <Fade>
            <form
              onSubmit={handleSubmit}
              id="contact"
              className='max-w-[500px] mx-auto'
            >
              {/* Name */}
              <div className="mb-4 relative">
                <label htmlFor="contact_name" className='text-xl text-purple-300 group-hover/contact:text-purple-950 font-bold'>Name</label>
                <input
                  // onChange={(event) => setInputName(event.target.value)}
                  value={state.name}
                  name='name'
                  onChange={handleChange}
                  type="text"
                  id="contact_name"
                  placeholder={'Enter your name'}
                  className="text-purple-950 placeholder:text-purple-400 bg-purple-100 block w-full h-10 mt-1 pl-10 border-2 border-gray-600 rounded-md shadow-sm "
                />
                <svg
                  className='absolute left-3 top-10 h-6 w-6 text-purple-800'
                  fill="currentColor"
                  width="24" height="24" viewBox="0 0 24 24" id="user"
                  data-name="Flat Color" xmlns="http://www.w3.org/2000/svg"
                >
                  <path id="primary"
                    d="M21,20a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2,6,6,0,0,1,6-6h6A6,6,0,0,1,21,20Zm-9-8A5,5,0,1,0,7,7,5,5,0,0,0,12,12Z"
                  />
                </svg>
              </div>

              {/* Email */}
              <div className="mb-4 relative">
                <label htmlFor="contact_email" className='text-xl text-purple-300 group-hover/contact:text-purple-950 font-bold'>Email Address</label>
                <input
                  name='email'
                  value={state.email}
                  onChange={handleChange}
                  type="email"
                  id="contact_email"
                  placeholder={'Enter your email'}
                  className="text-purple-950 placeholder:text-purple-400 bg-purple-100 block w-full h-10 mt-1 pl-10 border-2 border-gray-600 rounded-md shadow-sm "
                />
                <svg
                  className="absolute left-3 top-10 h-6 w-6 text-purple-800"
                  width="24" height="24" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path
                    d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
                  />
                </svg>
              </div>

              {/* Message */}
              <div className='mb-4'>
                <label htmlFor="contact_message" className='text-xl text-purple-300 group-hover/contact:text-purple-950 font-bold'>Write your message</label>
                <textarea
                  name='message'
                  value={state.message}
                  onChange={handleChange}
                  id="contact_message"
                  rows="4"
                  required
                  placeholder={"Enter your message"}
                  className="text-purple-950 placeholder:text-purple-400 bg-purple-100 block p-2 w-full mt-1 border-2 border-gray-600 rounded-md shadow-sm "
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="mt-4 px-6 py-3 w-full text-xl font-bold bg-purple-500 hover:bg-purple-950 text-white rounded-md shadow "
              >Submit
              </button>

            </form>
          </Fade>

        </div>
      </Fade>
    </div>
  )
}

export default Contact