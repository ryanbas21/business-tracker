import * as React from 'react';
import * as Style from './style.css';
import { Link } from 'react-router-dom';
import { LocationInput }  from '../../components';
import { Item, Icon, Image, Grid, Button } from 'semantic-ui-react';

export namespace IViewClients {
  export interface Props {
    handleSubmit: () => any
    client: IClient.Info[];
    deleteClient: any;
    key: number;
  }
}
export namespace Item {
  export interface IClient {
    header: string;
    meta: string;
    image: string;
    extra: string;
  }
}
export function ViewClients (props) {
  const { client, index, deleteClient } = props

  const clientInformation : Item.IClient = client
  .reduce((prev, clientObject : IClient.Info) => {
    prev.header = `${clientObject.firstName} ${clientObject.lastName}`
    prev.meta = `${clientObject.email ? clientObject.email : `No Email provided`}`
    prev.image = '';
    prev.extra = `
    ${clientObject.location ? clientObject.location: `No Location Provided` }
    ${clientObject.phone ? clientObject.phone: `No Phone Number Provided`}`;
    return prev;
  }, {});

  return (
    <div className={Style.allClients}>
      <Button negative onClick={deleteClient}>Delete</Button>
        <Item.Group>
          <Image src={clientInformation.image} size='small' />
        </Item.Group>
        <Item.Group>
          <Icon circular name='user' />
            <Item.Header>{clientInformation.header}</Item.Header>
        </Item.Group>
          <Icon circular name='mail' /><Item.Meta>{clientInformation.meta}</Item.Meta>
        <Item.Extra>{clientInformation.extra}</Item.Extra>
    </div>
  );
}
