import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login data to the backend
    try {
      const response = await fetch('http://your-backend-url/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // Process successful response from the backend
        const data = await response.json();
        console.log('Authenticated user:', data);
      } else {
        // Process error response from the backend
        const errorData = await response.json();
        console.log('Login error:', errorData.message);
      }
    } catch (error) {
      console.log('Error sending the request:', error);
    }
  };

  // Check if the user is already logged in
  // and redirect to the appropriate page
  const checkLoggedIn = () => {
    // Implement logic to check user's login status in the backend
    const isLoggedIn = true; // Replace with actual backend check

    if (isLoggedIn) {
      // User is logged in, redirect to the current page
      navigate('/')
    }
  };

  // Check if the user is already logged in on component mount
  useEffect(() => {
    checkLoggedIn();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
