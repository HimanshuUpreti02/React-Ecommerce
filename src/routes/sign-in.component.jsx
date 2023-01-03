import { async } from '@firebase/util'
import React from 'react'
import  {signInWithGooglePopup} from '../utils/firebase/firebase.utils'
const SignIn= () => {

    const logGoogleUser = async()=>{
        const response = await signInWithGooglePopup();
        console.log(response);
    }
  return (
    <div>
      <h1>this is sign in</h1>
      <button onClick={logGoogleUser} >Sign in with google</button>
    </div>
  )
}

export default SignIn