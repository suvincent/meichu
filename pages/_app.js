// // import App from 'next/app'
// function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps} />
//   }
  
//   // Only uncomment this method if you have blocking data requirements for
//   // every single page in your application. This disables the ability to
//   // perform automatic static optimization, causing every page in your app to
//   // be server-side rendered.
//   //
//   // MyApp.getInitialProps = async (appContext) => {
//   //   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   //   const appProps = await App.getInitialProps(appContext);
//   //
//   //   return { ...appProps }
//   // }
  
//   export default MyApp

import React from 'react'
import App from 'next/app'
import firebase from 'firebase';
import './index.css';
import 'react-calendar-timeline/lib/Timeline.css'
function MyComponent({children}) {
  // You can use hooks here
  return <>{children}</> // The fragment is just illustrational
}

class MyApp extends App {
    constructor(props) {
        super(props);
        
      }
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    return <MyComponent>
      <script src='https://meet.jit.si/external_api.js'></script>
      <Component {...pageProps} />
    </MyComponent>
  }
}

export default MyApp