import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import lizard2 from './lizard2.jpg';
import lizard3 from './lizard3.jpg';
import lizard4 from './lizard4.jpg';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src={lizard3} className={classes.bigAvatar} />
      <Avatar alt="Remy Sharp" src={lizard2} className={classes.bigAvatar} />
      <Avatar alt="Remy Sharp" src={lizard4} className={classes.bigAvatar} />
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);
