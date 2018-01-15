import React from 'react';
import BaseDataBox from 'components/new_event_box/elements/base_data_box';
import ConditionsBox from 'components/new_event_box/elements/conditions_box';
import AdditionalBox from 'components/new_event_box/elements/additional_box';

export default class NewEventBox extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      dateEnd: '',
      url: '',
      condLikes: false,
      condLikesUrl: '',
      countWinners: 1,
      countLosers: 0
    }
  }

  componentDidMount() {
  }

  // actions
  _setBaseData(name, dateEnd, url) {
    this.setState({name: name, dateEnd: dateEnd, url: url});
  }

  _setConditions(condLikes, condLikesUrl) {
    this.setState({condLikes: condLikes, condLikesUrl: condLikesUrl});
  }

  // renders
  render() {
    return (
      <div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <BaseDataBox name={this.state.name} dateEnd={this.state.dateEnd} url={this.state.url} onSetBaseData={this._setBaseData.bind(this)} />
          </div>
          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <ConditionsBox condLikes={this.state.condLikes} condLikesUrl={this.state.condLikesUrl} onSetConditions={this._setConditions.bind(this)} />
          </div>
          <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <AdditionalBox />
          </div>
        </div>
      </div>
    );
  }
}
