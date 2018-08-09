/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ChatListItem from './ChatListItem';

// Return a fixed timestamp when moment().fromNow() is called
jest.mock('moment', () => () => ({ fromNow: () => '2 days ago' }));

const mockProps = {
  disabled: false,
  active: false,
  chatId: '12345',
  title: 'My Chat',
  createdAt: '2018-03-16T10:53:23.200Z',
};

describe('<ChatList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <ChatListItem {...mockProps} />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <ChatListItem {...mockProps} />
      </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders disabled', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <ChatListItem {...mockProps} disabled />
              </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders active', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <ChatListItem {...mockProps} active />
              </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
