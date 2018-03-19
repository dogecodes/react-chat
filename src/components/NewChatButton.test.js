/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NewChatButton from './NewChatButton';

const mockProps = {
  onClick: jest.fn(),
  disabled: false,
};

describe('<NewChatButton />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewChatButton {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders button', () => {
    const tree = renderer.create(<NewChatButton {...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders disabled button', () => {
    const tree = renderer.create(<NewChatButton {...mockProps} disabled />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
