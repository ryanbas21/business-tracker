import * as React from 'react';
import * as Style from './style.css';
import { LocationInput }  from '../../components';
import { Field } from 'redux-form';
import { Button } from 'semantic-ui-react';

export namespace IAddClient {
  export interface Props {
  }
  export interface State {
  }
}

export function FormComponent (props) {
  console.log(props);
  const { handleSubmit } = props;
  return (
      <form onSubmit={handleSubmit} className={Style.clientFormContainer}>
        <div className={Style.clientInputs}>
         <label htmlFor="First Name">First Name</label>
         <Field
            className='add-client-input'
            name="firstName"
            component={LocationInput}
            type="text"
            />
        </div>
        <div className={Style.clientInputs}>
          <label htmlFor="Last Name">Last Name</label>
          <Field
            className='add-client-input'
            name="lastName"
            component={LocationInput}
            type="text"
          />
        </div>
        <div className={Style.clientInputs}>
          <label htmlFor="Email">Email</label>
          <Field
             className='add-client-input'
             name="email"
             component={LocationInput}
             type="email"
          />
        </div>
        <br />
        <Button onClick={handleSubmit} primary type="submit">
          Submit
        </Button>
    </form>
  );
}
