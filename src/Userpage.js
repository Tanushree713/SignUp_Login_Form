import React, {useState} from "react";
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

function UserPage() {
    const [isSignUp, setIsSignUp] = useState(false)

    const toggleForm = () => {
    setIsSignUp((prevIsSignUp)=> !prevIsSignUp)
}  
   return (
    <>
       
       <div className="user-page"> 
       <div className="container">
       <img src="./logo.png.png" alt="logo" height={'60px'} width={'140px'}/><br/>
       {isSignUp ? <SignupForm/> : <LoginForm/>}
       <button onClick={toggleForm}>
        {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
       </button>
       </div>
       </div>
       </>
   )

}

export  default UserPage;