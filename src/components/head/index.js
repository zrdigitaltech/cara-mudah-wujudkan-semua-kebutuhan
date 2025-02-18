import Head from 'next/head';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Index = (props) => {
  const { title, description, author, keywords, themeColor, manifest, url, image, stylesheet } =
    props;
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  return (
    <Fragment>
      <Head>
        {/* Page Title */}
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>

        {/* Basic metas */}
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="keywords" content={keywords} />
        <meta name="theme-color" content={themeColor} />
        <link rel="manifest" href={manifest} />
        <link
          rel="icon"
          href={domain + '/assets/images/AVA-NON-MASK-100x100.png'}
          type="image/x-icon"
          sizes="16x16"
        ></link>

        {/* Facebook Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={title} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta property="twitter:image:alt" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {stylesheet}
      </Head>
    </Fragment>
  );
};

Index.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  themeColor: PropTypes.string,
  manifest: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  stylesheet: PropTypes.node // Since stylesheet can be a JSX element
};

// ✅ Define default props (optional)
Index.defaultProps = {
  keywords: '',
  themeColor: '#ffffff',
  manifest: '/manifest.json',
  url: '',
  image: '',
  stylesheet: null
};

export default Index;
