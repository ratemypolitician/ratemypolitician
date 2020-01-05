let state = {

  isFetchingProfile: true,
  profile: {},

  isFetchingProfileProducts: true,
  profileProducts: [],

  isFetchingProfileFavorites: true,
  profileFavorites: [],

  isFetchingProfileChats: true,
  profileChats: [],

  isFetchingProfileReviews: true,
  profileReviews: [],

  // isFetchingProfileRecommendations: true,
  // ProfileRecommendations: [],
  //
  // isFetchingCategories: true,
  // categories: [],
  //
  // isFetchingNewItems: true,
  // newItems: [],
  //
  // isFetchingNewSellers: true,
  // newSellers: [],
  //
  // isFetchingTrendingItems: true,
  // trendingItems: [],

  error: false,
};

const listeners = [];

export default {
  getState(){
    return state;
  },
  setState(newState){
    state = { ...state, ...newState };
    listeners.forEach(listener => listener());
  },
  onChange(newListener){
    listeners.push(newListener);
    return () => listeners.filter(listener => listener !== newListener);
  },
};
