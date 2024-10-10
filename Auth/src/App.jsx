import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState([])
  const handleAuthentication = () => {
    if (isRegister) {
      const user = users.find((u) => u.email === email && u.password === password)
      if (user) {
        setIsLogin(true)
      } else {
        alert('login failed, Please check your credentials')
      }

    } else {
      const newUser = { email, password }
      setUsers([...users, newUser])
      localStorage.setItem('users', JSON.stringify([...users, newUser]))
      setIsLogin(true)
    }
  }

  const handleLogout = () => {
    setIsLogin(false)
    setEmail('')
    setPassword('')
  }

  return (
    <>
      {isLogin ? (
        <div>
          <h2>Welcome {email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>{isRegister ? 'Login' : 'Register'}</h2>
          <form action=''>
            <input
              type='email'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuthentication}>{isRegister ? 'Login' : 'Register'}</button>
          </form>
          <p>
            {isRegister
              ? "Don't have an account. Register now"
              : 'Already have an account? Log in'}
          </p>
          <button onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? 'Register' : 'Login'}
          </button>
        </div>
      )}
    </>
  );
}

export default App;
