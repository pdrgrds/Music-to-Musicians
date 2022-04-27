import * as facebookAPI from './facebook/index.facebook';
import * as userAPI from './user/index.user';

export default ({
    facebookAPI: (token:string) => facebookAPI.GRAPH_FACEBOOK(token),
    USER_REGISTER_API: (data:object) => userAPI.USER_REGISTER(data),
    USER_LOGIN_API: (data:object) => userAPI.USER_LOGIN(data)
});