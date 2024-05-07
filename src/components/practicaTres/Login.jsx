import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    const {value} = event.target;
    setUsername(value);
  };

  const handleSubmit = () => {
    if (username.trim() === 'O' || username.toLowerCase().includes('o')) {
      alert('Usuario inválido para registrarse');
    }else{
      alert('¡Usuario registrado correctamente!');
    }
  };

  return (
    <div>
      <input 
        type="text"
        placeholder="Ingrese su usuario"
        style={{margin: "10px"}}
        value={username}
        onChange={handleChange}/>
      <button className = "btn btn-dark" onClick={handleSubmit}>Registrarse</button>
      <p>{username}</p>
    </div>
  );
};

export default Login;