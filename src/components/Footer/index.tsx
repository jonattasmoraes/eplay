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
            <LinkItem to="/categories#rpg">RPG</LinkItem>
          </li>
          <li>
            <LinkItem to="/categories#action">Ação</LinkItem>
          </li>
          <li>
            <LinkItem to="/categories#sports">Esportes</LinkItem>
          </li>
          <li>
            <LinkItem to="/categories#simulation">Simulação</LinkItem>
          </li>
          <li>
            <LinkItem to="/categories#fight">Luta</LinkItem>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <LinkItem to="/#on-sale">Promoções</LinkItem>
          </li>
          <li>
            <LinkItem to="/#coming-soon">Em breve</LinkItem>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy;E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
