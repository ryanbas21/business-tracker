import * as React from 'react';
import * as Style from './style.css';
import { LocationInput }  from '../../components';
import { Field } from 'redux-form';
import { Button } from 'semantic-ui-react';

export namespace IAddClient {
  export interface Props {
    handleSubmit: () => any;
  }
}

export function FormComponent (props) {
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
        <div className={Style.clientInputs}>
          <label htmlFor="Location">Location</label>
          <Field
             className='add-client-input'
             name="location"
             component={LocationInput}
             type="text"
          />
        </div>
        <div className={Style.clientInputs}>
          <label htmlFor="Phone">Phone</label>
          <Field
             className='add-client-input'
             name="Phone"
             component={LocationInput}
             type="text"
          />
        </div>
        <br />
        <Button onClick={handleSubmit} primary type="submit">
          Submit
        </Button>
    </form>
  );
}
