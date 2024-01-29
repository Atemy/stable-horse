import { Header } from './Components/Header/Header';
import { Card } from './Components/Card/Card'

function App() {
  return (
    <div className="App">
      <Header title={'Конюшня'}/>
      <Card HorseName='Боджек'/>
      <Card />
    </div>
  );
}

export default App;
