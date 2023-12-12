import { Link } from 'react-router-dom'
import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

export const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const [isOpen, setIsOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link to="/categories">Categorias</Link>
              </LinkItem>
              <LinkItem>
                <a href="#">Novidades</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Promoçoes</a>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <div>
          <CartButton onClick={openCart}>
            {items.length}
            <span> - Produto(s)</span>
            <img src={cart} alt="Carrinho" />
          </CartButton>
        </div>
      </HeaderRow>
      <NavMobile className={isOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoçoes</a>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
