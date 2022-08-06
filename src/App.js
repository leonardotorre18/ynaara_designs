import './App.css';
import Navbar from './components/layout/Navbar';
import Jumbotron from './components/layout/Jumbotron';
import Grid from './components/containers/Grid';
import CardProduct from './components/pure/CardProduct';
import img from './assets/logo.png'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Jumbotron />
        <Grid>
          {[1,1,1,1].map((e,i) => {
            return <CardProduct key={i} img={img} title='Blusa Estampada' price={4} />
          })}
        </Grid> 
    </div>
  );
}

export default App;
