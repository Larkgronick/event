import React from 'react';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormField,
  Grommet,
  TextInput,
} from 'grommet';

const Login = () => {
  return (
    <Grommet plain>
      <Box
        direction='column'
        border={{ color: 'slategray', size: 'small' }}
        width='medium'
        height='large'
        round='small'
        pad='medium'
        // animation={{ type: 'jiggle', size: 'xlarge', duration: 2 }} // LOL, make it stop!
      >
        <Form>
          <FormField name='email' htmlFor='email' label='Email'>
            <TextInput
              id='email'
              type='text'
              name='email'
              placeholder='frank_sinatra1@email.com'
            />
          </FormField>
          {/* <div /> */}

          {/* <div /> */}
          <FormField name='password' htmlFor='password' label='Password'>
            <TextInput
              id='password'
              type='password'
              name='password'
              placeholder='**********'
            />
          </FormField>
          {/* <div /> */}
        </Form>
      </Box>
    </Grommet>
  );
};

export default Login;
