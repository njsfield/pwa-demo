import React, { Children }  from 'react';

// Footer
export default (props) => {
  // If credentials presents
  return (
    <footer className="footer">
     {Children.toArray(props.children)}
    </footer>
  );
}
