import { GoInfo } from "react-icons/go";
import { StyledDisclaimer } from "./disclaimer.style";
import { FaLinkedin } from "react-icons/fa";

export const Disclaimer = () => {
  return (
    <StyledDisclaimer>
      <div className="message">
        <GoInfo />
        <p>
          This website is just a template and does not have any type of
          financial receipt.
        </p>
      </div>
      <div className="contact">
        <p>If you wanna know more about my works, contact me on </p>
        <a
          href="https://www.linkedin.com/in/denisson-victor-17963b212/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </StyledDisclaimer>
  );
};
