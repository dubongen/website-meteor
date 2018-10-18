import React from 'react';
import { Menu, Button, Icon, Input } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    const color = { color: 'white' };
    return (
        <Menu borderless className="footer-background">

          <Menu.Item style={color}><Input placeholder="Email Address"
                                          label={<Button color="black">Subscribe Now</Button>}
                                          labelPosition="right"/></Menu.Item>
          <Menu.Item fitted style={color} position="right"><Icon name="large instagram"/></Menu.Item>
          <Menu.Item fitted style={color}><Icon name="large youtube"/></Menu.Item>
          <Menu.Item fitted style={color}><Icon name="large twitter"/></Menu.Item>
          <Menu.Item fitted style={color}><Icon name="large facebook f"/></Menu.Item>

        </Menu>
    );
  }
}
