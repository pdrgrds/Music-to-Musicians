import axios from 'axios';
import * as Constants from './../constants';

export const USER_REGISTER = (data: any) => {
  return new Promise((resolve: Function, reject: Function) => {
    axios
      .post(Constants.USER_REGISTER, data, {})
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const USER_LOGIN = (data: any) => {
  return new Promise((resolve: Function, reject: Function) => {
    axios
      .post(Constants.USER_LOGIN, data, {})
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};
