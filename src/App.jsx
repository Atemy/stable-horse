import { Header } from './Components/Header/Header';
import { Card } from './Components/Card/Card';
import { WindowsHorse } from './Components/WindowsHorse/WindowsHorse';
import {mockData1,mockData} from './shared/constants/index';

function App() {
  return (
    <div className="App">
      <Header title={'Конюшня'}/>
      <Card HorseName='Боджек'/>
      <Card />
      <WindowsHorse isActive={true} data={mockData}/>
      <WindowsHorse data/>
    
    </div>
  );
}

export default App;
