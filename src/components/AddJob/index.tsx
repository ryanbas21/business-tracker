import * as React from 'react';
import * as JobActions from '../../actions/JOb';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react'
import { LocationInput } from '../index';
import { JobForm } from './JobForm';


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

export const AddJobForm = reduxForm({
  form: 'AddJobForm',
  validate,
})(JobForm);
