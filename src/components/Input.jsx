import React from 'react';

const Input = ({ labelName, value, onChange }) => {
    const handleInputChange = (e) => {
      onChange(e.target.value);
    };
    return (
      <label className="w-full max-w-xs h-full">
        <div className="label">
          <span className="text-lg font-semibold">{labelName}</span>
        </div>
        {labelName === "Password" || labelName==="New Password" ? (
          <input
            type="password"
            value={value}
            onChange={handleInputChange}
            className="border-gray-200 border-2 rounded-lg w-full max-w-xs h-8 mt-2 p-2"
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            className="border-gray-200 border-2 rounded-lg w-full max-w-xs h-8 mt-2 p-2"
          />
        )}
      </label>
    );
  };
  
  
  export default Input;
  