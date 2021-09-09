import React from 'react'
import { Box, Card, Image, Heading, Text, Flex } from 'rebass'
import { NavLink } from 'react-router-dom'
import bunkerDownImage from '../images/600x900BunkerDown.png'
import dInfinityImage from '../images/D20Image.png'
import resumeImage from '../images/ResumeImage.png'
import blackjackImage from '../images/BlackjackImage.png'
import Boop from './Boop.js'

var projects = {//"Resume": {"type":"Master Resume", "image":resumeImage, "Link": '/Resume'},
                //"Bunker Down": {"type":"Video Game", "image":bunkerDownImage, "Link": '/BunkerDown'},
                //"DInfinity": {"type":"Video Game", "image":dInfinityImage, "Link": '/DInfinity'},
                "Blackjack AI": {"type": "Neural Network", "image":blackjackImage, "Link": './BlackjackAI'},
                "Charter Project": {"type": "SQL React Project", "image":resumeImage, "Link": './CharterProject'},

               }


var cards = []
const ProjectCards = () => {
  if (cards.length === 0) {
    for (var project in projects) {
      cards.push(getProjectCard(project))
    }
  }
  return (
    <Flex style={containerStyle}>
    {cards}
    </Flex>
  )
};

const containerStyle = {
  flexWrap: 'wrap',
  justifyContent: 'center'
}

const cardStyle = {
  p:1,
  borderRadius: 10,
  background: '#1F2833',
  boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
  marginTop: '5%'
}

const imageStyle = {
  height:"300px",
  display:"block",
  margin:"auto",
  paddingTop: '5%'
}

const nameStyle = {
  fontFamily:"Arial",
  color:"#66FCF1"
}

const typeStyle = {
  textAlign:"center",
  color:"#66FCF1",
  fontSize: 15
}

function getProjectCard(project) {
  return (
    <Boop moveAmount={-10} scaleAmount={1.1} timing={200} mx='auto'>
      <Box margin='10px'>
        <NavLink exact activeClassName="current" to={projects[project]["Link"]}>
          <Box width={256} mx='auto'>
            <Card style={cardStyle}>
                <Image src={projects[project]["image"]} style={imageStyle}/>
              <Box px={2}>
                <Heading style={nameStyle}>
                  {project}
                </Heading>
                <Text style={typeStyle}>
                  {projects[project]["type"]}
                </Text>
              </Box>
            </Card>
          </Box>
        </NavLink>
      </Box>
    </Boop>
  );
}

export default ProjectCards;
