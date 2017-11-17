import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import CareeerLogo from '../Lib/CareeerLogo';
import CreateForm from './CreateForm';

const New = () => (
  <div className="createAccountPage">
    <CareeerLogo />
    <Link to="/signIn" className="signInLink">Sign In</Link>
    <Grid
      textAlign="center"
      verticalAlign="middle"
    >
      <CreateForm buttonLabel="Create account" />
    </Grid>
  </div>
);

export default New;
