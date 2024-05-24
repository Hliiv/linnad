
import './App.css';
import Linn from './Linn';
import Linn2 from './linn2';
import Counter from './Counter';

const moreCities = [
  {
    nimi: 'Tallinn',
    riik: 'Eesti',
    markused: 'gfisufuf'

  },

  {
    nimi: 'Pärnu',
    riik: 'Eesti',
    markused: 'gfisufuf'

  },

  {
    nimi: 'Elva',
    riik: 'Eesti',
    markused: 'gfisufuf'

  }
]

function App() {
  const moreCitiesJsx = moreCities.map((city) => <Linn nimi={city.nimi} riik={city.riik} />)
  return (
    <div className="App">
      <h1> Minu lemmiklinnad</h1>
      <Counter />
      <Linn nimi="Pariis" riik="Prantsusmaa" markused="adshhjjakkka" />
      <Linn nimi="Leon" riik="Prantsusmaa" markused="adshhjjakkka" />
      <Linn nimi="Toulouse" riik="Prantsusmaa" markused="adshhjjakkka" />
      <Linn nimi="Berliin" riik="Saksamaa" markused="adshhjjakkka" />
      <Linn nimi="London" riik="Inglismaa" markused="adshhjjakkka" />
      <Linn nimi="Brighton" riik="Inglismaa" markused="adshhjjakkka" />
      {moreCitiesJsx}
     
      </div>
  );
}

export default App;
