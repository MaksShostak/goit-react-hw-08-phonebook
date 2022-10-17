import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const Header = styled.header`
  box-shadow: rgba(15, 16, 17, 0.827) 0px 10px 10px -10px;
  padding: 20px;
  display: flex;

  justify-content: space-between;
`;

export const Text = styled.p`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Footer = styled.footer`
  /* display: block; */
  margin: 0 auto;
  padding: 20px;
`;
export const Link = styled.a`
  color: crimson;
  :hover {
    color: rgb(131, 5, 30);
  }
`;
