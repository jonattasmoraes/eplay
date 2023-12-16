import {
  Container,
  FooterSection,
  LinkItem,
  Links,
  SectionTitle
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <LinkItem
              title="Clique aqui para acessar a página os jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </LinkItem>
          </li>
          <li>
            <LinkItem
              title="Clique aqui para acessar a página os jogos de Ação"
              to="/categories#action"
            >
              Ação
            </LinkItem>
          </li>
          <li>
            <LinkItem
              title="Clique aqui para acessar a página os jogos de Esportes"
              to="/categories#sports"
            >
              Esportes
            </LinkItem>
          </li>
          <li>
            <LinkItem
              title="Clique aqui para acessar a página os jogos de Simulação"
              to="/categories#simulation"
            >
              Simulação
            </LinkItem>
          </li>
          <li>
            <LinkItem
              title="Clique aqui para acessar a página os jogos de Luta"
              to="/categories#fight"
            >
              Luta
            </LinkItem>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <LinkItem
              title="Clique aqui para acessar a página de Promoções"
              to="/#on-sale"
            >
              Promoções
            </LinkItem>
          </li>
          <li>
            <LinkItem
              title="Clique aqui para ver os lancamentos futuros"
              to="/#coming-soon"
            >
              Em breve
            </LinkItem>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy;E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
