import React, { useEffect, useState } from "react";
import HelpIcon from "@mui/icons-material/Help";
import HelpMenu from "./HelpMenu";

const ContactQuery = () => {
  const [showHelpMenu, setShowHelpMenu] = useState(false);

  const [toast, setToast] = useState("");
  useEffect(() => {
    setTimeout(() => {
      if (toast.length > 0) {
        setToast("");
      }
    }, 2000);
  }, [toast]);

  return (
    <>
      <div
        className={`fixed top-0 z-[999999] left-1/2 transform -translate-x-1/2 ${
          toast ? "top-2" : "translate-y-[-100%]"
        } transition-all duration-300`}
      >
        {toast.length > 0 && (
          <div className="bg-green-500  px-4 py-2 text-white rounded">
            <p>{toast}</p>
          </div>
        )}
      </div>
      <div className="z-[800] fixed md:bottom-8 md:right-8 bottom-4 right-2">
        <div
          className="flex items-center justify-center rounded-[50%] text-white bg-primary cursor-pointer text-2xl h-14 w-14 md:h-16 md:w-16 "
          onClick={() => setShowHelpMenu(true)}
        >
          <HelpIcon />
        </div>
        <div className="relative">
          {showHelpMenu && (
            <HelpMenu
              setShowHelpMenu={setShowHelpMenu}
              toast={[toast, setToast]}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ContactQuery;
