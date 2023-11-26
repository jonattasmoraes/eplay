import { HeaderBar, Links, LinkItem, Cart } from './styles'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPLAY" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categorias</a>
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
