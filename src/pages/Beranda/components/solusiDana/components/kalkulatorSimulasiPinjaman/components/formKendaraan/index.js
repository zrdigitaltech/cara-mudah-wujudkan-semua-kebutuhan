'use client';

import React, { Fragment, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getListBrand, resetBrandList } from '@/redux/action/brand/creator';
import { getListModel, resetModelList } from '@/redux/action/model/creator';
import { getListYear, resetYearList } from '@/redux/action/year/creator';
import { getListMaxPencairan } from '@/redux/action/maxPencairan/creator';
import { resetInstalmentsList } from '@/redux/action/instalments/creator';
import PropTypes from 'prop-types';
import { formatRupiah, roundToNearestHundredMillion } from '@/helper/utils';

export default function Index(props) {
  const {
    formKendaraan,
    onChange,
    dataArea,
    dataInsuranseType,
    selectedTab,
    setFormKendaraan,
    isLoading,
    setIsLoading
  } = props;

  const brandList = useSelector((state) => state.brand.brandList);
  const modelList = useSelector((state) => state.model.modelList);
  const yearList = useSelector((state) => state.year.yearList);
  const maxPencairanList = useSelector((state) => state.maxPencairan.maxPencairanList);
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    const { name, value } = e.target;

    if (name === 'area') {
      getDataBrands();
      resetFormKendaraan(['merk', 'type', 'tahun', 'jenis_asuransi', 'tenor']);
      dispatch(resetBrandList());
      dispatch(resetModelList());
      dispatch(resetYearList());
    } else if (name === 'merk') {
      getDataModels(value);
      resetFormKendaraan(['type', 'tahun', 'jenis_asuransi', 'tenor']);
      dispatch(resetModelList());
      dispatch(resetYearList());
    } else if (name === 'type') {
      getDataYears(value);
      resetFormKendaraan(['tahun', 'jenis_asuransi', 'tenor']);
    } else if (name === 'tahun') {
      setFormKendaraan((prev) => ({ ...prev, tahun: value }));
      if (selectedTab === 'motor') {
        getDataMaxPencairanMotor(value);
      }
    } else if (name === 'jenis_asuransi') {
      setFormKendaraan((prev) => ({ ...prev, jenis_asuransi: value }));
      if (formKendaraan?.tahun) {
        getDataMaxPencairanMobil(value);
      }
    }

    onChange(e);
    dispatch(resetInstalmentsList());
  };

  const resetFormKendaraan = (fields = []) => {
    setFormKendaraan((prev) => ({
      ...prev,
      ...Object.fromEntries(fields.map((field) => [field, ''])),
      min_pengajuan: selectedTab === 'motor' ? 3000000 : 30000000,
      max_pengajuan: selectedTab === 'motor' ? 30000000 : 100000000,
      total_pengajuan: selectedTab === 'motor' ? 5000000 : 50000000
    }));
  };

  const getDataBrands = async () => {
    setIsLoading((prev) => ({ ...prev, brand: true }));
    await dispatch(getListBrand(selectedTab));
    setIsLoading((prev) => ({ ...prev, brand: false }));
  };

  const getDataModels = async (brand) => {
    setIsLoading((prev) => ({ ...prev, model: true }));
    await dispatch(getListModel(brand, selectedTab));
    setIsLoading((prev) => ({ ...prev, model: false }));
  };

  const getDataYears = async (brand) => {
    setIsLoading((prev) => ({ ...prev, year: true }));
    await dispatch(getListYear(formKendaraan?.area, brand));
    setIsLoading((prev) => ({ ...prev, year: false }));
  };

  const getDataMaxPencairanMotor = async (year_id) => {
    const {
      merk: brand_id,
      type: model_id,
      area: area_id,
      jenis_asuransi: insurance_type_id = undefined
    } = formKendaraan;

    const requestData = {
      group_object: selectedTab === 'motor' ? '001' : '002',
      brand_id,
      model_id,
      year_id,
      area_id,
      insurance_type_id
    };
    setIsLoading((prev) => ({ ...prev, max_pengajuan: true }));
    await dispatch(getListMaxPencairan(requestData));
    setIsLoading((prev) => ({ ...prev, max_pengajuan: false }));
  };

  const getDataMaxPencairanMobil = async (insurance_type_id) => {
    const { merk: brand_id, type: model_id, area: area_id, tahun: year_id } = formKendaraan;

    const requestData = {
      group_object: selectedTab === 'motor' ? '001' : '002',
      brand_id,
      model_id,
      year_id,
      area_id,
      insurance_type_id
    };
    setIsLoading((prev) => ({ ...prev, jenis_asuransi: true }));
    await dispatch(getListMaxPencairan(requestData));
    setIsLoading((prev) => ({ ...prev, jenis_asuransi: false }));
  };

  // 🔥 Use useEffect to update max_pengajuan when Redux state changes
  useEffect(() => {
    if (maxPencairanList) {
      setIsLoading((prev) => ({ ...prev, max_pengajuan: true }));

      const maxPencairan = Number(maxPencairanList) || formKendaraan?.max_pengajuan;
      const resultMaxPencairanList = roundToNearestHundredMillion(maxPencairan);

      setTimeout(() => {
        // Delay agar loading terlihat
        setFormKendaraan((prev) => ({
          ...prev,
          max_pengajuan: resultMaxPencairanList
        }));
        setIsLoading((prev) => ({ ...prev, max_pengajuan: false }));
      }, 500);
    }
  }, [maxPencairanList]); // Runs when Redux updates maxPencairanList

  return (
    <Fragment>
      <div className="row mb-3" style={{ rowGap: '15px' }}>
        <div className="col-6 col-md-3 align-content-end">
          <label htmlFor="area">Area Tempat Tinggal</label>
          <select
            className="custom-select font-italic"
            name="area"
            value={formKendaraan?.area}
            onChange={handleChange}
            disabled={isLoading?.area}
          >
            <option disabled={true} value="">
              {isLoading?.area ? 'Mohon tunggu...' : 'Area Tempat Tinggal...'}
            </option>
            {dataArea?.map((area, index) => (
              <option key={index} value={area?.id}>
                {area?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-6 col-md-3 align-content-end">
          <label htmlFor="merk">Merk Kendaraan</label>
          <select
            className="custom-select font-italic"
            name="merk"
            value={formKendaraan?.merk}
            onChange={handleChange}
            disabled={!formKendaraan?.area || isLoading?.brand}
          >
            <option disabled={true} value="">
              {isLoading?.brand ? 'Mohon tunggu...' : 'Merk...'}
            </option>
            {brandList?.map((brand, index) => (
              <option key={index} value={brand?.id}>
                {brand?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-6 col-md-3 align-content-end">
          <label htmlFor="type">Tipe Kendaraan</label>
          <select
            className="custom-select font-italic"
            name="type"
            value={formKendaraan?.type}
            onChange={handleChange}
            disabled={!formKendaraan?.merk || isLoading?.model}
          >
            <option disabled={true} value="">
              {isLoading?.model ? 'Mohon tunggu...' : 'Tipe...'}
            </option>
            {modelList?.map((model, index) => (
              <option key={index} value={model?.id}>
                {model?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-6 col-md-3 align-content-end">
          <label htmlFor="tahun">Tahun Kendaraan</label>
          <select
            className="custom-select font-italic"
            name="tahun"
            value={formKendaraan?.tahun}
            onChange={handleChange}
            disabled={!formKendaraan?.type || isLoading?.year}
          >
            <option disabled={true} value="">
              {isLoading?.year ? 'Mohon tunggu...' : 'Tahun...'}
            </option>
            {yearList?.map((year, index) => (
              <option key={index} value={year?.id}>
                {year?.name}
              </option>
            ))}
          </select>
        </div>
        {isLoading?.year ||
          (yearList?.length === 0 && formKendaraan?.type && (
            <div
              className="col-12 d-flex justify-content-end pt-2 text-danger"
              style={{ fontSize: '10px' }}
            >
              Tahun Kendaraan tidak tersedia untuk jenis kendaraan dan area yang anda pilih
            </div>
          ))}
        {selectedTab === 'mobil' && (
          <div className="col-12 col-md-6">
            <label htmlFor="tenor">Jenis Asuransi</label>
            <select
              className="custom-select font-italic"
              name="jenis_asuransi"
              value={formKendaraan?.jenis_asuransi}
              onChange={handleChange}
              disabled={!formKendaraan?.tahun || isLoading?.jenis_asuransi}
            >
              <option disabled={true} value="">
                {isLoading?.jenis_asuransi ? 'Mohon tunggu...' : 'Jenis Asuransi...'}
              </option>
              {dataInsuranseType?.map((insuranse, index) => (
                <option key={index} value={insuranse?.id}>
                  {insuranse?.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div className="row mb-3" style={{ rowGap: '15px' }}>
        <div className="col-6 col-md-3 align-content-end">
          <label htmlFor="min_pengajuan">Minimum pembiayaan</label>
          <input
            name="min_pengajuan"
            type="text"
            className="form-control"
            readOnly
            value={formatRupiah(formKendaraan?.min_pengajuan)}
          />
        </div>
        <div className="col-6 col-md-3 align-content-end">
          <label htmlFor="max_pengajuan">Maksimum pembiayaan</label>
          <input
            name="max_pengajuan"
            type="text"
            className="form-control"
            readOnly
            value={
              isLoading?.max_pengajuan
                ? 'Mohon tunggu...'
                : formatRupiah(formKendaraan?.max_pengajuan)
            }
            onChange={handleChange}
          />
        </div>
        <div className="col-6 col-md-3 align-content-end">
          <label htmlFor="tenor">Tenor</label>
          <select
            className="custom-select font-italic"
            name="tenor"
            value={formKendaraan?.tenor}
            onChange={handleChange}
          >
            <option disabled={true} value="">
              Tenor...
            </option>
            <option value="12">12 Bulan</option>
            <option value="24">24 Bulan</option>
            <option value="36">36 Bulan</option>
            <option value="48">48 Bulan</option>
          </select>
        </div>
        <div className="col-6 col-md-3 align-content-end">
          <label htmlFor="total_pengajuan">Pembiayaan yang diinginkan</label>
          <input
            name="total_pengajuan"
            type="text"
            className="form-control"
            min="30000000"
            max="100000000"
            step="1000000"
            value={formatRupiah(formKendaraan?.total_pengajuan)}
            onChange={handleChange}
          />
        </div>
      </div>
    </Fragment>
  );
}
Index.propTypes = {
  formKendaraan: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  dataArea: PropTypes.array.isRequired,
  dataInsuranseType: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  setFormKendaraan: PropTypes.func.isRequired,
  isLoading: PropTypes.object.isRequired,
  setIsLoading: PropTypes.func.isRequired
};
