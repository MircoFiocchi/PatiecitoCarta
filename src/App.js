import './App.css';
import CarouselImages from './components/carousel/CarouselImages';
import CardProducts from './components/cardProducts/CardProducts';
import WhoWeAre from './components/whoWeAre/WhoWeAre';
import Typography from '@mui/material/Typography';
import dataTragos from './dataTragos/data/data';
import dataComida from './dataComida/data/data';

function App() {
  return (
    <div className="App">
      <CarouselImages />
      <div className="whoWeAre">
        <WhoWeAre />
      </div>
      <div className="cardProducts">
        <div className="cardProductsTypography">
          <Typography component="div" variant="h5">
            Tragos
          </Typography>
        </div>
        {dataTragos.map((item) => (
          <CardProducts title={item.title} subtitle={item.subtitle} description={item.description} image={item.image} />
        ))}
      </div>
      <div className="cardProducts">
        <div className="cardProductsTypography">
          <Typography component="div" variant="h5">
            Comida
          </Typography>
        </div>
        {dataComida.map((item) => (
          <CardProducts title={item.title} subtitle={item.subtitle} description={item.description} image={item.image} />
        ))}
      </div>
    </div>
  );
}

export default App;
