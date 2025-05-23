import React from 'react';
import Heads from '@/components/head';
import Beranda from '@/pages/Beranda';
import Footer from '@/components/footer';
import { Fragment } from 'react';

export default function Home() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  return (
    <Fragment>
      <Heads
        title="SolusiDana Pinjaman Cepat Jaminan BPKB Motor dan Mobil - Adira"
        description="Dana pinjaman uang tunai cepat lewat pengajuan gadai BPKB motor dengan cicilan ringan dan bunga rendah. Proses cepat, aman, dan mudah di Adira Finance"
        author="ZRDigitalTech"
        keywords="gadai bpkb motor, gadai bpkb mobil"
        // themeColor
        manifest={domain + '/manifest.json'}
        url={domain}
        image={domain + '/assets/images/Maret25-SOLUSI-DANA_LP-MOBILE.jpg'}
      />
      <Beranda />
      <Footer />
    </Fragment>
  );
}
