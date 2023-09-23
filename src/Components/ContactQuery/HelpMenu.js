import React, { useEffect, useRef, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import emailjs from "@emailjs/browser";

const HelpMenu = ({ setShowHelpMenu, toast }) => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    from_name: "",
    from_email: "",
    message: "",
    product_title: "",
  });

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE,
      templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_DEFAULT;
    console.log(form.current);

    if (!formValues.from_name) {
      toast[1]("Please enter your name");
    } else if (!formValues.from_email) {
      toast[1]("Please enter your name");
    } else if (!formValues.message) {
      toast[1]("Please enter your name");
    } else {
      await emailjs
        .send("service_78itxwa", templateId, formValues, "xDU7Al3eXxSSqGs_e")
        .then(
          (result) => {
            console.log(result);
            setFormValues({
              from_name: "",
              message: "",
              from_email: "",
            });
          },
          (error) => {
            console.log(error);
          }
        );
    }

    setLoading(false);
    setShowHelpMenu(false);
    toast[1]("Message sent successfully");
  };

  return (
    <>
      <div className="bg-primary p-4 rounded-md z-[999] absolute max-w-screen bottom-0 right-0">
        <div className="flex justify-between">
          <span className="text-xl text-white pr-10">
            Contact us for more details!
          </span>
          <ClearIcon
            className="text-white text-left cursor-pointer"
            onClick={() => setShowHelpMenu(false)}
          />
        </div>
        <form
          onSubmit={(e) => sendEmail(e)}
          ref={form}
          className="flex flex-col"
        >
          <input
            type="text"
            className="my-2 p-2 rounded-md"
            placeholder="Enter your name"
            name="from_name"
            value={formValues.from_name}
            onChange={(e) =>
              setFormValues({ ...formValues, from_name: e.target.value })
            }
          />
          <input
            type="email"
            className="my-2 p-2 rounded-md"
            placeholder="Enter your email"
            name="from_email"
            value={formValues.from_email}
            onChange={(e) =>
              setFormValues({ ...formValues, from_email: e.target.value })
            }
          />
          <textarea
            value={formValues.message}
            className="my-2 p-2 rounded-md"
            name="message"
            id="query"
            cols="30"
            rows="10"
            placeholder="Enter your query"
            onChange={(e) =>
              setFormValues({ ...formValues, message: e.target.value })
            }
          ></textarea>
          <button className="bg-white text-black text-center rounded-md p-2">
            {loading ? "Loading..." : "Send"}
          </button>
        </form>
      </div>
    </>
  );
};

export default HelpMenu;
