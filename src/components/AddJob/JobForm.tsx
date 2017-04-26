import * as React from 'react';
import * as Style from './style.css';
import { LocationInput }  from '../../components';
import { Field } from 'redux-form';
import { Button } from 'semantic-ui-react';
import { DropdownList, SelectList } from 'react-widgets'

export namespace IAddJob {
  export interface Props {
    handleSubmit: () => any;
  }
}

export function JobForm (props) {
  const { handleSubmit, pristine, reset, submitting, onBlur, clientList } = props;
  return (
    <form onSubmit={handleSubmit} className={Style.clientFormContainer}>
      <div className={Style.clientInputs}>
        <label htmlFor="First Name">Job Title</label>
        <Field
          className={Style.jobsInputs}
          name="firstName"
          component={LocationInput}
          type="text"
        />
      </div>
      <div>
      <label>Client</label>
      <Field
        name="client"
        component={DropdownList}
        data={clientList}
        onBlur={() => onBlur()}
        valueField="value"
        textField="Client"/>
    </div>
      <div className={Style.clientInputs}>
        <label htmlFor="Last Name">Locatoion</label>
        <Field
          className={Style.jobsInputs}
          name="lastName"
          component={LocationInput}
          type="text"
        />
      </div>
      <div className={Style.clientInputs}>
        <label htmlFor="Email">Paid</label>
        <Field
          className={Style.jobsInputs}
          name="email"
          component={LocationInput}
          type="email"
        />
      </div>
      <div
        className={Style.jobsInputs}>
        <label htmlFor="Location">Location</label>
        <Field
          className={Style.jobsInputs}
          name="location"
          component={LocationInput}
          type="text"
        />
      </div>
      <div
        className={Style.jobsInputs}>
        <label htmlFor="Phone">Phone</label>
        <Field
          className={Style.jobsInputs}
          name="Phone"
          component={LocationInput}
          type="text"
        />
      </div>
      <br />
      <Button disabled={pristine || submitting} onClick={handleSubmit} primary type="submit">
        Submit
      </Button>
    </form>
  );
}
