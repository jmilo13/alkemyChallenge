import App from 'next/app';
import {UserContextProvider} from '@context/UserContext'
import { ItemContextProvider } from '@context/ItemContext';
import Layout from '@components/Layout';
import '../global.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <UserContextProvider>
        <ItemContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ItemContextProvider>
      </UserContextProvider>
    );
  }
}

export default MyApp;