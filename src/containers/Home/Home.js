import React from 'react';
import Appbar from '../../components/Appbar/Appbar';
import Dishes from '../../components/Dishes/Dishes';
import SignIn from '../../components/SignIn/SignIn';
import {connect} from 'react-redux';

const Home = (props) => {

    let Comp = props.user.isUserLogged ? <Dishes /> : <SignIn />;

    return (
        <React.Fragment>
            <Appbar />
            {Comp}
        </React.Fragment>
        
    );
};

const mapStateToProps = state => {
    return {
        user: state.cart
    }
}

export default connect(mapStateToProps,null)(Home);