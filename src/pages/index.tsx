import type {GetServerSideProps} from 'next';
import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import {useLocale} from '../contexts/LocaleContext';
import {resolveLocale} from '../i18n/preference';
import {DEFAULT_LOCALE, type Locale, LOCALE_COOKIE_KEY} from '../i18n/types';

export const getServerSideProps: GetServerSideProps<{initialLocale: Locale}> = async ({req, res}) => {
  const initialLocale = resolveLocale(req.cookies[LOCALE_COOKIE_KEY]) ?? DEFAULT_LOCALE;
  res.setHeader('Cache-Control', 'private, no-store');
  return {props: {initialLocale}};
};

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {messages} = useLocale();
  const {title, description} = messages.meta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;
