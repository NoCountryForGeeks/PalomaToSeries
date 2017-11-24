import React from 'react';
import { Master } from '../master';
import { shallow } from 'enzyme';
import { NavButton } from '../../shared'

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Master />);
});

describe('Master', () => {
    test('should be enclosured in a div', () => {
        expect(wrapper.is('div')).toBeTruthy();
    });

    test('should have two children, a div and a NavButton component', () => {
        const children = wrapper.children();
        expect(children.first().is('div')).toBeTruthy();
        expect(children.last().getElement()).toEqual(<NavButton content='Go to Details!' target='detail'/>);
    });

    test('should print "Master page"', () => {
        expect(wrapper.children().first().text()).toBe('Master page');
    });

    test('should render the first children DOM node using a class main', () => {
        expect(wrapper.children().first().hasClass('main')).toBeTruthy();
    });

    test('should render a <NavButton/> component once', () => {
        expect(wrapper.find(NavButton)).toHaveLength(1);
    });

    test('should be rendered as expected', () => {
        const desiredRendered = shallow(
            <Master />
        );

        expect(desiredRendered).toMatchSnapshot();
    });
});
