import './App.css';
import CarouselImages from './components/carousel/CarouselImages';
import WhoWeAre from './components/whoWeAre/WhoWeAre';

function App() {
  return (
    <div className="App">
      <CarouselImages />
      <div className="whoWeAre">
        <WhoWeAre />
      </div>
    </div>
  );
}

export default App;
