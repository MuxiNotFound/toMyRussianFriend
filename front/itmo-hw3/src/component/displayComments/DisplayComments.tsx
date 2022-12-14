import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import React, { Component, ReactNode } from 'react';
import { IComment } from '../../utils';

// this is a component of show commments
interface CommentProps extends IComment {}

export class DisplayComments extends Component<CommentProps> {
  public render(): ReactNode {
    return (
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={this.props.author} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={this.props.author}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  Ali Connors
                </Typography>
                {this.props.comment}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    );
  }
}
