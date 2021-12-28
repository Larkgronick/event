import React from 'react';
import { Anchor, Box, Grommet, Heading, Text } from 'grommet';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <Grommet full background='aliceblue'>
      <Box
        height='100%'
        width='100%'
        direction='column'
        align='center'
        justify='center'
        background='orange'
      >
        <Box background='purple'>
          <Text textAlign='center'>Center</Text>
        </Box>
        <Box
          width='95%'
          height='95%'
          direction='row'
          justify='between'
          background='seagreen'
          // alignSelf='center'
        >
          <Box>
            <Anchor>Explore</Anchor>
            <Anchor>My Events</Anchor>
            <Anchor>Manage Events</Anchor>
          </Box>

          {/* <Box margin={{ left: '17.5%' }} background='pink'> */}
          <Box background='pink' margin={{ left: '17%' }}>
            {/* <Heading textAlign='center'>Trending Events</Heading> */}
            <Text textAlign='center'>Center</Text>
          </Box>

          {/* <Box direction='column' width='25%' height='15%'> */}
          <Box
            className='trending-searches'
            round
            elevation='small'
            width='25%'
            height='15%'
            direction='row'
            justify='between'
            align='center'
            // alignContent='end'
            wrap
            pad='medium'
          >
            <Anchor>Hashtag</Anchor>
            <Anchor>Hashtag</Anchor>
            <Anchor>Hashtag</Anchor>
            <Anchor>Hashtag</Anchor>
            <Anchor>Hashtag</Anchor>
            <Anchor>Hashtag</Anchor>
            <Anchor>Hashtag</Anchor>
            <Anchor>Hashtag</Anchor>
            <Anchor>Hashtag</Anchor>
            <Anchor>Hashtag</Anchor>
            <Anchor>Hashtag</Anchor>
            <Anchor>Hashtag</Anchor>
          </Box>
          {/* </Box> */}
        </Box>
      </Box>
    </Grommet>
  );
};

export default Dashboard;
