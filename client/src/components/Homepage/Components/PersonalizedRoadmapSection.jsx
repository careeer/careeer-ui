import React from 'react';
import { Grid } from 'semantic-ui-react';

const PersonalizedRoadmapSection = () => (
  <Grid columns="equal" className="personalizedRoadmap">
    <Grid.Row>
      <Grid.Column width="2" />
      <Grid.Column width="14" className="sectionTitle">
        Personalized Roadmap
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="2">
        <div className="greenRectangle" />
      </Grid.Column>
      <Grid.Column width="6">
        <h2 className="ourMission">
          Choose where you<br />
          start, progress at<br />
          your own pace
        </h2>
      </Grid.Column>
      <Grid.Column width="6">
        <p className="description">
          When you sign up, you choose where your roadmap<br />
          begins, and where it ends. You might start with job<br />
          search strategy all the way through to offer negotiation.<br />
          Or, you may just sign-up for a custom education plan<br />
          to round out your skill set. Each week, you’ll complete<br />
          tasks that move your towards your goal.
        </p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default PersonalizedRoadmapSection;
