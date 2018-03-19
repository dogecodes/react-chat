/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import LoginForm from './LoginForm';

const mockProps = {
  onSubmit: jest.fn(),
};

describe('<LoginForm />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginForm {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<LoginForm {...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
