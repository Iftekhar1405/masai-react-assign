import { useState } from 'react';
import './App.css';

function App() {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(otp.join('')); 
  };

  const handleChange = (event, index) => {
    const value = event.target.value;
    let otpArray = [...otp];
    otpArray[index] = value;
    setOtp(otpArray);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(event) => handleChange(event, index)}
          />
        ))}
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
