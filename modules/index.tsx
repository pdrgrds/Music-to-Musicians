import React from 'react';
import StackPrincipalNoAutenticado from './NoAutenticado/StackPrincipalNavigation';
import StackPrincipalAutenticado from './Autenticado/StackPrincipalAutenticado';
import { connect } from 'react-redux'; 

const index = (props:any) => {
    const { isLogin, token } = props;
    console.log(token);
    return(
        token !== ''? <StackPrincipalAutenticado/> : <StackPrincipalNoAutenticado/>
    )
}

function mapStateToProps(state:any) {
    return ({
        token: state.user.userInformation.token,
        isLogin: false
    })
}

export default connect(mapStateToProps, null)(index);