import React, { Children }  from 'react';

// Footer
export default (props) => {
  // If credentials presents
  return (
    <div className="container">
     {Children.toArray(props.children)}
    </div>
  );
}
