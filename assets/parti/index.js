const phLogo = require('./ph.png');
const bnLogo = require('./bn.png');
const umnoLogo = require('./umno.png');
const amanahLogo = require('./amanah.png');
const bebasLogo = require('./bebas.png');
const dapLogo = require('./dap.png');
const gpsLogo = require('./gps.png');
const pasLogo = require('./pas.png');
const pbbLogo = require('./pbb.png');
const pbsLogo = require('./pbs.png');
const pkrLogo = require('./pkr.png');
const ppbmLogo = require('./pribumi.png');
const suppLogo = require('./supp.png');
const warisanLogo = require('./warisan.png');
const upkoLogo = require('./upko.png');

export const logoProvider = (name) => {
  let loweredCaseName = name.toLowerCase();

  switch (loweredCaseName) {
    case 'ph' : return phLogo;
    case 'bn' : return bnLogo;
    case 'amanah' : return amanahLogo;
    case 'bebas' : return bebasLogo;
    case 'umno' : return umnoLogo;
    case 'dap' : return dapLogo;
    case 'gps' : return gpsLogo;
    case 'pas' : return pasLogo;
    case 'pbb' : return pbbLogo;
    case 'pbs' : return pbsLogo;
    case 'pkr' : return pkrLogo;
    case 'ppbm' : return ppbmLogo;
    case 'supp' : return suppLogo;
    case 'warisan' : return warisanLogo;
    case 'upko' : return upkoLogo;
  }
}
