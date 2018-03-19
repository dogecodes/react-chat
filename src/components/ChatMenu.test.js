/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatMenu from './ChatMenu';

const mockProps = {
  activeUser: {
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  disabled: false,
  onLeaveClick: jest.fn(),
  onDeleteClick: jest.fn(),
};

describe('<ChatMenu />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatMenu {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ChatMenu {...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
