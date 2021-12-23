import React from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormField,
  Grommet,
  Text,
  TextInput,
} from 'grommet';
import { Facebook, Google } from 'grommet-icons';

const Login = () => {
  // let googleLogo = document.getElementById('logo_google');

  return (
    <Grommet full background='aliceblue'>
      <Form>
        <Box
          direction='row'
          justify='center'
          align='center'
          height='100vh'
          animation='fadeIn'
        >
          <Box
            direction='column'
            justify='around'
            width='medium'
            height='32rem'
            round='small'
            pad='medium'
            elevation='large'
          >
            <FormField name='email' htmlFor='email' label='Email'>
              <TextInput
                id='email'
                type='text'
                name='email'
                placeholder='frank_sinatra@email.com'
              />
            </FormField>

            <FormField name='password' htmlFor='password' label='Password'>
              <TextInput
                id='password'
                type='password'
                name='password'
                placeholder='**********'
              />
            </FormField>

            <Box elevation='medium' round='large'>
              <Button primary color='gold' label='Login' />
            </Box>
            <Box elevation='medium' round='large'>
              <Button primary color='mediumaquamarine' label='Signup' />{' '}
              {/* This Signup button, ought to have an onclick function, that reveals additional inputs for registration, i.e, Username, Confirm Password, etc */}
            </Box>
            <Text size='small' alignSelf='center' textAlign='center'>
              Signup via
            </Text>
            <Box
              width='8rem'
              direction='row'
              justify='evenly'
              alignSelf='center'
            >
              <Button>
                <Facebook color='plain' size='30rem' />
              </Button>
              <Button
                id='logo_google'
                onMouseEnter={() => {
                  // googleLogo.style.color = "blue";
                }}
              >
                {' '}
                {/* Intend to create a fuction that translate */}
                <Google color='plain' size='30rem' />
              </Button>
            </Box>
          </Box>
        </Box>
      </Form>
    </Grommet>
  );
};

export default Login;
