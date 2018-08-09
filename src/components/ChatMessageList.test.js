/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ChatMessageList from './ChatMessageList';

// Return a fixed timestamp when moment().fromNow() is called
jest.mock('moment', () => () => ({ fromNow: () => '2 days ago' }));

const mockProps = {
  messages: [
    {
      _id: '123foo321',
      chatId: '12345',
      content: 'Hello, World!',
      sender: {
        _id: '12345',
        username: 'me',
      },
      createdAt: '2018-03-16T10:53:23.200Z',
    },
    {
      _id: '321bar123',
      chatId: '12345',
      content: 'Hello, React!',
      sender: {
        _id: '54321',
        username: 'someone',
      },
      createdAt: '2018-03-16T10:53:23.200Z',
    },
  ],
  activeUser: {
    _id: '12345',
    username: 'me',
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
};

describe('<ChatMessageList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter initialEntries={['/chat']}>
        <Route
          path="/chat/:chatId?"
          render={props => <ChatMessageList {...mockProps} {...props} />}
        />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders paper', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/chat']}>
        <Route
          path="/chat/:chatId?"
          render={props => <ChatMessageList {...mockProps} {...props} />}
        />
      </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders messages', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/chat/12345']}>
        <Route
          path="/chat/:chatId?"
          render={props => <ChatMessageList {...mockProps} {...props} />}
        />
              </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without messages', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/chat/12345']}>
        <Route
          path="/chat/:chatId?"
          render={props => <ChatMessageList {...mockProps} {...props} messages={[]} />}
        />
              </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
