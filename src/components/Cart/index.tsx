import { useNavigate } from 'react-router'

import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  SideBar
} from './styles'

import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { formatPrice, getTotalPrice } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{formatPrice(item.prices.current)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} />
                </CartItem>
              ))}
            </ul>
            <Quantity>{items.length} jogo(s) no carrinho</Quantity>
            <Prices>
              Total: {formatPrice(getTotalPrice(items))}{' '}
              <span>(2x de R$ 125,00)</span>
            </Prices>
            <Button
              onClick={goToCheckout}
              title="Clique aqui para continuar com a compra"
              type="button"
            >
              Finalizar Compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            Seu carrinho esta vazio, adicione um ou mais jogos para continuar.
          </p>
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
