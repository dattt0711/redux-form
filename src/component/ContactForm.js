import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '@mui/material/TextField';
let ContactForm = props => {
      const renderField = ({
        input,
        label,
        type,
        meta: { touched, error, invalid}
      }) => (
        <div>
          <label>{label}</label>
          <div>
            <TextField {...input} 
            placeholder={label} 
            type={type} 
            error = {touched && invalid}
            helperText={touched && error}
            />
          </div>
        </div>
      )
    const {handleSubmit, reset} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component={renderField} type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component={renderField} type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component={renderField} type="email" />
      </div>
      <button type="submit" onClick={reset}>Submit</button>
    </form>
  )
}
const validate = values => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'Required'
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less'
    }
    if (!values.lastName) {
      errors.lastName = 'Required'
    } else if (values.lastName.length > 15) {
      errors.lastName = 'Must be 15 characters or less'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    return errors
}
ContactForm = reduxForm({
  form: 'contact',
  validate
})(ContactForm)

export default ContactForm