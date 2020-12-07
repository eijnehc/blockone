import styled from 'styled-components';

export const Alert = styled.div`
  padding: 20px;
  background-color: ${(props) => props.color};
  color: white;
  font-size: 20px;

  span {
    margin-left: 15px;
    color: white;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`;
