//import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

const Product = () => {
  //const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o game" backgrond="black">
        <p>
          Hogwarts Legacy é um RPG de ação, de mundo aberto e imersivo que se
          passa no mundo apresentado inicialmente nos livros de “Harry Potter”.
          Agora você pode comandar a ação e ser o centro da sua própria aventura
          no mundo bruxo. Embarque numa jornada por locais conhecidos e
          desconhecidos enquanto explora e descobre animais fantásticos,
          personaliza seu personagem e faz poções, feitiços, melhora seus
          talentos e se torna o bruxo que quiser ser. Experimente Hogwarts nos
          anos 1800. Seu personagem é um aluno que é a chave para um antigo
          segredo que ameaça destruir o mundo bruxo. Você recebeu sua carta de
          admissão da Escola de Magia e Bruxaria de Hogwarts e logo descobriu
          que não é qualquer estudante: você possui uma habilidade incomum de
          perceber e aprender Magia Antiga. Só você pode decidir se vai proteger
          este segredo pelo bem de todos, ou sucumbir à tentação de buscar por
          mais magia sombria. Descubra como é viver em Hogwarts enquanto faz
          aliados, batalha contra bruxos das trevas, e finalmente decide o
          futuro do mundo bruxo. Seu legado é você quem faz. Viva o Inesperado.
        </p>
      </Section>
      <Section title="Mais detalhes" backgrond="gray">
        <p>
          Edição Exclusiva do Brasil: <br />
          Inclui mapa exclusivo de Hogwarts. Inclui DLC exclusiva Playstation
          com Masmorra adicional, Conjunto de cosméticos da Dona e Loja de
          Hogsmeade. <br />
          A edição deluxe inclui: <br />
          - Pacote arte das trevas <br />
          - Testrálio de Montaria <br />
          - Pacote de roupas arte das trevas <br />- Arena de batalha da arte
          das trevas
        </p>
      </Section>
      <Gallery />
    </>
  )
}

export default Product
