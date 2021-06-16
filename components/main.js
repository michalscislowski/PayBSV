import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Linkfield from './linkfield'
import ConfirmButton from '../components/confirmbutton';
import InfoDialog from '../components/infodialog'


export default function Main() {
  
  return (
    <div className="main">
            <div className="logo">PayBSV</div>
            <Linkfield/>
            {/* <ConfirmButton /> */}
            <div className="dialogs">
              <div>
                <InfoDialog/>
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
    background-image: radial-gradient(rgba(243, 202, 32, 0.7), rgba(243, 202, 32, 1));
  }
  .logo {
      font-size: 5rem;
      font-weight: 900;
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
  .twetch {
    margin-top: 2px;
    width: 20px;
    height: 20px;
    background: url('/twetchlogoblack.png');
    background-size: 20px 20px;
  }
`}</style>
    </div>
  );
}