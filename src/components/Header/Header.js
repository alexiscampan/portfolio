import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiElixir } from 'react-icons/si';
import PrefixedLink from '../PrefixedLink/PrefixedLink';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container> 
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color:"white", marginBottom:"20px" }}>
          <SiElixir size="3rem" style={{marginRight:"5px"}}/> <Span> Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <PrefixedLink href="#projects">
          <NavLink>Projects</NavLink>
        </PrefixedLink>
      </li>
      <li>
        <PrefixedLink href="#tech">
          <NavLink>Technologies</NavLink>
        </PrefixedLink>
      </li>
      <li>
        <PrefixedLink href="#about">
          <NavLink>About</NavLink>
        </PrefixedLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/alexiscampan">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/alexis-campan-34b291197/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/acamzyzz/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
