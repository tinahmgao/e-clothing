import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { ReactComponent as BagIcon } from '../../assets/bag-icon.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <BagIcon className="bag-icon" />
    <span className="item-count">0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)
