/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SignupForm from './SignupForm';

const mockProps = {
  onSubmit: jest.fn(),
};

describe('<SignupForm />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignupForm {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<SignupForm {...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
