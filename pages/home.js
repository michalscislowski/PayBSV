import Head from 'next/head'
import Header from '../components/header'
import { useRouter} from 'next/router'



export default function Home() {
  const router = useRouter();

  if (router.isReady) {
    setTimeout(() => {
      router.push('/')
    }, 2000);
  }
  return (
    <div className="container">
      <Head>
        <title>Kup BSV</title>
        <link rel="icon" href="/bsvlogo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className="wrapper">
        <div><Header opacityVal={0}/></div>

        <div className="loading-page">
          <p>BANACH</p>
          <p>GROUP</p>
          {/* <img src="/B_group.png" alt="Banach Group LOGO"></img> */}
        </div>
      </div>
      <style jsx> {`
        @keyframes zoomInLogo {
          0% {
            transform: scale(0.2);
          }
          100% {
            transform: scale(1);
          }
        }
        .container {
          height: 100vh;
          width: 100%;
        }
        .wrapper {
          height: 100vh;
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
          align-content: center;
          background-image: radial-gradient(rgba(244, 219, 49, 0.75), rgba(244, 219, 49, 1));
        }
        .loading-page {
          margin-left: auto;
          margin-right: auto;
          font-size: 90px;
        }
        img{
          animation: 2s ease-out 0s 1 zoomInLogo;
          width: 500px;
          height: 500px;
        }
        p {
          animation: 2s ease-out 0s 1 zoomInLogo;
          padding: 0;
          margin: 0;
        }
        @media only screen and (max-width: 499px) {
          .loading-page{
            font-size: 75px;
          }
        }
      `} </style>
    </div>
  )
}
