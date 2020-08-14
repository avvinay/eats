import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Appbar from './Appbar';
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';
import Orders from '../Orders/Orders';
import {Provider} from 'react-redux';

configure({adapter: new Adapter()});

describe( '<Appbar />', () => {
    it('should render 3 component if authenticated', () => {
        const wrapper = shallow(<Provider><Appbar isUserLoggedIn /></Provider>);
        expect(wrapper.find(Cart)).toHaveLength(1);
        expect(wrapper.find(Profile)).toHaveLength(1);
        expect(wrapper.find(Orders)).toHaveLength(1);
        
    });
});