import React, { Fragment } from 'react';
import Script from 'next/script';

const Index = () => {
  return (
    <Fragment>
      {/* <!-- jQuery --> */}
      <Script src="/assets/js/vendor/jquery-3.3.1.min.js" type="text/javascript" />
      {/* <Script
        src="/assets/js/vendor/jquery-migrate.min.js"
        strategy="lazyOnload"
        type="text/javascript"
      /> */}
      {/* <!-- Bootstrap js --> */}
      <Script
        src="/assets/js/vendor/bootstrap.bundle.min.js"
        strategy="lazyOnload"
        type="text/javascript"
      />
      {/* <!-- font awesome --> */}
      <Script
        src="/assets/js/vendor/fontawesome-all.min.js"
        strategy="lazyOnload"
        type="text/javascript"
      />
      {/* <!-- jQuery Easing Plugin --> */}
      <Script src="/assets/js/vendor/easing-1.3.js" strategy="lazyOnload" type="text/javascript" />
      {/* <!-- jQuery progressbar plugin --> */}
      {/* <Script src="/assets/js/vendor/jquery.waypoints.min.js" strategy="lazyOnload" /> */}
      {/* <Script src="/assets/js/vendor/jquery.counterup.min.js" /> */}
      {/* <!-- Bootstrap Progressbar --> */}
      {/* <Script src="/assets/js/vendor/bootstrap-progressbar.min.js" strategy="lazyOnload" /> */}
      {/* <!-- ImagesLoaded js --> */}
      {/* <Script src="/assets/js/vendor/imagesloaded.pkgd.min.js" strategy="lazyOnload" /> */}
      {/* <!-- Slick carousel js --> */}
      {/* <Script src="/assets/js/vendor/slick.min.js" strategy="lazyOnload" type="text/javascript" /> */}
      {/* <!-- Magnific popup --> */}
      {/* <Script
        src="/assets/js/vendor/jquery.magnific-popup.min.js"
        strategy="lazyOnload"
        type="text/javascript"
      /> */}
      {/* <Script src="/assets/js/vendor/isotope.pkgd.min.js" strategy="lazyOnload" /> */}
      {/* <!-- scroll magic --> */}
      {/* <Script src="/assets/js/vendor/jquery.ScrollMagic.min.js" strategy="lazyOnload" /> */}
      {/* <Script src="/assets/js/vendor/debug.addIndicators.min.js" strategy="lazyOnload" /> */}
      {/* <Script src="/assets/js/vendor/jquery.TweenMax.min.js" strategy="lazyOnload" /> */}
      {/* <Script src="/assets/js/vendor/animation.gsap.min.js" strategy="lazyOnload" /> */}
      {/* <Script src="/assets/js/vendor/scrollReveal.js" /> */}
      {/* <!-- Custom js --> */}
      <Script src="/assets/js/main.js" strategy="lazyOnload" type="text/javascript" />
    </Fragment>
  );
};

export default Index;
