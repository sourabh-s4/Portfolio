import React from "react";
import me from "../assets/me.jpeg"
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Sourabh Singh</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/channel/UCwMmapqT2OcWMfqsP5kPrWQ" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.linkedin.com/in/sourabh-singh-0b4a65223" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/sourabh-s4" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;