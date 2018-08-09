/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import UserMenu from './UserMenu';

const mockProps = {
  activeUser: {
    firstName: 'First',
    lastName: 'Name',
    username: 'Surname',
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  disabled: false,
  onEditProfileClick: jest.fn(),
  onLogoutClick: jest.fn(),
};

describe('<UserMenu />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserMenu {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<UserMenu {...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders disabled', () => {
    const tree = renderer.create(<UserMenu {...mockProps} disabled />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
