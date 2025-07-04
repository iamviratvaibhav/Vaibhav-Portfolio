import { useState, useRef, useEffect } from 'react'
import { FaInstagram, FaArrowUp } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

function Contact() {

  const [text, setText] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);

    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const getChar = (e) => {
    setText(e.target.value)
  }

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs.sendForm('service_myu3wrs', //replace with your service ID
    //   "template_vvg66qi",//replace with your template ID
    //   form.current,
    //   "rEs1WTzw-eewot2EX" //replace with your Emailjs's public key
    // )
    //   .then(() => {
    //     setIsSend(true);
    //     form.current.reset(); ///reset the form after sending
    //     toast.success("Message sent successfully!", {
    //       position: "top-right",
    //       autoClose: 3000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       theme: "dark",
    //     })
    //   }),
    //   (error) => {
    //     toast.error("Failed to send message. Please try again later.", error, {
    //       position:"top-right",
    //       autoClose:3000,
    //       hideProgressBar:false,
    //       closeOnClick:true,
    //       pauseOnHover:true,
    //       draggable:true,
    //       theme:"dark",
    //     })
    //   }
  }
  return show ? (
    <section
      id='contact'
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out. You can contact me via email
        </p>
      </div>
      {/* contact form */}
      <div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700'>
        <h3 className='text-xl font-semibold text-white text-center'>
          Connect with me
        </h3>

        <form ref={form} onSubmit={sendEmail} className='mt-4 flex flex-col space-y-4' >
          <input type="email" placeholder='Email' name='user_email'
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 '
          />
          <input type="text" placeholder='Name' name="user_name"
            className='w-full p-3 rounded-none bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 '
          />
          <input type="text" placeholder='Subject' name="user_subject"
            className='w-full p-3 rounded-none bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 '
          />
          <textarea rows="3" columns="40" placeholder='Message' name='message' onChange={getChar} value={text}
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 '
          />

          <button type="text"
            className='w-full bg-gradient-to-r cursor-not-allowed ... hover:bg-purple-700 py-3 text-white font-semibold rounded-md bg-purple-600 transition duration-300'
          >
            Send
          </button>
        </form>

      </div>

      <div className="mt-8 w-full max-w-md bg-[#0d081f]  p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">Connect on Social Media</h3>
        <p className="text-center text-sm text-gray-400 mt-2">Email: vaibhavverma9595@gmail.com</p>
        <p className="text-center text-sm text-gray-400">Phone: +91 89236XXXXX</p>
        <div className="flex justify-center mt-4 ">
          <a href='https://www.instagram.com/iamviratvaibhav' target='_blank' rel="noopener noreferrer">
            <FaInstagram className='text-white text-3xl mx-2 hover:text-[#8245ec] cursor-pointer' />
          </a>

          <a href='https://leetcode.com/u/iamviratvaibhav/' target='_blank' rel="noopener noreferrer">
            <SiLeetcode className='text-white text-3xl mx-2 hover:text-[#8245ec] cursor-pointer' />
          </a>

          <a href='https://x.com/itsVermaVaibhav/' target='_blank' rel="noopener noreferrer">
            <FaSquareXTwitter className='text-white text-3xl mx-2 hover:text-[#8245ec] cursor-pointer' />
          </a>
        </div>

        <footer className="bg-[#0d081f] text-white p-4 text-center mt-2">
          <p>© 2025 Vaibhav Verma</p>
          <p className="text-sm">All rights reserved.</p>
        </footer>
      </div>
      <button 
        onClick={()=> window.scrollTo({top: 0, behavior:'smooth'})}
        className="fixed bottom-10 right-10 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
      >
        <FaArrowUp />
      </button>

    </section>
  ) : null;
}

export default Contact
