import * as React from 'react';
import { Input, Message } from 'semantic-ui-react';
import * as Style from './style.css';

export const LocationInput = ({ input, meta: { touched, error }, ...custom }) => {
  const hasError = touched &&  error !== undefined;
  return (
    <div>
      {hasError &&
      <Message
          error
          header="Error"
          className={hasError ? Style.error : ''}
          content={`${error}`}

          {...input}
      />}
      <Input error={hasError}
             fluid
             className={hasError ? Style.error : ''}
             {...input}
             {...custom}
        />
    </div>
  )
};
