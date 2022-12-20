import {useState} from 'react'
function Login() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  


  return (
    <div>
    Hello from login page
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} />
        <button onClick={e => {}}>Log in</button>
      </form>
    </div>
  )
}

export default Login