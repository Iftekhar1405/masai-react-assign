import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY,setMouseY] = useState(0) 

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMouseX(event.screenX);
            setMouseY(event.screenY) 

        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); 

    return (
        <>
            {mouseX}, {mouseY}
        </>
    );
}

export default App;
