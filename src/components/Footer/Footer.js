// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

// Define the styled components
const FooterContainer = styled.footer`
  background-color: #0f141c;
  color: #ffffff;
  text-align: center;
  padding: 1em 0;
//   position: fixed;
//   width: 100%;
//   bottom: 0;
//   left: 0;
//   border-top: 1px solid #444;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9em;
`;

const FooterLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved. |{' '}
        <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
