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
  return (
    <Grommet full background='aliceblue'>
      <Box direction='row' justify='center' align='center' height='100vh'>
        <Box
          direction='column'
          justify='evenly'
          // border={{ color: 'slategray', size: 'small' }}
          width='medium'
          height='medium'
          round='small'
          pad='medium'
          elevation='large'
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

            <FormField name='password' htmlFor='password' label='Password'>
              <TextInput
                id='password'
                type='password'
                name='password'
                placeholder='**********'
              />
            </FormField>

            <Box
              border={{
                color: 'mediumvioletred',
                size: 'small',
                style: 'solid',
                side: 'all',
              }}
              elevation='medium'
              round='large'
            >
              <Button primary color='gold' label='Login'></Button>
            </Box>
          </Form>
          <Text size='small' alignSelf='center' textAlign='center'>
            Signup via
          </Text>
          <Box width='8rem' direction='row' justify='evenly' alignSelf='center'>
            <Button>
              <Facebook color='plain' size='30rem'></Facebook>
            </Button>
            <Button>
              <Google color='plain' size='30rem'></Google>
            </Button>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};

export default Login;
