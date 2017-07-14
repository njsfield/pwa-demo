import React, { Children }  from 'react';

// H1 
export default (props) => {
  // If credentials presents
  return (
    <h1 className="h1">
     {Children.toArray(props.children)}
    </h1>
  );
}
