import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import * as Style from './style.css';
import * as ClientActions from '../../actions/client';
import { connect } from 'react-redux';

export namespace AddClient {
  export interface Props {

  }

  export interface State {

  }
}
export default function AddClientForm ({ addClient }) {
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
  }
//
// export default reduxForm({
//   form: 'AddClientForm'
// })(AddClientForm);



