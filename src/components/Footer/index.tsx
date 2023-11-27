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
            <LinkItem>RPG</LinkItem>
          </li>
          <li>
            <LinkItem>Ação</LinkItem>
          </li>
          <li>
            <LinkItem>Aventura</LinkItem>
          </li>
          <li>
            <LinkItem>Esportes</LinkItem>
          </li>
          <li>
            <LinkItem>Simulação</LinkItem>
          </li>
          <li>
            <LinkItem>Estratégia</LinkItem>
          </li>
          <li>
            <LinkItem>FPS</LinkItem>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <LinkItem>Novidades</LinkItem>
          </li>
          <li>
            <LinkItem>Promoções</LinkItem>
          </li>
          <li>
            <LinkItem>Em breve</LinkItem>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy;E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
