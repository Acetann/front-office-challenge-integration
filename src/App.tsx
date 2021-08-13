import CarouselSlide from './components/carouselSlide'
import FirstTitle from './components/title'
import RankingMedals from './components/medals'

export const Title = {
  title: 'JO 2020',
  event: 'Prochaines Epreuves',
  chooseEvent: 'Choisir une épreuve',
  medals: 'Médailles',
  empty: 'Aucune épreuve de prévu',
}

const bodyStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#DCDCDC',
  padding: 32,
}

function App() {
  return (
    <>
      <FirstTitle />
      <div style={bodyStyle}>
        <CarouselSlide />
        <RankingMedals />
      </div>
    </>
  )
}

export default App
