const userImage = require('./../assets/users/jedi.png');

function sleep(duration = 0){
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  })
}

export const fetchProfile = async () => {
  await sleep(500);

  const user = {
    id: 1,
    username: 'Ali',
    password: 'ali123',
    phone: '0123456789',
    email: 'ali@email.com',
    location: 'Malaysia',
    gender: 'Male',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, \
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur \
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt \
    mollit anim id est laborum.',
    status: 'Available',
    userImage: userImage,
  }

  return user;
}

export const fetchProfileProducts = async () => {

}

export const fetchProfileFavorites = async () => {

}

export const fetchProfileChats = async () => {

}

export const fetchProfileReviews = async () => {

}
