import uuidv4 from 'uuid/v4';

const boss = require('./../assets/users/boss.png');
const nerd = require('./../assets/users/nerd.png');
const jedi = require('./../assets/users/jedi.png');

export const fakerReviews = [
  {
    id: uuidv4(),
    userId: 1,
    username: 'Mohammad Alimudin',
    photoURL: jedi,
    content: 'Lorem ipsum dolor sit ametLorem ipsum dolor\
    sit ametLorem ipsum dolor sit ametLorem ipsum dolor\
    sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit\
    ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
    ratings: 5,
    politicianId: 1,
    created_at: 1565028374144,
  },
  {
    id: uuidv4(),
    userId: 2,
    username: 'Abu',
    photoURL: nerd,
    content: 'Lorem ipsum dolor sit ametLorem ipsum dolor\
    sit ametLorem ipsum dolor sit ametLorem ipsum dolor\
    sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit\
    ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
    ratings: 2,
    politicianId: 2,
    created_at: 1565028374144,
  },
  {
    id: uuidv4(),
    userId: 3,
    username: 'Ahmad',
    photoURL: boss,
    content: 'Lorem ipsum dolor sit ametLorem ipsum dolor\
    sit ametLorem ipsum dolor sit ametLorem ipsum dolor\
    sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit\
    ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
    ratings: 2,
    politicianId: 2,
    created_at: 1565028374144,
  },
]
