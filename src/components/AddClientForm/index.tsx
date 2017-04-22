import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import * as Style from './style.css';
import * as ClientActions from '../../actions/client';
import { connect } from 'react-redux';

export namespace AddClient {
  export interface Props {
    addClient: (values) => void;
  }
  export interface State {

  }
}

export const AddClientForm = reduxForm({
  form: 'AddClientForm'
})(function AddClientForm ({ addClient } : AddClient.Props) {
      return (
        <form onSubmit={addClient}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  });

