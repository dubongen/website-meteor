import React from 'react';
import { Container, Grid, Dropdown, Menu, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    const color = { color: 'white' };
    const home = { color: '#8B0000' };
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Image height="76px" width="76px"
                   src='https://static.wixstatic.com/media/1f31ed_b69ec0ade2864eafa292ccfa853f86b6~mv2_d_1207_1207_s_2.png/v1/fill/w_152,h_152,al_c,q_80,usm_0.66_1.00_0.01/1f31ed_b69ec0ade2864eafa292ccfa853f86b6~mv2_d_1207_1207_s_2.webp'/>

            <Grid container centered>
              <Menu.Item style={home}>HOME</Menu.Item>
              <Menu.Item style={color}>ABOUT</Menu.Item>
              <Menu.Item style={color}>MEDIA</Menu.Item>

              <Menu.Item>
                <Dropdown style={color} text="DOJO">
                  <Dropdown.Menu>
                    <Dropdown.Item>INFO</Dropdown.Item>
                    <Dropdown.Item>SIGN UP</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>

              <Menu.Item>
                <Dropdown style={color} text="STORE">
                  <Dropdown.Menu>
                    <Dropdown.Item>KIN AESTHETIK</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>

              <Menu.Item style={color}>CLIENTS</Menu.Item>
              <Menu.Item style={color}>PARTNERS</Menu.Item>
              <Menu.Item style={color}>BOOKING</Menu.Item>
            </Grid>

          </Container>
        </Menu>
    );
  }
}
