import LoginDialog from './login/logindialog'
import {useRouter} from "next/router";
import handleAuthuser from './userAuth/handleauth'
import React, { useState, useEffect } from 'react';
import Profile from './login/profile';
import Link from 'next/link';
import storage from 'local-storage-fallback';
import getUserData from './userAuth/getUserData';
import {useRecoilState} from 'recoil'
import {recoilUserId, recoilUserName, recoilUserStatus, recoilUserPrimaryPaymail, recoilUserAmount, recoilUserCurrency, recoilUserAvatarUrl, recoilUserEmail} from './states'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

export default function Header(props) {
  const router = useRouter();
  const { query } = router;
  const [userName, setUserName] = useRecoilState(recoilUserName)
  const [userPrimaryPaymail, setUserPrimaryPaymail] = useRecoilState(recoilUserPrimaryPaymail)
  const [userEmail, setUserEmail] = useRecoilState(recoilUserEmail)
  const [userAvatarUrl, setUserAvatarUrl] = useRecoilState(recoilUserAvatarUrl)
  const [userStatus, setUserStatus] = useRecoilState(recoilUserStatus)
  const [userAmount, setUserAmount] = useRecoilState(recoilUserAmount)
  const [userCurrency, setUserCurrency] = useRecoilState(recoilUserCurrency)
  const [userId, setUserId] = useRecoilState(recoilUserId)
  const [reload, setReload] = useState(false);


  function setMoneyButtonData(_profile, _balance, _userStatus) {
    setUserName(_profile.name);
    setUserPrimaryPaymail(_profile.primaryPaymail);
    setUserEmail(_profile.email);
    setUserAvatarUrl(_profile.avatarUrl);
    setUserStatus(_userStatus.data.status);
    setUserAmount(_balance.amount);
    setUserCurrency(_balance.currency);
    setUserId(_profile.id);  
  }


  // const userProfile = async() => { 
  //   if (query.code && !userId) { 
  //     await handleAuthuser();
  //     const { profile, balance, userStatus } = await getUserData();
  //     setMoneyButtonData(profile, balance, userStatus);
  //   }

  //   if (storage.getItem('mb_js_client:oauth_access_token') && !userId) {
  //     const { profile, balance, userStatus } = await getUserData();
  //     setMoneyButtonData(profile, balance, userStatus);
  //   } 
  // }
  // userProfile();
  // if (query.code) {
  // userProfile().then(router.push('/home'));
  // } else {
  //   userProfile();
  // }

  useEffect(() => { (async() => {

    if (query.code && !userId) { 
       await handleAuthuser().then(router.push('/home'));
      //  const { profile, balance, userStatus } = await getUserData();
      //  setMoneyButtonData(profile, balance, userStatus);
      //  setReload(true);
      //  console.log(storage.getItem('mb_js_client:oauth_access_token'));
    }

    if (!userId) { 
      const { profile, balance, userStatus } = await getUserData();
      setMoneyButtonData(profile, balance, userStatus);
      console.log(storage.getItem('mb_js_client:oauth_access_token'));
   }
  
  })()

    // if (storage.getItem('mb_js_client:oauth_access_token') && query.code) {

    //   router.push('/home');
    // //     const { profile, balance, userStatus } = await getUserData();
    // //     setMoneyButtonData(profile, balance, userStatus);
    // } 
  },[router.isReady]);

  

  useEffect(() => {
    console.log(userName);
    console.log(userPrimaryPaymail);
    console.log(userEmail);
    console.log(userAvatarUrl);
    console.log(userStatus);
    console.log(userAmount);
    console.log(userCurrency);
    console.log(userId);
      
      
  },[userId]);

  useEffect(() => {
    if (router.pathname != '/home') {
    (function(w,d,v3){
      console.log(userName)
      console.log(userEmail)
      w.chaportConfig = {
      appId : '609ef156cffe24321140dea7',
      };
        
      if(w.chaport)return;v3=w.chaport={};v3._q=[];v3._l={};v3.q=function(){v3._q.push(arguments)};v3.on=function(e,fn){if(!v3._l[e])v3._l[e]=[];v3._l[e].push(fn)};var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://app.chaport.com/javascripts/insert.js';var ss=d.getElementsByTagName('script')[0];ss.parentNode.insertBefore(s,ss)})(window, document);
        
      window.chaport.on('ready', function () {
        window.chaport.setVisitorData({
        name: (userName),
        email: (userEmail), 
        })
      })}
    },[userId]);

  return (
    <div className="main">
      <header className="header">
        <Link as="/" href="/" ><a className="logo"><HomeOutlinedIcon style={{ fontSize: '3rem',}}/></a></Link>
          <a className="push" >
            {!userId ? <LoginDialog /> :
            <Profile name={userName} userId={userId} primaryPaymail={userPrimaryPaymail} userEmail={userEmail} userAvatar={userAvatarUrl} userAmount={userAmount} userCurrency={userCurrency} userStatus={userStatus}/> }
          </a>
      </header>
      <style jsx>{`
  .main {
    position: fixed;
    top: 0; 
    left: 0;
    width: 100%;
    height: auto;
    max-height: 80px;
    background: rgba(280, 179, 0, 1);
    font-size: 25px;	
    font-weight: 300;	
    z-index: 2;
    opacity: ${props.opacityVal};
  }

  a {
    letter-spacing: 2px;
    padding: 20px 15px;
    
  }
  .logo {
    font-weight: 700;
    margin-left: 15px;
   }
   
  .push {
    margin-left: auto;
    cursor: pointer;
    margin-right: 20px;
  }

  .header {
    display: flex;
    justify-content: flex-end;
  }
  @media only screen and (max-width: 499px) {
    .push, .logo {
      font-size: 22px;	
      margin auto;
    }
    a {
      padding: 20px 0;
    }
  }

`}</style>
    </div>
  );
}