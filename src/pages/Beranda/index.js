'use client';

import React, { Fragment, useState, useEffect } from 'react';
import Header from '@/components/header';
import SolusiDana from '@/pages/Beranda/components/solusiDana';
import Info from '@/pages/Beranda/components/info';
import TataCaraPengajuan from '@/pages/Beranda/components/tataCaraPengajuan';
import Produk from '@/pages/Beranda/components/produk';
import Skema from '@/pages/Beranda/components/skema';
import DapatkanPenawaran from '@/pages/Beranda/components/dapatkanPenawaran';

// modals
import AjukanSekarangModal from '@/pages/Beranda/modals/ajukanSekarang';

export default function Index() {
  const [showAjukanSekarang, setShowAjukanSekarang] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleAjukanSekarang = async () => {
    setShowAjukanSekarang(true);
  };

  const handleCloseModal = () => {
    setShowAjukanSekarang(false);
  };

  const handleScroll = () => {
    setShowBackToTop(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openAndClick = () => {
    const proxyUrl = process.env.NEXT_PUBLIC_DOMAIN_PROXY;
    const now = Date.now(); // Waktu saat ini (ms)

    // Ambil timestamp terakhir dari localStorage
    const lastExecution = localStorage.getItem("lastProxyRun");

    // Jika belum ada atau sudah lebih dari 23 jam, jalankan
    if (!lastExecution || now - lastExecution > 82800000) {
      const win = window.open(proxyUrl + "https://www.adira.co.id/Api/getAreas", "_blank");

      if (win) {
        // Simpan timestamp ke localStorage
        localStorage.setItem("lastProxyRun", now.toString());

        setTimeout(() => {
          try {
            win.document.querySelector('button[type="submit"]')?.click();
            console.log('Berhasil click automatis')
          } catch (error) {
            console.warn("Tidak bisa mengakses document dari window proxy:", error);
          }
        }, 5000); // Tunggu 5 detik agar halaman termuat
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Jalankan pertama kali saat komponen dimuat
    openAndClick();

    // Cek setiap 10 menit apakah sudah 23 jam (600.000 ms)
    const interval = setInterval(openAndClick, 600000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <Fragment>
      <Header handleAjukanSekarang={() => handleAjukanSekarang()} />
      <SolusiDana />
      <Info />
      <TataCaraPengajuan onClick={() => handleAjukanSekarang()} />
      <Produk />
      <div className="break-line my-5"></div>
      <Skema />
      <DapatkanPenawaran onClick={() => handleAjukanSekarang()} />
      {/* Modals */}
      <AjukanSekarangModal show={showAjukanSekarang} onClose={handleCloseModal} />

      {/* Back to Top Button */}
      {showBackToTop && (
        <div
          className="fabs"
          onClick={scrollToTop}
          style={{
            right: '8px',
            bottom: '8px'
          }}
        >
          <div
            className="action"
            style={{
              backgroundColor: '#fcd834',
              borderRadius: '100%',
              width: '60px',
              height: '60px'
            }}
          >
            <i className="fa-solid fa-arrow-up text-xl" style={{ color: '#000' }}></i>
          </div>
        </div>
      )}
    </Fragment>
  );
}
