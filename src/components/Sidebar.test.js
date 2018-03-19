/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Sidebar from './Sidebar';

jest.mock('./ChatList', () => () => 'ChatList');
jest.mock('./NewChatButton', () => () => 'NewChatButton');

const mockProps = {
  chats: {
    active: {},
    my: [],
    all: [],
  },
  createChat: jest.fn(),
  isConnected: true,
};

describe('<Sidebar />', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sidebar {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Sidebar {...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
