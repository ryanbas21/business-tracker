import * as React from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export namespace INavbar {
  export interface Props {
  }
  export interface State {
    activeItem: string;
  }
}

export default class Navbar extends React.Component<INavbar.Props, INavbar.State> {
  constructor() {
    super();
    this.state = {
      activeItem: ''
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu>
        <Menu.Item
        as={Link}
        to='/'
        name='Home'
        active={activeItem === 'Home'}
        onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/addclient'
          name='Add Client'
          active={activeItem === 'Add Client'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/viewclients'
          name='View All Clients'
          active={activeItem === 'View All Clients'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
