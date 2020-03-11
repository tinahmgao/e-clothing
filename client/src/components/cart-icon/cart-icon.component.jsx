import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import {
  CartIconContainer,
  BagIcon,
  ItemCountContainer
} from './cart-icon.styles'

const CartIcon = ({ itemCount, dispatch }) => (
  <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
    <BagIcon className="bag-icon" />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
)

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps)(CartIcon)
