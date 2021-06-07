import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userId = props.userId;
  const userIds = [
    "45350", // Cieszyn
    "45112", // Mati
    "39715", // Arczi
    "44325", // Jeksa
    "38978", // Scisly
  ];


  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon style={{color: "white", fontSize: "25px"}} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link as="/regulamin" href="/regulamin" ><MenuItem component="a" onClick={handleClose }>Regulamin</MenuItem></Link>
        <Link as="/onas" href="/onas"><MenuItem  component="a" onClick={handleClose }>O nas</MenuItem></Link>
        <Link as="/faq" href="/faq"><MenuItem component="a" onClick={handleClose }>FAQ</MenuItem></Link>
        <Link as="/blog" href="/blog" ><MenuItem component="a" onClick={handleClose }>BLOG</MenuItem></Link>
        <div>{userIds.includes(userId)
        ? <Link as="/Create" href="/Create" ><MenuItem component="a" onClick={handleClose }>Dodaj Post</MenuItem></Link>
        : null}
        </div>
        
      </Menu>
      <style>{`

      `}</style>
    </div>
  );
}