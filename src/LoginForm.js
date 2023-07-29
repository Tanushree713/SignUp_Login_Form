import React, {useState} from "react";

function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()

        const validUsername = 'Tanugpt21';
        const validPassword = 'Bhopal@23';

        const inputUsername = username.toLowerCase();
        const inputPassword = password.toLowerCase();
        const validUsernameLower = validUsername.toLowerCase();
        const validPasswordLower = validPassword.toLowerCase();


        if (inputUsername === validUsernameLower && inputPassword === validPasswordLower) {
            console.log('Login Successful!')

            setUsername('');
            setPassword('');
        } else{
            console.log('Inavlid username or password')
        }
    }
    return (
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username"/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password"/>

            <button type="submit">Login</button>

        </form>
    )
}

export default LoginForm;


     