import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [login, setLogin] = useState(true);

  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        <div className="mx-auto max-w-[500px] rounded-lg my-10 bg-white p-5">
          <div className="my-5 flex items-center justify-center">
            <img className="h-16 w-16" src="logo.png" alt="logo" />
            <p className="font-bold mx-2 text-2xl">TechSouqDubai</p>
          </div>

          {login ? (
            <form action="">
              <div className="flex flex-col gap-4">
                <div className="relative flex h-[40px] items-center focus:border-primary border-2 p-2 border-solid rounded-lg">
                  <EmailIcon />
                  <input
                    className="focus:outline-none w-full pl-6"
                    type="text"
                    placeholder="Email"
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                  />
                </div>
                <div className="relative flex h-[40px] items-center focus:border-primary border-2 p-2 border-solid rounded-lg">
                  <LockOutlinedIcon />
                  <input
                    className="focus:outline-none w-full pl-6"
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                  />
                </div>
              </div>
              <button
                  className="btn-effect transition-all-300 h-full w-full rounded-lg bg-primary p-2 mt-4"
                  type="submit"
                >
                  <span className="font-bold uppercase text-white">
                    Log In
                  </span>
                </button>
            </form>
          ) : (
            <form>
              <div className="flex flex-col gap-4">
                <div className="relative flex h-[40px] items-center focus:border-primary border-2 p-2 border-solid rounded-lg">
                  <PersonIcon />
                  <input
                    className="focus:outline-none w-full pl-6"
                    type="text"
                    placeholder="Name"
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                  />
                </div>
                <div className="relative flex h-[40px] items-center focus:border-primary border-2 p-2 border-solid rounded-lg">
                  <EmailIcon />
                  <input
                    className="focus:outline-none w-full pl-6"
                    type="text"
                    placeholder="Email"
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                  />
                </div>
                <div className="relative flex h-[40px] items-center focus:border-primary border-2 p-2 border-solid rounded-lg">
                  <LockOutlinedIcon />
                  <input
                    className="focus:outline-none w-full pl-6"
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                  />
                </div>
                <div className="relative flex h-[40px] items-center focus:border-primary border-2 p-2 border-solid rounded-lg">
                  <LockIcon />
                  <input
                    className="focus:outline-none w-full pl-6"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </div>
                <button
                  className="btn-effect transition-all-300 h-full w-full rounded-lg bg-primary p-2"
                  type="submit"
                >
                  <span className="font-bold uppercase text-white">
                    Sign Up
                  </span>
                </button>
              </div>
              <div className="my-2 flex items-center justify-between">
                <label className="flex select-none items-center gap-2">
                  <input className="checkbox" type="checkbox" required />
                  <span className="text-gray-title">
                    I agree with all{" "}
                    <a
                      className="underlined-animated text-[#3091ff] after:bottom-0"
                      href="#"
                    >
                      Terms of Use{" "}
                    </a>
                    &amp;
                    <a
                      className="underlined-animated text-[#3091ff] after:bottom-0"
                      href="#"
                    >
                      {" "}
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
              </div>
            </form>
          )}

          <div className="mt-5 flex flex-col items-center justify-center border-t border-t-gray-400 pt-5">
            <span>Do you already have an account?</span>
            <button
              type="button"
              className="btn-effect mt-2 rounded-lg bg-primary p-2 text-white"
              onClick={() => setLogin(!login)}
            >
              {login ? <span>Sign Up</span> : <span>Login</span>}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
