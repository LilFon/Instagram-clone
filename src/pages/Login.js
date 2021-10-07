import React, { Fragment, useContext } from 'react';
import { Context } from '../Context';
import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';
import { NotRegisteredUser } from './NotRegisteredUser';   // retornarlo en el useForm y crear el condicional



export const Login = () => {
    const { activateAuth } = useContext(Context) 


    return <Fragment>

    <LoginMutation>
        
      {
        (login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
            })
          }

          const errorMsg = error && 'Incorrect email or password'

          return <UserForm disabled={loading} error={errorMsg} title='Login' onSubmit={onSubmit} login={true} />
        }
      }
    </LoginMutation>

    




    </Fragment>

}