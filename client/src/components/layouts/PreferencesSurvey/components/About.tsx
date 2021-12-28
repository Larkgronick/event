import React from 'react';
import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  Heading,
  Meter,
  Text,
  TextInput,
} from 'grommet';

export default function About() {
  return (
    <Grommet full>
      <Box height='90%' direction='column' justify='evenly' align='center'>
        {/* <Text alignSelf='end' size='xxsmall'>
          logo
        </Text> */}
        <Heading size='large'>
          Welcome to <em>event</em>
        </Heading>
        <Heading size='small'>
          Tell us a little about <em>yourself...</em>
        </Heading>
        <Box elevation='small' round>
          <Meter
            values={[
              {
                value: 20,
                label: '1/5',
                onClick: () => {},
              },
            ]}
            aria-label='meter'
            round
          />
        </Box>
        <Form>
          <Box
            direction='column'
            justify='around'
            width='medium'
            height='medium'
            // round='small'
            pad='medium'
            // margin={{top: 'large'}}
            // elevation='large'
          >
            <FormField name='username' htmlFor='username' label='Forename'>
              <TextInput
                id='forename'
                type='text'
                name='forename'
                placeholder='Frank'
              />
            </FormField>
            <FormField name='username' htmlFor='username' label='Surname'>
              <TextInput
                id='surname'
                type='text'
                name='surname'
                placeholder='Sinatra'
              />
            </FormField>
            <FormField name='username' htmlFor='username' label='Username'>
              <TextInput
                id='username'
                type='text'
                name='username'
                placeholder='frank_sinatra1'
              />
            </FormField>
            <Box elevation='medium' round='large' margin={{ top: '10%' }}>
              <Button primary color='gold' label='Submit' />
            </Box>
          </Box>
        </Form>
      </Box>
    </Grommet>
  );
}

{
  /* <Box
            direction='row'
            justify='center'
            align='center'
            height='100vh'
            animation='fadeIn'
          >
            
            
          </Box> */
}
