import React, { Fragment } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Error, Form, Input, Title, DIV, Img } from './styles';
import { SubmitButton } from '../SubmitButton';
import { Link  } from '@reach/router';


const DEFAULT_IMAGE1= "https://www.pngkey.com/png/full/19-196696_picture-freeuse-library-arcade-clipart-game-room-joystick.png";
const DEFAULT_IMAGE2= "https://cdn-icons-png.flaticon.com/512/38/38453.png";
const DEFAULT_IMAGE3= "https://cdn-icons-png.flaticon.com/512/37/37526.png";

export const UserForm = ({ error, disabled, onSubmit, title, login }) => {
  const email = useInputValue('');
  const password = useInputValue('');
  
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <DIV>
      <Img src={DEFAULT_IMAGE1}/>
      <Img src={DEFAULT_IMAGE3}/>
      <Img src={DEFAULT_IMAGE2}/>
      
      <Form disabled={disabled} onSubmit={handleSubmit}>
      
      
      <Title>{title}</Title>
        
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>

      
      
       
      {error && <Error>{error}</Error> }
      {login && <div>you dont have an account?  <Link to='/register'>register</Link></div>   }
      
      </DIV>
  )
}
