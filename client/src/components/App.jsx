import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClientRoadmapDashboard from './Roadmaps/RoadmapElements/ClientRoadmapDashboard';
import CoachDashboard from './Coach/Clients/CoachDashboard';
import NewClientInput from './Coach/Clients/NewClientInput';
import FreeTrialWelcome from './LandingPage/FreeTrialWelcome';
import FreeTrialClientInput from './Coach/Clients/FreeTrialClientInput';
import LongWelcome from './LandingPage/LongWelcome';
import OnBoardingIntro from './OnBoarding/OnBoardingIntro';
import OnBoardingQuestion from './OnBoarding/OnBoardingQuestion';
import OnBoardingQuestion2 from './OnBoarding/OnBoardingQuestion2';
import OnBoardingQuestion3 from './OnBoarding/OnBoardingQuestion3';
import OnBoardingName from './OnBoarding/OnBoardingName';
import OnBoardingThankYou from './OnBoarding/OnBoardingThankYou';
import DuplicateClientInput from './Coach/Clients/DuplicateClientInput';
import RedirectToCareeer from './Lib/RedirectToCareeer';

import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={RedirectToCareeer} />
    <Route exact path="/freetrial" component={FreeTrialWelcome} />
    <Route exact path="/freetrialclient" component={FreeTrialClientInput} />
    <Route exact path="/LongWelcome" component={LongWelcome} />
    <Route exact path="/OnBoarding/Intro" component={OnBoardingIntro} />
    <Route exact path="/OnBoarding/Question_1" component={OnBoardingQuestion} />
    <Route exact path="/OnBoarding/Question_2" component={OnBoardingQuestion2} />
    <Route exact path="/OnBoarding/Question_3" component={OnBoardingQuestion3} />
    <Route exact path="/OnBoarding/Name" component={OnBoardingName} />
    <Route exact path="/OnBoarding/ThankYou/:clientName" component={OnBoardingThankYou} />
    <Route exact path="/OnBoarding" component={FreeTrialWelcome} />
    <Route path="/roadmap" component={NewClientInput} />
    <Route path="/duplicate/:clientId" component={DuplicateClientInput} />
    <Route path="/clients" component={CoachDashboard} />
    <Route path="/thankyou/:clientName/:clientId" component={ClientRoadmapDashboard} />
    <Route path="/:clientId" component={ClientRoadmapDashboard} />
  </Switch>
);

export default App;
