import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

export default class SubscriptionPlan extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.onPlanClick(this.props.title);
  }

  render() {
    return (
      <Grid.Column width="4" textAlign="center">
        <button className="subscriptionPlan" onClick={this.handleClick}>
          <h4 className={this.props.active ? 'planTitle active' : 'planTitle'}>
            {this.props.title}
          </h4>
          <div className={this.props.active ? 'monthlyPlan active' : 'monthlyPlan'}>
            <h5 className="planCost">
              ${this.props.cost} <span>per month</span>
            </h5>
            <ul className="planDescription">
              <li>{this.props.firstDescription}</li>
              <li>{this.props.secondDescription}</li>
              <li>Personalized Roadmap</li>
            </ul>
          </div>
        </button>
      </Grid.Column>
    );
  }
}

SubscriptionPlan.propTypes = {
  title: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  firstDescription: PropTypes.string.isRequired,
  secondDescription: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onPlanClick: PropTypes.func.isRequired,
};
