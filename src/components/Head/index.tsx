import Helmet from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

interface IProps {
  title: string;
  description?: string;
  ogImage?: string;
  children?: ReactNode | undefined;
}

function Head({ title, description, ogImage, children }: IProps) {
  const location = useLocation();

  return (
    <Helmet>
      <meta charSet="UTF-8" />

      <title>{`Mercado Libre${title ? ': ' : ''} ${title}`}</title>
      <link
        rel="canonical"
        href={`${location.pathname}${location.search || ''}`}
      />

      <meta name="robots" content="index, follow" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#FFE600" />
      <meta name="author" content="Wesley Amaro" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" sizes="192x192" href="/favicon-192x192.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <link rel="mask-icon" href="/favicon.png" color="#FFE600" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />

      {/* <meta property="fb:app_id" content="" /> */}

      <meta
        property="og:url"
        content={`${location.pathname}${location.search || ''}`}
      />
      <meta
        property="og:title"
        content={`Mercado Libre${title ? ': ' : ''} ${title}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || '/favicon-512x512.png'} />

      <meta
        name="twitter:site"
        content={`${location.pathname}${location.search || ''}`}
      />
      <meta
        name="twitter:title"
        content={`Mercado Libre${title ? ': ' : ''} ${title}`}
      />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage || '/favicon-512x512.png'} />

      {children && children}
    </Helmet>
  );
}

Head.defaultProps = {
  description: 'Buscador Mercado Libre',
  ogImage: '',
  children: undefined,
};

export default Head;
