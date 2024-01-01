import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
// import facebook from '../assets/socials/facebook.png';
// import instagram from '../assets/socials/instagram.png';
// import email from '../assets/socials/sms.png';
// import whatsapp from '../assets/socials/wsaap1.png';
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( "service_kqh1phs","template_j2e0nil", form.current, "vNR88yAZQWcdUgR7y" );
    e.target.reset();
  };

  return (
    <div className="md:px-10 px-7 my-10" id="contact">
      <div className="flex flex-col md:flex-row">

        {/* text and icons */}
        <div className="md:w-1/2">
          <h1 className="text-primary font-semibold text-3xl mt-16">
            Connect with me:
          </h1>
          {/* <p className="my-3 text-white md:w-3/4 leading-[2]">
            Satisfied with me?
          </p> */}
          <p className="my-2 text-white md:w-3/4 leading-[2]">
             Contact me :- +918051203988
          </p>

          {/* social icons */}

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center  text-slate-500">
            <article>
              <MdOutlineEmail />

              <h4>Email</h4>
              <h5>mailmerajgrd@gmail.com</h5>
              <a href="mailto:mailmerajgrd@gmail.com">
                <button className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary  mt-5">
                  Send Message
                </button>
              </a>
            </article>
          </div>
          <article className=" text-slate-500">
            <BsWhatsapp />

            <h4>Whatsapp</h4>
            <h5>80******88</h5>
            <a href="https://wa.me/918051203988">
              <button className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary  mt-5">
                Send Message
              </button>
            </a>
          </article>

        </div>

            {/* form */}

        <div className="md:w-1/2">
          <p className="mt-16 text-white text-2xl mb-6">Contact me :</p>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Name:"
              className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded "
            />
            <input
              type="email"
              name="email"
              placeholder="Email:"
              className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3"
            />
            <textarea
              name="message"
              id="message"
              cols="54"
              rows="4"
              placeholder="Message:"
              className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2" 
            >
            </textarea>

            <button className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-white hover:bg-white hover:text-primary block">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
