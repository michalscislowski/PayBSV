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
  kupBSV: {
    margin: 10,
    background: 'black', 
    color: 'white', 
    fontWeight: '900',
    '&:hover' : {
      color: 'white', 
      background: 'black', 
      transform: 'scale(1.02)',
      transition: '0.25s ease-in-out'
    }
  }
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
              <div>
                <InfoDialog/>
              </div>
              <div className="kupbsv">
                {/* <div className="pytanie">Nie masz BSV?</div> */}
                <Button 
                  variant="contained" 
                  startIcon={<AccountBalanceWalletOutlinedIcon />} 
                  onClick={handleBuy} 
                  className={classes.kupBSV}
                >
                  KupBSV
                </Button>
              </div>
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
    justify-content: space-evenly;
    align-items: center; 
    width: 100vw;
    margin-top: 77px;
    background-image: radial-gradient(rgba(244, 219, 49, 0.75), rgba(244, 219, 49, 1));
  }
  /* .kupbsv {
    position: relative;
  }
  .pytanie {
    width: auto;
    display: inline;
    position: absolute;
    top: -30px;
    left: 0;
    font-size: 1.08rem;
    font-weight: 900;
  } */
  .logo {
      font-size: 5rem;
      font-weight: 900;
  }
  .linktext {
      min-width: 1091px;
      height: 40px;
  }
  .dialogs {
    display: flex;
  }
  .socials {
    display: flex;
    justify-content: center;
    padding-right: 15px;
    border-bottom: 1px solid #020202;
  }
  .socials a {
    margin-left: 15px;
    transition: 0.3s;
  }
  a:hover {
    cursor: pointer;
    transform: scale(1.15);
    color: #020202;
  }
  .twetch {
    margin-top: 2px;
    width: 20px;
    height: 20px;
    background: url('/twetchlogoblack.png');
    background-size: 20px 20px;
  }
  @media only screen and (max-width: 499px) {
    .dialogs {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center; 
    }
    /* .kupbsv {
      margin-top: 30px;
    }
    .pytanie {
      margin-bottom: 50px;
      top: -1.125rem;
    } */
  }
`}</style>
    </div>
  );
}