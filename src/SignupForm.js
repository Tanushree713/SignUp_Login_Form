import React, {useState} from "react";

function SignupForm () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSignUp = (e) => {
        e.preventDefault()

        if(username && password && name && email) {
            console.log('Signing Up...')
            console.log('Username:', username);
            console.log('Password:', password);
            console.log('Name:', name);
            console.log('Email:', email)

            setUsername('');
            setPassword('');
            setName('');
            setEmail('');
       } else {
          console.log('Please fill in all required fields')
       }
    }
    return (
        <form onSubmit={handleSignUp}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}    autoComplete="username"/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password"/>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name"/>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email"/>

            <button type="submit">Sign Up</button>



        </form>
    ) 


}

export default SignupForm