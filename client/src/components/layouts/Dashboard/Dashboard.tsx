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
        <Box className='DashboardContent__title'>
          <Heading>Trending Events</Heading>
        </Box>

        <Box
          className='DashboardContent'
          width='95%'
          height='95%'
          direction='row'
          justify='between'
          background='seagreen'
        >
          <Box className='DashboardContent__navigation'>
            <Anchor>Explore</Anchor>
            <Anchor>My Events</Anchor>
            <Anchor>Manage Events</Anchor>
          </Box>

          {/* <Box className='DashboardContent__title' background='pink' height="15%" margin={{left: '3.5%'}}>
            <Heading textAlign='center'>Trending Events</Heading>
            <Text textAlign='center'>Center</Text>
          </Box> */}

          <Box
            className='DashboardContent__trendingSearches'
            round
            elevation='small'
            // width=''
            basis='12%'
            height='15%'
            direction='row'
            justify='between'
            align='start'
            pad='medium'
            wrap
            background='white'
          >
            <Anchor size='small'>#Hashtag</Anchor>
            <Anchor size='small'>#Hashtag</Anchor>
            <Anchor size='small'>#Hashtag</Anchor>
            <Anchor size='small'>#Hashtag</Anchor>
            <Anchor size='small'>#Hashtag</Anchor>
            <Anchor size='small'>#Hashtag</Anchor>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};

export default Dashboard;

// [P L E A S E   R E A D]

// What's up! Please take a look at "center" when changing your browser's zoom level.

// There is an issue with flexbox, where increasing the width of the "trending searches component",
// pushes the main header text to left, resulting in the main heading being off-center.

// One solution would be to add CSS position: absolute; to the "trending searches" container on the right side.
