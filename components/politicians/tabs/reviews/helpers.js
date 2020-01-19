import React from 'react';
import uuidv4 from 'uuid/v4';
import { fakerReviews } from './../../../../data/fakerReviews';

export const reviews = fakerReviews;

const userImage = require('./../../../../assets/users/jedi.png');

export const ratingCalculator = (fetchResult) => {
  const totalfive = fetchResult.filter(review => review.ratings == 5).length;
  const totalfour = fetchResult.filter(review => review.ratings == 4).length;
  const totalthree = fetchResult.filter(review => review.ratings == 3).length;
  const totaltwo = fetchResult.filter(review => review.ratings == 2).length;
  const totalone = fetchResult.filter(review => review.ratings == 1).length;

  const weightedfive = totalfive * 5;
  const weightedfour = totalfour * 4;
  const weightedthree = totalthree * 3;
  const weightedtwo = totaltwo * 2;
  const weightedone = totalone * 1;

  const sumWeighted = weightedfive + weightedfour + weightedthree + weightedtwo + weightedone;
  const totalReviews = fetchResult.length;
  const overallRating = (sumWeighted/totalReviews).toFixed(1);

  const fiveStar = ((totalfive/totalReviews)*198) + 2;
  const fourStar = ((totalfour/totalReviews)*198) + 2;
  const threeStar = ((totalthree/totalReviews)*198) + 2;
  const twoStar = ((totaltwo/totalReviews)*198) + 2;
  const oneStar = ((totalone/totalReviews)*198) + 2;

  return [overallRating, oneStar, twoStar, threeStar, fourStar, fiveStar];
}

export const newReview = (attrs = {}) => {
  const review = {
    id: uuidv4(),
    content: attrs.content || 'Content',
    ratings: attrs.ratings || 1,
    username: attrs.username || 'Ali',
    userImage: attrs.userImage || userImage,
    created_at: attrs.created_at || (new Date()).getTime(),
  }
  return review;
}
