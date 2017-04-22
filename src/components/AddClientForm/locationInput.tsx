import * as React from 'react';
import { Input, Message } from 'semantic-ui-react';
import * as Style from './style.css';

export default ({ input, meta: { touched, error }, ...custom }) => {
  const hasError = touched &&  error !== undefined;
  console.log(Style, 'style');
  console.log(hasError, 'hasError');
  return (
    <div>
      {hasError && <Message
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
}


