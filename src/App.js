import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Analyses from './components/Analyses';
import Assurer from './components/Assurer';
import Contact from './components/Contact';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Desc from './components/desc';
import ImageSlider from './components/imageslider';
import Approche from './components/approche';
import Bar from './components/bar';
function App() {
  const slides = [
    {url : 'http://localhost:3000/image1.jpg' , title: '1'},
    {url : 'http://localhost:3000/image2.jpg' , title: '2'},
    {url : 'http://localhost:3000/image3.jpg' , title: '3'},
    {url : 'http://localhost:3000/image4.jpeg' , title: '4'},
    {url : 'http://localhost:3000/image5.avif' , title: '5'},
  ];
 
  return (
    <>
        <Navbar/>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "0 auto" }}>
        <Header/>
        <Desc/>
        <ImageSlider slides={slides}/>
        <Analyses/>
        <Approche/>     
        <Assurer/>
        <Bar/> 
        <Contact/> 
        <Footer/> 
        </div>
         
    </>
    
    
    
  );
}

export default App;
