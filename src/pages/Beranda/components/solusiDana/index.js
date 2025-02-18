import React from 'react';
import SolusiDana from './components/solusiDana';
import KeunggulanKami from './components/keunggulanKami';
import KalkulatorSimulasiPinjaman from './components/kalkulatorSimulasiPinjaman';

export default function Index() {
  return (
    <section>
      <div className="main-section pt-3">
        <SolusiDana />
        <div className="break-line mb-2"></div>
        <KeunggulanKami />
        <KalkulatorSimulasiPinjaman />
      </div>
    </section>
  );
}
