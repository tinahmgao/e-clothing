import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as BagIcon } from '../../assets/bag-icon.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ itemCount, dispatch }) => (
  <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
    <BagIcon className="bag-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
)

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps)(CartIcon)
