import React from 'react';
import Head from 'next/head';


export default function Blockpass (props) {

const refId = props.refId;
  loadBlockpassWidget = () => {
    const blockpass = new window.BlockpassKYCConnect(
      'banach_group', // service client_id from the admin console
      {
        refId: refId, // assign the local user_id of the connected user
      }
    )

    blockpass.startKYCConnect()

    blockpass.on('KYCConnectSuccess', () => {
      //add code that will trigger when data have been sent.
    })
  }
    return (
      <div>
      <Head>
          <script src= 'https://cdn.blockpass.org/widget/scripts/release/3.0.1/blockpass-kyc-connect.prod.js'></script>
      </Head>
        
      <button id="blockpass-kyc-connect">
        Verify with Blockpass
      </button>
      </div>
    )
}  