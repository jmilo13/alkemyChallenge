import React, {useContext, useState} from 'react';
import { Formik } from 'formik';
import axios from 'axios'
import UserContext from '@context/UserContext'
import {Alert, Button , Form} from 'react-bootstrap'
 
export default function Login () {
  const context = useContext(UserContext)
  const [logError, setLogError] = useState(false)
  const handleSubmit = async (values, { setSubmitting }) => {
    try{
      const response = await axios.post('http://challenge-react.alkemy.org/', values)
      localStorage.setItem('token', response.data.token);
      context.setToken(response.data.token)
      localStorage.setItem('team', false);
    }catch(error){
      setLogError(true)

    }
    setSubmitting(false)
  }
  const validateEmail = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Este campo es requerido';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Introduce un email válido';
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
        validate={validateEmail}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="ejemplo@correo.com"
            />
            {errors.email && touched.email && errors.email}
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Ingresa la contraseña"
            />
            {errors.password && touched.password && errors.password}
            <Button variant="primary" type="submit" disabled={isSubmitting} className="mt-3">
              Iniciar Sesión
            </Button>
          </form>
        )}
      </Formik>
      <style jsx>
        {`
        `}
      </style>
    </div>
  )
}