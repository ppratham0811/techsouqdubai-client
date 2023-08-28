import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LockIcon from "@mui/icons-material/Lock";
import { useEffect, useState } from "react";
import { loginUser, registerUser, deleteCurrentSession } from "../../actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (toast.length > 0) {
        setToast("");
      }
    }, 2000);
  }, [toast]);

  useEffect(() => {
    if (
      ((userData.password !== "" && userData.confirmPassword !== "") ||
        userData.password !== "") &&
      userData.password !== userData.confirmPassword
    ) {
      setMessage("Passwords don't match");
    } else if (userData.password.length < 8) {
      setMessage("*Password should be more than 8 characters long");
    } else {
      setMessage("");
    }
  }, [userData]);

  const [login, setLogin] = useState(true);

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    if (!login && !userData.name) {
      setToast("Please enter your name");
    } else if (!userData.email) {
      setToast("Please enter your email ID");
    } else if (!userData.password) {
      setToast("Please enter a password");
    } else if (!login && userData.password !== userData.confirmPassword) {
      setToast("Passwords don't match");
    } else {
      setToast("");
      //await deleteCurrentSession();
      if (login) {
        const loggedUser = await loginUser({
          email: userData.email,
          password: userData.password,
        });

        if (loggedUser.status) {
          navigate("/");
        } else {
          setToast(loggedUser.error.message);
        }
      } else {
        const user = await registerUser({
          email: userData.email,
          password: userData.password,
          name: userData.name,
        });

        if (user.status) {
          navigate("/");
        } else {
          setToast(user.error.message);
        }
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative bg-gray-100">
        <div
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 ${
            toast ? "top-2" : "translate-y-[-100%]"
          } transition-all duration-300`}
        >
          {toast.length > 0 && (
            <div className="bg-red-500 px-4 py-2 text-white rounded">
              <p>{toast}</p>
            </div>
          )}
        </div>
        <div className="shadow-2xl mx-auto max-w-[500px] rounded-lg my-14 bg-white p-5">
          <div className="my-5 flex items-center justify-center">
            <img className="h-16 w-16" src="logo.png" alt="logo" />
            <p className="font-bold mx-2 text-2xl">TechSouqDubai</p>
          </div>
          {login ? (
            <form>
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
                    value={userData.email}
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
                    value={userData.password}
                  />
                </div>
                <p className="text-sm text-gray-600 cursor-pointer">
                  Forgot Password?
                </p>
              </div>
              <button
                className="btn-effect transition-all-300 h-full w-full rounded-lg bg-primary p-2 mt-4"
                type="submit"
                onClick={handleLoginFormSubmit}
              >
                <span className="font-bold uppercase text-white">Log In</span>
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
                    value={userData.name}
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
                    value={userData.email}
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
                    value={userData.password}
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
                    value={userData.confirmPassword}
                  />
                </div>
                <div className="m-0 mb-1">
                  {message.length > 0 && (
                    <p className="text-red-500 text-sm">{message}</p>
                  )}
                </div>
                <button
                  className="btn-effect transition-all-300 h-full w-full rounded-lg bg-primary p-2"
                  type="submit"
                  onClick={handleLoginFormSubmit}
                >
                  <span className="font-bold uppercase text-white">
                    Sign Up
                  </span>
                </button>
              </div>
            </form>
          )}

          <div className="mt-5 flex flex-col items-center justify-center border-t border-t-gray-400 pt-5">
            {login ? (
              <span>Don't have an account?</span>
            ) : (
              <span>Already have an account?</span>
            )}
            <button
              type="button"
              className="btn-effect mt-2 rounded-lg bg-primary p-2 text-white text-sm px-6"
              onClick={() => {
                setUserData({
                  name: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                });
                setLogin(!login);
              }}
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
