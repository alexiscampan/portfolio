import React from 'react';
import { DiAngularSimple, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { SiTensorflow, SiPlotly, SiJenkins, SiKubernetes } from 'react-icons/si';
import { GrDocker, GrGolang } from 'react-icons/gr';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with many different technologies in Web, Data/ML, DevOps, and Cloud.
    </SectionText>
    <List>
      <ListItem>
        <div>
          <DiReact size="3rem" />
          <DiAngularSimple size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Web-dev</ListTitle>
          <ListParagraph>
            Experience with <br />
            Next.js/React.js and Angular
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <SiTensorflow size="3rem" style={{marginRight:"5px"}} />
          <SiPlotly size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>data/ML</ListTitle>
          <ListParagraph>
            Experience with <br />
            Pandas, Tensorflow and Dash/Plotly
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <SiJenkins size="3rem" style={{marginRight:"5px"}} />
          <GrDocker size="3rem" style={{marginRight:"5px"}} />
          <SiKubernetes size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Cloud/DevOps</ListTitle>
          <ListParagraph>
            Experience with <br />
            Golang, Jenkins, Docker and Kubernetes
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
  </Section>
);

export default Technologies;
