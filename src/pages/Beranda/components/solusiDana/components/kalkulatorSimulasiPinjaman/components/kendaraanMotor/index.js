'use client';

import React, { Fragment } from 'react';
import FormKendaraan from '../formKendaraan';
import PropTypes from 'prop-types';

export default function Index(props) {
  const { formKendaraan, onChange, dataArea, dataInsuranseType, selectedTab, setFormKendaraan } =
    props;

  return (
    <Fragment>
      <FormKendaraan
        show="motor"
        formKendaraan={formKendaraan}
        onChange={onChange}
        dataArea={dataArea}
        dataInsuranseType={dataInsuranseType}
        selectedTab={selectedTab}
        setFormKendaraan={setFormKendaraan}
      />
    </Fragment>
  );
}

Index.propTypes = {
  formKendaraan: PropTypes.object.isRequired, // Pastikan sesuai dengan struktur form
  onChange: PropTypes.func.isRequired, // Callback function
  dataArea: PropTypes.array.isRequired, // Jika ini array
  dataInsuranseType: PropTypes.array.isRequired, // Jika ini array
  selectedTab: PropTypes.string.isRequired, // Misalnya string
  setFormKendaraan: PropTypes.func.isRequired // Callback function
};
