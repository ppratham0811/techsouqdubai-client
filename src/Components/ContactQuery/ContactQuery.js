import React, { useState } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import HelpMenu from './HelpMenu';

const ContactQuery = () => {
  const [showHelpMenu, setShowHelpMenu] = useState(false);

  return (
    <div className='z-[200]  fixed md:bottom-8 md:right-8 bottom-4 right-2'>
      <div
        className='flex items-center justify-center rounded-[50%] text-white bg-primary cursor-pointer text-2xl h-14 w-14 md:h-16 md:w-16 '
        onClick={() => setShowHelpMenu(true)}
      >
        <HelpIcon />
      </div>
      <div className='relative'>
        {showHelpMenu && (
          <HelpMenu setShowHelpMenu={setShowHelpMenu} showMenu={showHelpMenu} />
        )}
      </div>
    </div>
  );
};

export default ContactQuery;
