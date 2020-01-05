import uuidv4 from 'uuid/v4';

const userImage = require('./../assets/users/jedi.png');

export const fakerProfiles = [
  {
    id: uuidv4(),
    userImage: userImage,
    nama: 'YB Dr. Maszlee Malik',
    jawatan: 'Menteri',
    kementerian: 'Kementerian Pendidikan',
    tempat: 'B - 1',
    gabungan: 'Pakatan Harapan',
    parti: 'Parti Peribumi Bersatu Malaysia',
    parlimen: 'P151',
    kawasan: 'Simpang Renggam',
    negeri: 'Johor',
    phone: '07-7550217',
    email: 'email@kementerian.com',
    address: '37, JALAN WAWASAN, PUSAT PERNIAGAAN WAWASAN, 86200 SIMPANG RENGGAM, JOHOR',
    ratings: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, \
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur \
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt \
    mollit anim id est laborum.',
  },
]
