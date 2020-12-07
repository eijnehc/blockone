import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  background-color: white;
  text-align: center;
  width: 100%;
  color: #4c4d4d;
  margin-bottom: 50px;

  thead > tr {
    height: 40px;
    font-size: 18px;
    color: #4c4d4d;
    background-color: #dae2e4;
    border-top: 2px solid #7d7d7d;
    border-bottom: 2px solid #7d7d7d;
    cursor: pointer;
  }

  tbody tr {
    height: 60px;
    padding: 16px 24px;
    border-bottom: 3px solid #e9eff0;
    :hover {
      background-color: #dae2e4;
    }
  }
`;
