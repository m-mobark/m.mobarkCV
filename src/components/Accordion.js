import React, { useState } from 'react';
import { ImEyeBlocked,ImEye } from 'react-icons/im';


const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="container">
    
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? <ImEye/> : <ImEyeBlocked/>}</div>
      </div>
      
      {isActive && <div className="accordion-content">{content}</div>}
      
    </div>
    </div>
    
  );
};

export default Accordion;