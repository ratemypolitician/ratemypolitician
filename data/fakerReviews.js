import uuidv4 from 'uuid/v4';

const userImage = require('./../assets/users/jedi.png');

export const fakerReviews = [
  {
    id: uuidv4(),
    username: 'Ali',
    userImage: userImage,
    content: 'Lorem ipsum dolor sit ametLorem ipsum dolor\
    sit ametLorem ipsum dolor sit ametLorem ipsum dolor\
    sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit\
    ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
    ratings: 5,
    created_at: 1565028374144,
  },
  {
    id: uuidv4(),
    username: 'Ali',
    userImage: userImage,
    content: 'Lorem ipsum dolor sit ametLorem ipsum dolor\
    sit ametLorem ipsum dolor sit ametLorem ipsum dolor\
    sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit\
    ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
    ratings: 2,
    created_at: 1565028374144,
  },
]
