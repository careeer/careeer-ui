import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Responsive, Icon } from 'semantic-ui-react';

const Header = props => (
  <section className="mainHeader">
    <div className="contentContainer">
      <Responsive maxWidth={700}>
        <Icon link size="big" name="bars" onClick={props.onMenuClick} />
      </Responsive>
      <div className="leftLinks">
        <Link to="/" className="careeer">
          Careeer!
        </Link>
        <Link to="/about" className="aboutLink">
          About
        </Link>
        <a
          role="link"
          tabIndex="0"
          className="pricingLink"
          onClick={props.handlePricingClick}
        >
          Pricing
        </a>
      </div>
      <div className="rightLinks">
        <button className="signUpLink">
          <a href="https://app.acuityscheduling.com/schedule.php?owner=13659144&appointmentType=3401046">
            Get Started
          </a>
          {/* <Link to="/createAccount">Get Started</Link> */}
        </button>
      </div>
    </div>
  </section>
);

Header.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
  handlePricingClick: PropTypes.func.isRequired,
};

export default Header;
