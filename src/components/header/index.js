'use client';

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function Index(props) {
  const { handleAjukanSekarang } = props;
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  return (
    <Fragment>
      <header className="header-2-fixed-top">
        <div>
          <nav
            className="navbar navbar-expand-lg adira-navbar"
            style={{
              width: '100%',
              borderBottomRightRadius: '0px'
            }}
          >
            <Link href="/" className="navbar-brand">
              <img
                src={`${domain}/assets/images/LOGO-ADIRA.png`}
                width="120"
                height="30"
                className="d-inline-block align-top"
              />
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
            <a
              className="navbar-brand mpl-ajukan-sekarang pointer"
              onClick={handleAjukanSekarang}
              style={{
                border: 'solid #333',
                borderRadius: '10px'
              }}
            >
              <img
                style={{ width: '150px' }}
                src={`${domain}/assets/images/button-ajukan-header.png`}
                className="d-inline-block align-top"
              />
            </a>
          </nav>
        </div>
        <div
          id="open-menu"
          className="collapse navbar-collapse"
          style={{
            position: 'absolute',
            width: '100%',
            top: '-60px',
            borderBottomRightRadius: '55px',
            opacity: '0.95'
          }}
        >
          <div
            className="bg-white flex-column justify-content-start py-4 px-2"
            style={{ borderBottomRightRadius: '55px' }}
          >
            <div style={{ textAlign: 'left', marginTop: '60px' }}></div>
            <div style={{ textAlign: 'center', marginTop: '-120px' }}></div>
          </div>
        </div>
      </header>
      {/* Desktop Version */}
      <div className="bannerresDesk" style={{ paddingTop: '64px', position: 'relative' }}>
        <img
          src={`${domain}/assets/images/Maret25-SOLUSI-DANA_LP-DESKTOP.jpg`}
          className="d-block w-100"
          alt="banner-multiguna"
        />

        <a className="overlay-v2 font-weight-bolder pointer" onClick={handleAjukanSekarang}>
          Ajukan Sekarang
        </a>
      </div>

      {/* Mobile Version */}
      <div className="bannerresMob" style={{ paddingTop: '64px', position: 'relative' }}>
        <img
          src={`${domain}/assets/images/Maret25-SOLUSI-DANA_LP-MOBILE.jpg`}
          className="d-block w-100"
          alt="..."
        />

        <a className="pointer" onClick={handleAjukanSekarang}>
          <img
            className="overlay"
            src={`${domain}/assets/images/button-ajukan-header-mobile.png`}
            alt="button-ajukan-header-mobile"
          />
        </a>
      </div>
    </Fragment>
  );
}

Index.propTypes = {
  handleAjukanSekarang: PropTypes.func.isRequired
};
