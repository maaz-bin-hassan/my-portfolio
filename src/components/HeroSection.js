import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
function HeroSection() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>About me</Accordion.Header>
        <Accordion.Body>
I am a dedicated software engineering student currently studying at Sukkur IBA.
  My journey in software engineering has been marked by a strong work
 ethic and a passion for continuous learning.
As a student at Sukkur IBA, I am immersed in a challenging academic
 environment that provides me with a solid foundation in computer
  science and software engineering. I actively engage in both classroom
   learning and hands-on experiences to gain practical insights intothe field.
Beyond my academic pursuits, I am deeply involved in the world
 of software development. I am driven by a relentless curiosity,
  always exploring new technologies and staying abreast of industry trends. My goal is to leverage this knowledge to create innovative solutions that contribute meaningfully to the tech industry.
I am excited about the opportunities to apply my skills,
 push the boundaries of what is possible, and make a positive impact through technology. My commitment to hard work and continuous improvement fuels my ambition to excel in the ever-evolving field of software engineering
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}

export default HeroSection;