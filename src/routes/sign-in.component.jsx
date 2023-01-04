import { async } from '@firebase/util'
import React from 'react'
import SignUp from '../Components/SignUp.components'
import  {signInWithGooglePopup , createUserDocFromAuth} from '../utils/firebase/firebase.utils'
const SignIn= () => {

  const logGoogleUser = async()=>{
      const {user} = await signInWithGooglePopup();
      const userDocRef  = await createUserDocFromAuth(user);
  }

  return (
    <div>
      <h1>this is sign in</h1>
      <button onClick={logGoogleUser} >Sign in with google</button>
      <SignUp/>
    </div>
  )
}

export default SignIn
