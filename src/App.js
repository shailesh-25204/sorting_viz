import './App.css';
import Navbar from './Components/navbar/Navbar';
import {ResetArray} from './Components/navbar/array/Array';
import Header from './Components/Header/Header';

function App() {
  ResetArray();
  return (
    <>
    <Header/>
    <Navbar/>
    </>
  );
}

export default App;
