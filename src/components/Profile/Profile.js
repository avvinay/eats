import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Power from '@material-ui/icons/PowerSettingsNew';
import IconButton from '@material-ui/core/IconButton';
import {connect} from 'react-redux';
import * as actionCreators from '../../services/Cart/index';

const Profile = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    props.onLogout();
  }

  return (
    <div>
      
      <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleClick}
            >
            <Power />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => logoutHandler()}>Logout</MenuItem>
      </Menu>
    </div>
  );
}


const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => {
            dispatch(actionCreators.userLoggedOut());
        }
    }
}


export default connect(null, mapDispatchToProps)(Profile);