import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../components/TodoList';

test('should test TodoList component', () => {
  const wrapper = shallow(<TodoList />);
  expect(wrapper).toMatchSnapshot();
});
