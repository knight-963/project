import './App.css'
import Navbar from './Components/Navbar';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';

function App() {

 return (
    <>

    <Navbar />
    <div className='pt-[500px]'>
    <Section1 />
    </div>
    <Section2 />
    <Section3 />
    <Section4 />

    </>
  )
}

export default App;