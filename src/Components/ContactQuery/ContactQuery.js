import React, { useState } from "react";
import HelpIcon from "@mui/icons-material/Help";
import HelpMenu from "./HelpMenu";

const ContactQuery = () => {
  const [showHelpMenu, setShowHelpMenu] = useState(false);

  return (
    <>
      <div
        className="z-[200] flex items-center justify-center rounded-[50%] text-white bg-primary cursor-pointer text-2xl fixed bottom-8 right-8 h-14 w-14"
        onClick={() => setShowHelpMenu(true)}
      >
        <HelpIcon />
      </div>

      {showHelpMenu && <HelpMenu setShowHelpMenu={setShowHelpMenu} />}
    </>
  );
};

export default ContactQuery;
