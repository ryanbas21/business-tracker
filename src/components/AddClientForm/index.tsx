import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import * as Style from './style.css';
import * as ClientActions from '../../actions/client';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'
import locationInput from './locationInput';

export namespace IAddClient {
  export interface Props {
  }
  export interface State {
  }
}
export namespace IErrors {
  export interface validateForm {
      firstName?: string;
      lastName?: string;
  }
}
const validate = ({ firstName, lastName }) => {
    const errors : IErrors.validateForm = {};
    if (!firstName ) errors.firstName = 'First Name Required';
    if (!lastName) errors.lastName = 'Last Name Required';
    return errors;
  }


export const AddClientForm = reduxForm({
  form: 'AddClientForm',
  validate
})(function AddClientForm (props) {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit( () => {
          console.log('submitted!', props);
        })}>
          <label htmlFor="First Name">First Name</label>
          <Field className='add-client-input' name="firstName" component={locationInput} type="text"/><br />
          <label htmlFor="Last Name">Last Name</label>
          <Field className='add-client-input' name="lastName" component={locationInput} type="text"/><br />
          <label htmlFor="Email">Email</label>
          <Field className='add-client-input' name="email" component={locationInput} type="email"/><br />
          <br />
          <Button primary type="submit" onClick={handleSubmit(() => console.log('clicked button'))}>
            Submit
          </Button>
      </form>
    );
  });

