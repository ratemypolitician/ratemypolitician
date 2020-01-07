export const logoProvider = (name) => {
  const phLogo = require('./../../../../assets/parti/ph.png');
  const bnLogo = require('./../../../../assets/parti/bn.png');
  const umnoLogo = require('./../../../../assets/parti/umno.png');
  const amanahLogo = require('./../../../../assets/parti/amanah.png');
  const bebasLogo = require('./../../../../assets/parti/bebas.png');
  const dapLogo = require('./../../../../assets/parti/dap.png');
  const gpsLogo = require('./../../../../assets/parti/gps.png');
  const pasLogo = require('./../../../../assets/parti/pas.png');
  const pbbLogo = require('./../../../../assets/parti/pbb.png');
  const pbsLogo = require('./../../../../assets/parti/pbs.png');
  const pkrLogo = require('./../../../../assets/parti/pkr.png');
  const pribumiLogo = require('./../../../../assets/parti/pribumi.png');
  const suppLogo = require('./../../../../assets/parti/supp.png');
  const warisanLogo = require('./../../../../assets/parti/warisan.png');

  if (name === 'PH') {
    return phLogo;
  } else if (name === 'BN') {
    return bnLogo;
  } else if (name === 'UMNO') {
    return umnoLogo;
  } else if (name === 'AMANAH' || name === 'Amanah') {
    return amanahLogo;
  } else if (name === 'BEBAS') {
    return bebasLogo;
  } else if (name === 'DAP') {
    return dapLogo;
  } else if (name === 'GPS') {
    return gpsLogo;
  } else if (name === 'PAS') {
    return pasLogo;
  } else if (name === 'PBB') {
    return pbbLogo;
  } else if (name === 'PBS') {
    return pbsLogo;
  } else if (name === 'PKR') {
    return pkrLogo;
  } else if (name === 'PPBM') {
    return pribumiLogo;
  } else if (name === 'SUPP') {
    return suppLogo;
  } else if (name === 'WARISAN') {
    return warisanLogo;
  }
}
