import * as React from 'react';
import * as ClientActions from '../../actions/client';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react'
import { LocationInput } from '../index';
import { FormComponent } from '../';


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
})(FormComponent);
