import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dishes from './Dishes';
import Dish from './Dish/Dish';

configure({adapter: new Adapter()});

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Dishes />);
});

describe( '<Dishes />', () => {
    it('should render 12 Dish elements', () => {
        expect(wrapper.find(Dish)).toHaveLength(12); 
    });
});