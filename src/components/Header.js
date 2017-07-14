import React, { Children }  from 'react';

// Footer
export default (props) => {
  // If credentials presents
  return (
    <header className="header">
     {Children.toArray(props.children)}
    </header>
  );
}
