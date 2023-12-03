import Section from '../../components/Section'
import zeldaImg from '../../assets/images/zelda.png'
import starwarsImg from '../../assets/images/star_wars.png'
import residentImg from '../../assets/images/resident.png'
import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import { Action, Item, Items, Modal, ModalContent } from './styles'
import close from '../../assets/images/fechar.png'
import spiderImg from '../../assets/images/banner-homem-aranha.png'
import { useState } from 'react'

interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zeldaImg
  },
  {
    type: 'image',
    url: starwarsImg
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=eNV4GUxh3arIpq5i'
  }
]

type Props = {
  defaultCover: string
  name: string
}

interface ModalState extends GalleryItem {
  type: 'image' | 'video'
  url: string
  isVisible: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    type: 'image',
    url: '',
    isVisible: false
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') {
      return item.url
    }
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') {
      return zoom
    }
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" backgrond="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Media ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique paqui para maximizar a media"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={close}
              alt="Icone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
