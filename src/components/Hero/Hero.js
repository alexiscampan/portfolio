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
        Hello, I'm Alexis a Junior Full Stack engineer passionate by new technologies, machine learning, and cloud development
      </SectionText>
      <Button onClick={()=> window.location = "https://drive.google.com/file/d/1PCh7MVkX2LxMcn0FmoQ8YXG39PsJroOf/view?usp=sharing"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;