'use client';
import React, { Fragment, useState, useEffect, useMemo } from 'react';
import FormKendaraan from './components/formKendaraan';

import { useSelector, useDispatch } from 'react-redux';
import { getListArea } from '@/redux/action/area/creator';
import { getListInsuranseType } from '@/redux/action/insuranseType/creator';
import { getListInstalments } from '@/redux/action/instalments/creator';

import { resetBrandList } from '@/redux/action/brand/creator';
import { resetModelList } from '@/redux/action/model/creator';
import { resetYearList } from '@/redux/action/year/creator';
import { resetInstalmentsList } from '@/redux/action/instalments/creator';
import { unFormatRupiah } from '@/helper/utils';

export default function Index() {
  const areaList = useSelector((state) => state.area.areaList);
  const insuranseTypeList = useSelector((state) => state.insuranseType.insuranseTypeList);
  const instalmentsList = useSelector((state) => state.instalments.instalmentsList);
  const dispatch = useDispatch();

  const [selectedTab, setSelectedTab] = useState('motor'); // State untuk tab aktif

  const [isLoading, setIsLoading] = useState({
    area: false,
    brand: false,
    model: false,
    year: false,
    jenis_asuransi: false,
    max_pengajuan: false,
    submit: false
  });

  const [formKendaraan, setFormKendaraan] = useState({
    area: '',
    merk: '',
    type: '',
    tahun: '',
    jenis_asuransi: '',
    min_pengajuan: 3000000,
    max_pengajuan: 30000000,
    tenor: '',
    total_pengajuan: 5000000
  });

  const handleBPKB = async (tabs) => {
    if (tabs === 'motor') {
      setSelectedTab('motor');
      resetFormKendaraan('motor');
    } else {
      getDataInsuranseType();
      setSelectedTab('mobil');
      resetFormKendaraan('mobil');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    // Jika field adalah `total_pengajuan`, hapus titik dan ubah ke angka
    if (name === 'total_pengajuan') {
      newValue = unFormatRupiah(value);
    }

    setFormKendaraan((prev) => ({
      ...prev,
      [name]: newValue
    }));
  };

  const isFormValid = useMemo(() => {
    const { area, merk, type, tahun, tenor, total_pengajuan } = formKendaraan;

    // Jika selectedTab = 'mobil', pastikan jenis_asuransi juga diisi
    if (selectedTab === 'mobil' && !formKendaraan.jenis_asuransi) {
      return false;
    }

    // Pastikan semua field utama terisi
    return !!(area && merk && type && tahun && tenor && total_pengajuan);
  }, [formKendaraan, selectedTab]);

  const handleHitung = async () => {
    if (isFormValid) {
      setIsLoading((prev) => ({ ...prev, submit: true }));
      const {
        merk: brand_id,
        type: model_id,
        tahun: year_id,
        area: area_id,
        jenis_asuransi: insurance_type_id = undefined,
        tenor: tenor,
        total_pengajuan: total
      } = formKendaraan;

      const requestData = {
        group_object: selectedTab === 'motor' ? '001' : '002',
        brand_id,
        model_id,
        year_id,
        area_id,
        insurance_type_id,
        tenor,
        total
      };
      try {
        await dispatch(getListInstalments(requestData));
      } finally {
        setIsLoading((prev) => ({ ...prev, submit: false }));
      }
    }
  };

  const resetFormKendaraan = (tab) => {
    setFormKendaraan({
      area: '',
      merk: '',
      type: '',
      tahun: '',
      jenis_asuransi: '',
      min_pengajuan: tab === 'motor' ? 3000000 : 30000000,
      max_pengajuan: tab === 'motor' ? 30000000 : 100000000,
      tenor: '',
      total_pengajuan: tab === 'motor' ? 5000000 : 50000000,
      cicilan: '-'
    });
    dispatch(resetBrandList());
    dispatch(resetModelList());
    dispatch(resetYearList());
    dispatch(resetInstalmentsList());
  };

  const getDataArea = async () => {
    setIsLoading((prev) => ({ ...prev, area: true }));
    await dispatch(getListArea());
    setIsLoading((prev) => ({ ...prev, area: false }));
  };

  const getDataInsuranseType = async () => {
    setIsLoading((prev) => ({ ...prev, jenis_asuransi: true }));
    await dispatch(getListInsuranseType());
    setIsLoading((prev) => ({ ...prev, jenis_asuransi: false }));
  };

  useEffect(() => {
    getDataArea();
  }, []);

  return (
    <Fragment>
      <div className="cal-box" id="Appsmpl">
        <div className="cal-title mb-3">
          <span>
            <b>Kalkulator Simulasi Pinjaman</b>
          </span>
        </div>
        <div className="mb-3 d-flex">
          <div className="cal-pil-bpkb">
            <b>BPKB Kendaraan</b>
          </div>
          <div
            className={`pilih-bpkb ${selectedTab === 'motor' ? 'pilih_bpkb_active' : ''}`}
            onClick={() => {
              handleBPKB('motor');
            }}
          >
            Motor
          </div>
          <div
            className={`pilih-bpkb ${selectedTab === 'mobil' ? 'pilih_bpkb_active' : ''}`}
            onClick={() => {
              handleBPKB('mobil');
            }}
          >
            Mobil
          </div>
        </div>

        {/* Content Berdasarkan Tab */}
        <FormKendaraan
          formKendaraan={formKendaraan}
          onChange={handleChange}
          dataArea={areaList}
          dataInsuranseType={insuranseTypeList}
          selectedTab={selectedTab}
          setFormKendaraan={setFormKendaraan}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <div className="mt-4 d-block d-lg-none">
          <button
            className="hitung-cicilan"
            onClick={handleHitung}
            disabled={
              !isFormValid ||
              isLoading?.submit ||
              formKendaraan.total_pengajuan < formKendaraan?.min_pengajuan ||
              formKendaraan.total_pengajuan > formKendaraan?.max_pengajuan
            }
          >
            {isLoading?.submit && <i className="fa fa-spinner fa-spin mr-2"></i>}
            <span>
              <b>Hitung</b>
            </span>
          </button>
          <div className="mb-2 mt-3" style={{ fontFamily: 'Baloo2Bold', fontSize: '16px' }}>
            <b>Estimasi Cicilan:</b>
          </div>
          <div style={{ fontFamily: 'Baloo2Bold', background: 'white', padding: '5px' }}>
            <span style={{ fontSize: '16px' }}>
              <b>
                {isLoading?.submit ? 'Rp Menghitung...' : instalmentsList?.cicilan_prefix || 'Rp -'}
              </b>
            </span>
            <span style={{ fontSize: '16px' }}>
              <b> /bulan*</b>
            </span>
          </div>
        </div>
        <div className="mt-4 d-none d-lg-block">
          <div className="mb-2" style={{ fontFamily: 'Baloo2Bold', fontSize: '20px' }}>
            <b>Estimasi Cicilan:</b>
          </div>
          <div className="row">
            <div className="col-8">
              <div style={{ fontFamily: 'Baloo2Bold', background: 'white', padding: '12px 5px' }}>
                <span style={{ fontSize: '25px' }}>
                  <b>
                    {isLoading?.submit
                      ? 'Rp Menghitung...'
                      : instalmentsList?.cicilan_prefix || 'Rp -'}
                  </b>
                </span>
                <span style={{ fontSize: '25px' }}>
                  <b> /bulan*</b>
                </span>
              </div>
            </div>
            <div className="col-4">
              <button
                className="hitung-cicilan"
                onClick={handleHitung}
                disabled={
                  !isFormValid ||
                  isLoading?.submit ||
                  formKendaraan.total_pengajuan < formKendaraan?.min_pengajuan ||
                  formKendaraan.total_pengajuan > formKendaraan?.max_pengajuan
                }
              >
                {isLoading?.submit && <i className="fa fa-spinner fa-spin mr-2"></i>}
                <span>
                  <b>Hitung</b>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Catatan */}
      <div className="mb-5 text-tenor">
        Minimum tenor 12 bulan dan maksimal tenor 48 bulan. *Nominal pembiayaan bersifat estimasi.
        Besarnya pembiayaan hasil verivikasi kodisi kendaraan.
      </div>
    </Fragment>
  );
}
