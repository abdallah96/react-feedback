import { useState } from "react";
import './App.css';
import { IoStarSharp } from "react-icons/io5";
import Popup from "./popup";
import phone from "../src/phone.svg"



const colors = {
  green: "#5ec5b1",
  gray: "#d3d3d3"
};



function App() {

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const [currentValue1, setCurrentValue1] = useState(0);
  const [hoverValue1, setHoverValue1] = useState(undefined);
 
  const [currentValue2, setCurrentValue2] = useState(0);
  const [hoverValue2, setHoverValue2] = useState(undefined);

  const stars = Array(5).fill(0)

  const handleClick = (func, value) => {
    func(value)
  }

  const handleMouseOver = (func, newHoverValue) => {
    func(newHoverValue)
  };

  const handleMouseLeave = (func) => {
    func(undefined)
  }


  return (
    <div>
      <h1 style={styles.h1}>SolaVieve</h1>
      <hr style={styles.hrParent}/>

      <div style={styles.container}>
        <h2 style={styles.h2}> Leave a feedback! </h2>
        <p style={styles.p}>Rate your experience from 0 to 5 stars?</p>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <IoStarSharp
                key={index}
                size={50}
                onClick={() => handleClick(setCurrentValue, index + 1)}
                onMouseOver={() => handleMouseOver(setHoverValue, index + 1)}
                onMouseLeave={() => handleMouseLeave(setHoverValue)}
                color={(hoverValue || currentValue) > index ? colors.green : colors.gray}
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
              />
            )
          })}
        </div>
        <hr style={styles.hr}/>
        <p style={styles.p}>How satify are you with payment process?</p>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <IoStarSharp
                key={index}
                size={50}
                onClick={() => handleClick(setCurrentValue1, index + 1)}
                onMouseOver={() => handleMouseOver(setHoverValue1, index + 1)}
                onMouseLeave={() => handleMouseLeave(setHoverValue1)}
                color={(hoverValue1 || currentValue1) > index ? colors.green : colors.gray}
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
              />
            )
          })}
        </div>
        <hr style={styles.hr}/>
        <p style={styles.p}>How satisfied are you with our customer service?</p>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <IoStarSharp
                key={index}
                size={50}
                onClick={() => handleClick(setCurrentValue2, index + 1)}
                onMouseOver={() => handleMouseOver(setHoverValue2, index + 1)}
                onMouseLeave={() => handleMouseLeave(setHoverValue2)}
                color={(hoverValue2 || currentValue2) > index ? colors.green : colors.gray}
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
              />
            )
          })}
        </div>
        <hr style={styles.hr}/>
        <p style={styles.p}>Please keep a comment below</p>
        <textarea
          placeholder="Type your comment here"
          style={styles.textarea}
        />

        <div>
          <button style={styles.button} onClick={togglePopup}>
            Submit
          </button> 
          {isOpen && <Popup
      content={<>
      <div style={styles.container}>

        <img src={phone} width="68"  alt="Logo" />
        <div className= 'popupText' >
        <p style={styles.p2}>Thank you for your message!</p>
        <p style={styles.p2}>We will be in contact soon.</p>
        </div>
        
        <button style={styles.button} onClick={togglePopup}>
            Close
          </button> 
      </div>
      </>}
      
    />}
        </div>
        
        
      </div>
    </div>

    
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.25)",
    width: 600,
  },
  button: {
    textTransform: 'uppercase',
    borderRadius: 53,
    border:'none',
    color: '#FFFFFF',
    width: 123,
    height: 32,
    padding: 10,
    backgroundColor: "#11C4B0",
    fontWeight:600,
    fontSize: 10,
    fontFamily: 'Avenir'
  },
  p:{
    fontFamily: 'Avenir',
    fontWeight: 500,
    fontSize: 16,
    color: "#273040",
  },
  p2:{
    fontFamily: 'Avenir',
    fontWeight: 500,
    fontSize: 18,
    color: "#979797",
  },
  hr:{
    borderTop: '1px solid #DEDEDE',
    width: 500,
    marginTop: 27,
    marginBottom: 27,
  },
  hrParent: {
    borderTop: '1px solid #DEDEDE',
    width: '100%',
    marginTop: 27,
    marginBottom: 27,
  },
  h2:{
    color:'#273040',
    fontFamily: 'Avenir'
  },
  h1:{
    color:'#273040',
    fontFamily: 'Avenir',
    float: "left",
  }

};

export default App;