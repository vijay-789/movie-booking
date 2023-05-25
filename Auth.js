import React from 'react'
import AuthForm from './AuthForm'
import { useDispatch } from 'react-redux';
import { sendUserAuthRequest } from '../../Api-helpers/api-helper';
import { userActions } from '../../store';

const Auth = () => {
    const dispatch = useDispatch();
    const onReceived = (data)=> {
        console.log(data);
        dispatch(userActions.login())
        localStorage.setItem('userID',data.id)
    }
    const getData = (data) =>{
       console.log("Calling to",data);
       sendUserAuthRequest(data.inputs,data.signup)
       .then(onReceived)
       .catch((err) => {console.log(err)})
    }
  return (
    <div>
      <AuthForm onSubmit = {getData} isAdmin={false}/>
    </div>
  )
}
export default Auth
