/* eslint-env jest */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Chat from './Chat';

jest.mock('./ChatMessageList', () => () => 'ChatMessageList');
jest.mock('./MessageInput', () => () => 'MessageInput');

const mockProps = {
  activeUser: {
    firstName: 'Name',
    lastName: 'Surname',
    username: 'username',
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  activeChat: {
    _id: '12345',
    title: 'My Chat',
  },
  messages: [
    {
      chatId: '12345',
      content: 'content',
      sender: {},
      createdAt: '2018-03-16T10:53:23.200Z',
    },
  ],
  joinChat: jest.fn(),
  isConnected: true,
  sendMessage: jest.fn(),
};

describe('<Chat />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Chat {...mockProps} />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly ', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <Chat {...mockProps} />
              </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
