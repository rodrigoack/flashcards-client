import React from 'react';
import Button from 'react-toolbox/lib/button/Button';
import GithubIcon from './GithubIcon';

const authorizeUrl = 'https://github.com/login/oauth.authorize';
const clientId = 'foobar';
const scope = 'user';

const LoginButton = () => (
  <Button
    raised
    accent
    href={`${authorizeUrl}?client_id=${clientId}&scope=${scope}`}
  >
    <GithubIcon />
    {' '}
    Login with GitHub
  </Button>
)

export default LoginButton;
