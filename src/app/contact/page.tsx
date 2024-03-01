"use client";
import { StyledContactMainPage } from "./contact.style";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { handleSubmit, reset, register } = useForm();
  const clearData = (e: any) => {
    reset();

    toast.success("Thanks for contact us");
  };

  return (
    <StyledContactMainPage>
      <section className="contact-title">
        <div>
          <h2>Contact us</h2>
          <p>
            <i>Feel free to have a chat with us</i>
          </p>
        </div>
      </section>
      <section className="contact-subtitle">
        <p>
          <b>Do you need any help?</b>
        </p>
        <h1>
          <span className="about-title_line"></span>
          Choose how to get in<span>touch</span>
          <span className="about-title_line"></span>
        </h1>
      </section>
      <section className="contact-types">
        <div className="contact-types_one">
          <div>
            <IoPersonCircleOutline className="svg-person" />
            <p>
              <b>
                <i>didJohnDoes@mail.com</i>
              </b>
            </p>
          </div>
          <div>
            <FaPhoneAlt />
            <p>
              <b>
                <i>(888) 888-8888</i>
              </b>
            </p>
          </div>
          <div>
            <FaShop />
            <p>
              <b>
                <i>coUrban@mail.com</i>
              </b>
            </p>
          </div>
          <div>
            <GiRotaryPhone />
            <p>
              <b>
                <i>(999) 999-9999</i>
              </b>
            </p>
          </div>
        </div>
        <div className="contact-types_two">
          <hgroup>
            <h1>
              <span className="about-title_line"></span>
              Want to send us a<span>message</span>?
              <span className="about-title_line"></span>
            </h1>
            <p>
              <i>Please contact us</i>
            </p>
          </hgroup>
          <form onSubmit={handleSubmit((e) => clearData(e))}>
            <label htmlFor="name">
              <span>Name:</span>
              <input {...register("name")} type="text" id="name" />
            </label>
            <label htmlFor="email">
              <span>Email:</span>
              <input type="text" {...register("email")} id="email" />
            </label>
            <label htmlFor="sub">
              <span>Subject:</span>
              <input type="text" {...register("sub")} id="sub" />
            </label>
            <label htmlFor="message">
              <span>Message:</span>
              <textarea
                id="message"
                {...register("message")}
                cols={30}
                rows={10}
              ></textarea>
            </label>
            <button>Send</button>
          </form>
        </div>
      </section>
    </StyledContactMainPage>
  );
};
export default Contact;
