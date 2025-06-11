import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Import the AuthContext

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth(); // Use the login function from AuthContext
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError('');
    setIsLoading(true);

    try {
      const success = await login(username, password); // Call the login function from AuthContext
      if (success) {
        navigate('/dashboard'); // Redirect to the dashboard on successful login
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  // Inline styles for the futuristic glowing effect
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as React.CSSProperties['flexDirection'],
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(120deg, #2980b9, #8e44ad)',
      color: '#fff',
      fontFamily: "'Poppins', sans-serif",
    } as React.CSSProperties,
    title: {
      fontSize: '2.5rem',
      marginBottom: '1.5rem',
      textShadow: '0 0 10px #00ffcc, 0 0 20px #00ffcc',
    } as React.CSSProperties,
    inputContainer: {
      position: 'relative',
      marginBottom: '1.5rem',
    } as React.CSSProperties,
    input: {
      width: '300px',
      padding: '10px 15px',
      border: '2px solid #00ffcc',
      borderRadius: '5px',
      background: 'transparent',
      color: '#fff',
      fontSize: '1rem',
      outline: 'none',
      transition: '0.3s',
    } as React.CSSProperties,
    label: {
      position: 'absolute',
      top: '50%',
      left: '15px',
      transform: 'translateY(-50%)',
      color: '#00ffcc',
      pointerEvents: 'none',
      transition: '0.3s',
    } as React.CSSProperties,
    labelActive: {
      top: '-10px',
      left: '10px',
      fontSize: '0.8rem',
      color: '#00ffcc',
    } as React.CSSProperties,
    button: {
      width: '300px',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px',
      background: 'linear-gradient(90deg, #00ffcc, #0066ff)',
      color: '#fff',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: '0.3s',
    } as React.CSSProperties,
    buttonHover: {
      boxShadow: '0 0 10px #00ffcc, 0 0 40px #00ffcc',
    } as React.CSSProperties,
    error: {
      color: '#ff4d4d',
      marginBottom: '1rem',
    } as React.CSSProperties,
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login</h1>
      {error && <p style={styles.error}>{error}</p>}
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <label
          style={{
            ...styles.label,
            ...(username ? styles.labelActive : {}),
          }}
        >
          Username
        </label>
      </div>
      <div style={styles.inputContainer}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <label
          style={{
            ...styles.label,
            ...(password ? styles.labelActive : {}),
          }}
        >
          Password
        </label>
      </div>
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        style={styles.button}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = styles.buttonHover.boxShadow || '')}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
};

export default LoginComponent;