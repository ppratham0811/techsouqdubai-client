import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Heading from "../../Widgets/Heading";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EmailIcon from "@mui/icons-material/Email";
import TagIcon from "@mui/icons-material/Tag";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { state } = useLocation();
  const [product, setProduct] = useState(state?.product || null);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    from_name: "",
    from_email: "",
    product_title: product?.title,
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE,
      templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_DEFAULT;
    await emailjs
      .send("service_78itxwa", templateId, formValues, "xDU7Al3eXxSSqGs_e")
      .then(
        (result) => {
          setFormValues({
            from_name: "",
            message: "",
            from_email: "",
            product_title: "",
          });
        },
        (error) => {
          console.log(error);
        }
      );

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        <Heading title="Contact Us" />
        <div class="h-full my-5 sm:px-8 bg-white mx-6 rounded-lg py-10 px-4">
          <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 flex sm:col-span-6 lg:col-span-3">
              <div class="transition-all-300 text-white flex w-full items-center gap-4 rounded-lg bg-primary py-2 px-4 hover:shadow-lg xs:pl-[20%] sm:pl-5">
                <div>
                  <ContactSupportIcon />
                </div>
                <div>
                  <h6 class="font-bold capitalize">Phone</h6>
                  <p class="text-sm">+971 564430949</p>
                </div>
              </div>
            </div>
            <div class="col-span-12 flex sm:col-span-6 lg:col-span-3">
              <div class="transition-all-300 text-white flex w-full items-center gap-4 rounded-lg bg-primary py-2 px-4 hover:shadow-lg xs:pl-[20%] sm:pl-5">
                <div>
                  <EmailIcon />
                </div>
                <div>
                  <h6 class="font-bold capitalize">E-mail</h6>
                  <p class="text-sm">info@kamptechme.com</p>
                </div>
              </div>
            </div>
            <div class="col-span-12 flex sm:col-span-6 lg:col-span-3">
              <div class="transition-all-300 text-white flex w-full items-center gap-4 rounded-lg bg-primary py-2 px-4 hover:shadow-lg xs:pl-[20%] sm:pl-5">
                <div>
                  <AlternateEmailIcon />
                </div>
                <div>
                  <h6 class="font-bold capitalize">Address</h6>
                  <p class="text-sm">
                    Office No: 301-23, Al Masaood Tower, Al Maktoum Road, Deira
                    PO Box 390040 - Dubai
                  </p>
                </div>
              </div>
            </div>
            <div class="col-span-12 flex sm:col-span-6 lg:col-span-3">
              <div class="transition-all-300 text-white flex w-full items-center gap-4 rounded-lg bg-primary py-2 px-4 hover:shadow-lg xs:pl-[20%] sm:pl-5">
                <div>
                  <TagIcon />
                </div>
                <div>
                  <h6 class="font-bold capitalize">Social Media</h6>
                  <div class="flex gap-2 py-2">
                    <div class="relative h-8 w-8 overflow-hidden rounded-full">
                      <a
                        class="instagram-before flex h-8 w-8 items-center justify-center bg-gray-rgba text-center "
                        href="https://www.instagram.com/kamptech11/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="InstagramIcon"
                        >
                          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                        </svg>
                      </a>
                    </div>
                    <div class="transition-all-300 h-8 w-8 rounded-full bg-gray-rgba hover:bg-facebook">
                      <a
                        class="flex h-8 w-8 items-center justify-center"
                        href="https://www.facebook.com/profile.php?id=100091748850716&amp;mibextid=ZbWKwL"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="FacebookIcon"
                        >
                          <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                        </svg>
                      </a>
                    </div>
                    <div class="transition-all-300 h-8 w-8 rounded-full bg-gray-rgba hover:bg-twitter">
                      <a
                        class="flex h-8 w-8 items-center justify-center"
                        rel="noreferrer"
                        href="https://twitter.com/Kamptech11/"
                        target="_blank"
                      >
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="TwitterIcon"
                        >
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                        </svg>
                      </a>
                    </div>
                    <div class="transition-all-300 h-8 w-8 rounded-full bg-gray-rgba hover:bg-youtube">
                      <a
                        class="flex h-8 w-8 items-center justify-center"
                        href="https://www.linkedin.com/company/kamptech-solutions/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="LinkedInIcon"
                        >
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12 bg-white mt-8 p-5 sm:col-span-6">
            <h1 class="inline-block pb-3 text-4xl text-center mx-auto text-primary font-bold uppercase">
              Leave a Message
            </h1>
            <form class="flex flex-col gap-5">
              <div className="col-span-8">
                <label className="flex flex-col">
                  <span className="text-sm">Your name</span>
                  <input
                    className="p-2 border-gray-400 border-solid border-[1px] rounded-lg focus:outline-primary"
                    type="text"
                    value={formValues.from_name}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        from_name: e.target.value,
                      })
                    }
                  />
                </label>
              </div>
              <div className="col-span-8">
                <label className="flex flex-col">
                  <span className="text-sm">Email</span>
                  <input
                    className="p-2 border-gray-400 border-solid border-[1px] rounded-lg focus:outline-primary"
                    type="text"
                    value={formValues.from_email}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        from_email: e.target.value,
                      })
                    }
                  />
                </label>
              </div>
              {product && (
                <div className="col-span-8">
                  <label className="flex flex-col">
                    <span className="text-sm">Product</span>
                    <input
                      className="p-2 bg-gray-200 text-black border-gray-400 border-solid border-[1px] rounded-lg"
                      type="text"
                      value={product?.title}
                      readonly={true}
                    />
                  </label>
                </div>
              )}
              <div className="col-span-8">
                <label className="flex flex-col">
                  <span className="text-sm">Concern</span>
                  <textarea
                    className="p-2 border-gray-400 border-solid border-[1px] rounded-lg focus:outline-primary"
                    type="text"
                    rows={10}
                    value={formValues.message}
                    onChange={(e) =>
                      setFormValues({ ...formValues, message: e.target.value })
                    }
                  />
                </label>
              </div>
              <div>
                <button
                  class="btn-view-shopping-cart btn-effect transition-all-300 flex items-center justify-center rounded-lg bg-primary p-4"
                  type="submit"
                  onClick={sendEmail}
                >
                  <span class="font-bold uppercase text-white">
                    Send Message
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
