import React from 'react';

function Select({ options = [], className="", setSortValue}) {
  
    return (
        <select className={className} onChange={(event) => {setSortValue(event.target.value)}}>
          {options.map((optionData) => (
            <option key={optionData.value} {...optionData} />
          ))}
        </select>
      );
    }
    
    export default Select;