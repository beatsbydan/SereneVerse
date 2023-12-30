import React, { useState } from 'react';
import './CheckBox.css'

const CheckBox:React.FC<{text: string}> = (props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="custom-checkbox"></span>
      {/* Add label text if needed */}
      <span className="label-text">{props.text}</span>
    </label>
  );
};

export default CheckBox;
