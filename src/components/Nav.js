import React, { Children }  from 'react';

// Footer
export default (props) => {
  // If credentials presents
  return (
    <nav className="nav">
     {Children.toArray(props.children)}
    </nav>
  );
}
