import React, { useRef, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import emailjs from "@emailjs/browser";

const HelpMenu = ({ setShowHelpMenu, showMenu }) => {
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE,
      templateId = process.env.REACT_APP_EMAILJS_TEMPLATE;

    emailjs
      .sendForm(serviceId, templateId, form.current, "FxjtemBzB63O7q6iG")
      .then(
        (result) => {
          setTimeout(() => {
            setLoading(false);
          }, 5000);
          e.target.reset();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  console.log(showMenu);

  return (
    <div className="bg-primary p-4 rounded-md z-[200] absolute max-w-screen bottom-0 right-0">
      <div className="flex justify-between">
        <span className="text-xl text-white pr-10">
          Contact us for more details!
        </span>
        <ClearIcon
          className="text-white text-left cursor-pointer"
          onClick={() => setShowHelpMenu(false)}
        />
      </div>
      <form onSubmit={() => sendEmail()} ref={form} className="flex flex-col">
        <input
          type="email"
          className="my-2 p-2 rounded-md"
          placeholder="Enter your email"
        />
        <textarea
          className="my-2 p-2 rounded-md"
          name="query"
          id="query"
          cols="30"
          rows="10"
          placeholder="Enter your query"
        ></textarea>
        <button className="bg-white text-black text-center rounded-md p-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default HelpMenu;
