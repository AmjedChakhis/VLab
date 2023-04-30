import REACT ,{useState} from 'react';

function ImageSlider ({slides}) {
    const [currentIndex, setCurrentIndex]= useState(0);
    const sliderStyles = {
      width: "800px",
      height: "500px",
      marginLeft:'2rem',
      overflow: "hidden",
      boxSizing: "border-box",
      borderRadius: "10px"
    };
    
    

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(${slides[currentIndex].url})`,
  marginTop : "20px",
  marginBottom:'200px',
};

const leftArrowStyles = {
  position: "absolute",
  top: "180%",
  transform: "translate(0, -50%)",
  left: "0",
  fontSize: "45px",
  color: "black",
  zIndex: 1,
  cursor: "pointer",
};

const rightArrowStyles = {
  position: "absolute",
  top: "180%",
  transform: "translate(0, -50%)",
  right: "0",
  fontSize: "45px",
  color: "black",
  zIndex: 1,
  cursor: "pointer",
};

      const goToPrevious = () =>{
        const newIndex = currentIndex === 0 ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);

      }
      const goToNext = () => {
        const newIndex = currentIndex === slides.length -1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);

      }
      const dotContainerSlides = {
        display: "flex",
        justifyContent: "center",
      };
      const dotStyle = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "20px",
      };
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>❰</div>
            <div style={rightArrowStyles} onClick={goToNext}>❱</div>
            <div style={slideStyles}></div>
            
               
            
    </div>
  );
};


export default ImageSlider;