import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import lottery from "./lottery";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';



export default class Lister extends Component {

  render() {
    const iconButtonElement = (
      <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
      >
        <MoreVertIcon color={grey400} />
      </IconButton>
    );

    const rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
      </IconMenu>
    );

    return (



        <div>
            <List>
              <Subheader>Today</Subheader>
              <Link to='/vote'>
              <ListItem
                leftAvatar={<Avatar src="http://lorempixel.com/400/200" />}
                primaryText="Brunch Plans"
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>Brendan Lim</span> --
                    Bottomless Mimosas or Avocado shots for Brunch?
                  </p>
                }
                secondaryTextLines={2}
              /> </Link>
              <Divider inset={true} />
              <Link to='/vote'>
              <ListItem
                leftAvatar={<Avatar src="http://lorempixel.com/400/200" />}
                primaryText={
                  <p><span>Baseball game tomorrow night!</span></p>
                }
                secondaryText={
                  <p>
                    Yankees or mets game, let's leave it to a vote!
                  </p>
                }
                secondaryTextLines={2}
              /> </Link>
              <Divider inset={true} />
              <ListItem
                leftAvatar={<Avatar src="http://lorempixel.com/400/200" />}
                primaryText="Oui oui to Paris!"
                secondaryText={
                  <p>
                    For tomorrow, Eiffel Tower or go to the National Museum of France?
                  </p>
                }
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              <ListItem
                leftAvatar={<Avatar src="http://lorempixel.com/400/200" />}
                primaryText="Birdthday gift"
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>Kerem Suer</span> --
                    Do you have any ideas what we can get Heidi for her birthday? How about a pony?
                  </p>
                }
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              <ListItem
                leftAvatar={<Avatar src="http://lorempixel.com/400/200" />}
                primaryText="Recipe to try"
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>Raquel Parrado</span> --
                    We should eat this: grated squash. Corn and tomatillo tacos.
                  </p>
                }
                secondaryTextLines={2}
              />
            </List>

            <List>
              <Subheader>Today</Subheader>
              <ListItem
                leftAvatar={<Avatar src="http://lorempixel.com/400/200" />}
                rightIconButton={rightIconMenu}
                primaryText="Brendan Lim"
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>Brunch this weekend?</span><br />
                    I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                  </p>
                }
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              <ListItem
                leftAvatar={<Avatar src="http://lorempixel.com/400/200" />}
                rightIconButton={rightIconMenu}
                primaryText="me, Scott, Jennifer"
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>Summer BBQ</span><br />
                    Wish I could come, but I&apos;m out of town this weekend.
                  </p>
                }
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              <ListItem
                leftAvatar={<Avatar src="http://lorempixel.com/400/200" />}
                rightIconButton={rightIconMenu}
                primaryText="Grace Ng"
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>Oui oui</span><br />
                    Do you have any Paris recs? Have you ever been?
                  </p>
                }
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              <ListItem
                leftAvatar={<Avatar src="http://lorempixel.com/400/200" />}
                rightIconButton={rightIconMenu}
                primaryText="Kerem Suer"
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>Birthday gift</span><br />
                    Do you have any ideas what we can get Heidi for her birthday? How about a pony?
                  </p>
                }
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              <ListItem
                leftAvatar={<Avatar src="http://lorempixel.com/400/200" />}
                rightIconButton={rightIconMenu}
                primaryText="Raquel Parrado"
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>Recipe to try</span><br />
                    We should eat this: grated squash. Corn and tomatillo tacos.
                  </p>
                }
                secondaryTextLines={2}
              />
            </List>

        </div>



    );
  }

  }
