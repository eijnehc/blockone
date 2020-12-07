import styled from 'styled-components';

export const Tabs = styled.div`
  overflow: hidden;
  height: 60px;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  width: 50%;
  position: relative;
  height: 48px;
  color: #4c4d4d;

  font-size: 16px;
  border: ${(props) => (props.active ? '1px solid #2dbe60' : '')};
  background-color: ${(props) => (props.active ? 'white' : '#eee')};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: white;
  }
`;
