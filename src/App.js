import './App.css';
import Navbar from './Components/navbar/Navbar';
import Array from './Components/navbar/array/Array';
import Board from './Components/navbar/board/board';

function App() {
  return (
    <>
    <Navbar/>
    <div id='main-display'> 
    <Array/>
    <Board/>
    </div>
    </>
  );
}

export default App;
