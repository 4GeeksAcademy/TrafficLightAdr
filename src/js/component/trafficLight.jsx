import React, {useState, useEffect} from "react";

const TrafficLight = () => {
    
    const colors = ['red', 'yellow', 'green'];
    const [color, setColor] = useState(0); 
 
    // Pasar al siguiente índice
  useEffect(() => {
    const interval = setInterval(() => {
      setColor(prevColor => (prevColor + 1) % colors.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  
    // Estilos
    const trafficLightStyle = {
      position: 'absolute',
      top: '9.5%', 
      left: '50%',
      transform: 'translate(-63%, 0)', /* Ajusta el centro del semáforo */
      width: '30%',
      height: '40%',
      // backgroundColor: 'black',
      //borderRadius: '2vh',
    };
  
    const estiloLuz = (luzColor) => ({
      width: '8vh',
      height: '8vh',
      borderRadius: '50%',
      backgroundColor: colors[color] === luzColor ? luzColor : "transparent",
      margin: '3vh auto',
    });
  
    return (
      <div style={trafficLightStyle}>
        <div style={estiloLuz('red')}></div>
        <div style={estiloLuz('yellow')}></div>
        <div style={estiloLuz('green')}></div>
      </div>
    );
  };
  
  export default TrafficLight;