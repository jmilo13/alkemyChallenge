import App from 'next/app';
import Head from 'next/head'
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
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>SuperTeam</title>
            <meta name="description" content="Accede a cientos de superheroes y villanos de diferentes universos y crea tu equipo."></meta>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TeamContextProvider>
      </UserContextProvider>
    );
  }
}

export default MyApp;