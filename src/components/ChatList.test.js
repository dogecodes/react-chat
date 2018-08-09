/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatList from './ChatList';

jest.mock('./ChatListItem', () => ({ chatId }) => `ChatListItem-${chatId}`);
// Return a fixed timestamp when moment().fromNow() is called
jest.mock('moment', () => () => ({ fromNow: () => '2 days ago' }));

const mockProps = {
  chats: [
    {
      _id: '12345',
      title: 'First chat',
      createdAt: '2018-03-16T10:53:23.200Z',
    },
    {
      _id: '54321',
      title: 'Second chat',
      createdAt: '2018-03-16T10:53:23.200Z',
    },
  ],
  activeChat: {
    _id: '12345',
  },
  disabled: false,
};

describe('<ChatList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatList {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ChatList {...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without chats', () => {
    const tree = renderer.create(<ChatList {...mockProps} chats={[]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
