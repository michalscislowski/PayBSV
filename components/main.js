import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from 'next/link';
import Linkfield from './linkfield'
import ConfirmButton from '../components/confirmbutton';
import InfoDialog from '../components/infodialog'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Main() {
  const classes = useStyles();

  const handleBuy = (e) => {
    e.preventDefault()
      window.open('https://www.kupbsv.pl', '_blank')
  }

  return (
    <div className="main">
            <Link as="/" href="/" ><b className="logo">PayBSV</b></Link>
            <Linkfield/>
            <ConfirmButton />
            <div className="dialogs">
              <a><InfoDialog/></a>
              <a><Button variant="contained" className={classes.button} startIcon={<AccountBalanceWalletOutlinedIcon />} onClick={handleBuy} style={{backgroundColor: 'black', color: 'white', fontWeight: '900'}}>KupBSV</Button></a>
            </div>
            <div className="socials">
                <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/BanachGroup')} /></a>
                <a className="linkedin"><LinkedInIcon aria-label="linkedin.com" onClick={() => window.open('https://www.linkedin.com/company/banach-group/')} /></a>
                <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/BanachGroup/')}/></a>
                <a className="twitter"><TwitterIcon aria-label="Twitter.com" onClick={() => window.open('https://twitter.com/BanachGroup')}/></a>
                <a className="twetch" aria-label="Twetch.com" onClick={() => window.open('https://twetch.app/u/40566')}></a>
                <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCegE3WW7U2-Wb__mWK3oKJA')}/></a>
            </div>
      <style jsx>{`
  .main {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    align-items: center; 

    width: 100vw;
    margin-top: 80px;
    background-image: radial-gradient(rgba(234, 179, 0, 0.3), rgba(280, 179, 0, 1));
  }
  .logo {
      font-size: 5rem;
      font-weight: 900;
  }
  .linktext {
      min-width: 1091px;
      height: 40px;
  }
  .dialogs {
    display:flex;
  }
  .dialogs a:hover {

  }
  .socials {
    display: flex;
    justify-content: center;
    padding-right: 15px;
  }
  .socials a {
    margin-left: 15px;
    transition: 0.3s;
  }
  a:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
  .facebook:hover {
    color: #3b5998;
  }
  .linkedin:hover {
      color: #0e76a8;
  }
  .instagram:hover {
    color: #e4405f;
  }
  .twitter:hover {
    color: #55acee;
  }
  .twetch {
    margin-top: 2px;
    width: 20px;
    height: 20px;
    background: url('/twetchlogoblack.png'), url('/twetchlogobluesmall.png');
    background-size: 20px 20px;
  }
  .twetch:hover {
    background: url('/twetchlogoblue.png');
    background-size: 20px 20px;
  }
  .youtube:hover {
    color: #cd201f;
  }
`}</style>
    </div>
  );
}