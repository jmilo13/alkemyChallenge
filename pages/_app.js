import App from 'next/app';
import {UserContextProvider} from '@context/UserContext'
import { TeamContextProvider } from '@context/TeamContext';
import Layout from '@components/Layout';
import '../global.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <UserContextProvider>
        <TeamContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TeamContextProvider>
      </UserContextProvider>
    );
  }
}

export default MyApp;