export const formatRupiah = (value) => {
  return new Intl.NumberFormat('id-ID').format(value);
};

// Hapus format titik dan konversi ke angka
export const unFormatRupiah = (value) => {
  return Number(value.replace(/\./g, '')) || 0;
};

export const roundToNearestHundredMillion = (num) => {
  if (num < 100000000) {
    return Math.floor(num / 1000000) * 1000000; // Bulatkan ke juta terdekat ke bawah
  } else {
    return Math.floor(num / 1000000) * 1000000; // Bulatkan ke juta terdekat ke bawah
  }
};
