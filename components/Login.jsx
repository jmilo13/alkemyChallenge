import React, {useContext, useState} from 'react';
import { Formik, ErrorMessage, Field  } from 'formik';
import {Alert, Button, Form} from 'react-bootstrap'
import UserContext from '@context/UserContext'
import TeamContext from '@context/TeamContext';

export default function Login (props) {
  console.log(props)
  const context = useContext(UserContext)
  const teamContext = useContext(TeamContext)
  const [logError, setLogError] = useState(false)

  const handleSubmit = (values, { setSubmitting }) => {
    const email = process.env.NEXT_PUBLIC_EMAIL
    console.log(email)
    const password = process.env.NEXT_PUBLIC_PASSWORD
    console.log(password)
    debugger
    const isValid = email === 'challenge@alkemy.org' && password === 'react'
    if(isValid){
      const token = 'shs456hjk1223NN7890'
      localStorage.setItem('token', token);
      context.setToken(token)
      localStorage.setItem('team', false);
    }
    else{
      setLogError(true)
    }
    setSubmitting(false)
    teamContext.setTeam(false)
  }
  
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Este campo es requerido'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Introduce un email válido'
    }
    if (!values.password) {
      errors.password = 'Este campo es requerido'
    } else if(values.password.length < 5){
      errors.password = 'La contraseña debe tener mínimo 5 caracteres'
    }
    return errors;
  }

  return (
    <div>
      {logError&&
        <Alert variant="danger" onClose={() => setLogError(false)} dismissible>
          <Alert.Heading>Datos incorrectos</Alert.Heading>
          <p>
            Verifica email y contraseña e intenta nuevamente.
          </p>
        </Alert>
      } 
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Form.Label>Email</Form.Label>
            <Field
              className="form-control" 
              type="email" 
              name="email" 
              value={values.email} 
              placeholder="ejemplo@correo.com" 
            />
            <ErrorMessage name="email">
              {message => <p className="error">{message}</p>}
            </ErrorMessage>
            <Form.Label>Contraseña</Form.Label>
            <Field
              className="form-control" 
              type="password"
              name="password"
              value={values.password}
              placeholder="Ingresa la contraseña"
            />
            <ErrorMessage name="password">
              {message => <p className="error">{message}</p>}
            </ErrorMessage>
            <Button variant="primary" type="submit" disabled={isSubmitting || errors.password} className="mt-3">
              Iniciar Sesión
            </Button>
          </form>
        )}
      </Formik>
      <style jsx>
        {`
        .error{
          color: red;
          width: 100%;
          font-weight: 700;
        }
        `}
      </style>
    </div>
  )
}

export async function getServerSideProps () {
  const ema = process.env.EMAIL
  console.log(process.env.EMAIL)
  console.log('derver')
  return {
    props: {
    una: 'una'
  }
}
}