import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, Cart } from './styles'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
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
      <Cart href="#">
        0 - Produto(s)
        <img src={cart} alt="Carrinho" />
      </Cart>
    </div>
  </HeaderBar>
)

export default Header
