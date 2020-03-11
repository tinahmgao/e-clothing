import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`

export const EmptyMessageContainer = styled.span`
  margin: 50px auto;
  font-size: 18px;
`

export const CartItemContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const CartDropDownButton = styled(CustomButton)`
  margin-top: auto;
`
