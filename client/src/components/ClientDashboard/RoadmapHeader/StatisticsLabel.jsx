/* eslint-disable */
import React, { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import { Statistic } from 'semantic-ui-react';

@inject('roadmapElements')@observer
class RoadmapHeader extends PureComponent {

  render() {
    const { isBannerVisible, completedElements, incompleteElements } = this.props.roadmapElements;

    let updatedStatisticsMainValueStyle;
    let updatedStatisticsMainLabelStyle;

    if (isBannerVisible) {
      updatedStatisticsMainValueStyle = {
        color: '#03ac13',
      };
      updatedStatisticsMainLabelStyle = {
        color: '#03ac13',
      };
    } else {
      updatedStatisticsMainValueStyle = {
        color: '#949494',
      };
      updatedStatisticsMainLabelStyle = {
        color: '#949494',
      };
    }

    return (
      <Statistic.Group>
        <Statistic className="statisticFirstComponent">
          <Statistic.Value className="statisticValue" style={updatedStatisticsMainValueStyle}>
            {completedElements.length}
          </Statistic.Value>
          <Statistic.Label className="statisticLabel" style={updatedStatisticsMainLabelStyle}>
            completed actions
          </Statistic.Label>
        </Statistic>

        <Statistic className="statisticSecondComponent">
          <Statistic.Value className="statisticValue">
            {incompleteElements.length}
          </Statistic.Value>
          <Statistic.Label className="statisticLabel">
            current actions
          </Statistic.Label>
        </Statistic>
      </Statistic.Group>
    );
  }
}

export default RoadmapHeader;
