import axios from 'axios';
import * as Constants from './../constants';

export const GRAPH_FACEBOOK = (token:string) => {
    return(
        new Promise((resolve:Function, reject:Function) => {
            axios.get(Constants.GRAPH_FACEBOOK + token)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
        })
    )
}