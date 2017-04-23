import * as React from 'react';
import * as Style from './style.css';
import { LocationInput }  from '../../components';
import { Menu, Item, Segment } from 'semantic-ui-react';

export function ViewClients (props) {
  const { client, index } = props
  console.log('working', client);
  const clientInformation = client.reduce((prev, clientObject) => {
    console.log('test', clientObject);
    prev.header = `${clientObject.firstName} ${clientObject.lastName}`
    prev.meta = `${clientObject.email ? clientObject.email : 'No Email provided'}`
    prev.image = '';
    prev.extra = '';
    return prev;
  }, {})
  return (
    <Item.Group items={[clientInformation]} />
  );
}
