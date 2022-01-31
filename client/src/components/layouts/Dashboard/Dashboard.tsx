import React from 'react';
import { Anchor, Box, Grommet, Heading, Stack, Text } from 'grommet';
import '../../../App.css';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <Grommet full background='aliceblue'>
      <Box
        height='100%'
        width='100%'
        direction='column'
        align='center'
        justify='start'
        // background='orange'
      >
        <Box direction='column' align='center' width='95%' height='100%'>
          <Box
            className='DashboardContent'
            width='100%'
            height='100%'
            direction='column'
            justify='start'
            align='center'
            background='seagreen'
          >
            <Box width='100%' height='20%' background='orange' margin={{top: "1%"}}>
              <Stack anchor='top'>
                <Box direction='row' width='100%' justify='between'>
                  <Box className='DashboardContent__navigation'>
                    <Anchor>Explore</Anchor>
                    <Anchor>My Events</Anchor>
                    <Anchor>Manage Events</Anchor>
                  </Box>

                  <Box
                    className='DashboardContent__trendingSearches'
                    round
                    elevation='small'
                    width='10%'
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

                <Box className='DashboardContent__title'>
                  <Heading>Trending Events</Heading>
                </Box>
              </Stack>
            </Box>
              <Box className='Divider' />
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};

export default Dashboard;
