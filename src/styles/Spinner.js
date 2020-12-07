import styled, { keyframes } from 'styled-components';

export const loader = keyframes`
   0% {
    box-shadow:
      -20px 20px 0 #000,
      -20px -20px 0 #000,
      20px -20px 0 #000
  }
  25% {
    box-shadow:
      20px 20px 0 #000,
      -20px -20px 0 #000,
      20px -20px 0 #000;
  }
  50% {
    box-shadow:
      20px 20px 0 #000,
      -20px 20px 0 #000,
      20px -20px 0 #000;
  }
  75% {
    box-shadow:
      20px 20px 0 #000,
      -20px 20px 0 #000,
      -20px -20px 0 #000;
  }
  100% {
    box-shadow:
      20px -20px 0 #000,
      -20px 20px 0 #000,
      -20px -20px 0 #000;
  }
`;

export const loaderInner = keyframes`
  0% {
    height: 0%;
  }

  25% {
    height: 0%;
  }

  50% {
    height: 100%;
  }

  75% {
    height: 100%;
  }

  100% {
    height: 0%;
  }
`;

export const Spinner = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: 0px;
  margin-top: 0px;
  height: 20px;
  width: 20px;
  animation: ${loader} 1s infinite;
`;

export const InnerSpinner = styled.div`
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: #2dbe60;
  animation: ${loaderInner} 2s infinite ease-in;
`;
