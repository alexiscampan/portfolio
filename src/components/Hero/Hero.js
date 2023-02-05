import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import PrefixedLink from '../PrefixedLink/PrefixedLink';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My personal Portfolio
      </SectionTitle>
      <SectionText>
        Hello, I'm Alexis a Junior Full Stack engineer passioned by new technologies, machine learning, and cloud developement
      </SectionText>
      <Button onClick={()=> window.location = "https://drive.google.com/file/d/1KyZe21v7X1Bz9oHkM9vB9HQQZpRzNQhL/view?usp=sharing"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;