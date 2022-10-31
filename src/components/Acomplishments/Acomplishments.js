import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Learned Languages'},
  { number: 2, text: 'Years of enterprise experience', },
  { number: 5, text: 'Years working with data', },
  { number: 10, text: 'Countries visited', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personnal Accompishments
    </SectionTitle>
    <Boxes>
      {data.map((card, index)=>(
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
