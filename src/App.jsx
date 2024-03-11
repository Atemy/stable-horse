import { Header } from './Components/Header/Header';
import { Card } from './Components/Card/Card';
import { WindowsHorse } from './Components/WindowsHorse/WindowsHorse';
import {mockData1,mockData} from './shared/constants/index';
import { LayoutCardHorse } from './Components/LayoutCardHorse/LayoutCardHorse';

function App() {
  return (
    <div className="App">
      <Header title={'Конюшня'}/>
      <Card HorseName='Боджек'/>
      <Card />
      <WindowsHorse isActive  data={mockData[0]}/>

      <LayoutCardHorse data={mockData}/>
    
    </div>
  );
}

export default App;
