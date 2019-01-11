import React from 'react';

const CartFooter = (prop) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="g">&copy; {prop.year}</a>
    </nav>
  )
}

export default CartFooter
