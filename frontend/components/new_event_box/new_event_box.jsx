import React from 'react';
import BaseDataBox from 'components/new_event_box/elements/base_data_box';
import ConditionsBox from 'components/new_event_box/elements/conditions_box';
import AdditionalBox from 'components/new_event_box/elements/additional_box';
const $ = require("jquery");

export default class NewEventBox extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      dateEnd: '',
      url: '',
      condLikes: false,
      condLikesUrl: '',
      condComments: false,
      countWinners: 1,
      countLosers: 0
    }
  }

  // actions
  _setBaseData(name, dateEnd, url) {
    this.setState({name: name, dateEnd: dateEnd, url: url});
  }

  _setLikes(condLikes) {
    this.setState({condLikes: condLikes});
  }

  _setLikesUrl(condLikesUrl) {
    this.setState({condLikesUrl: condLikesUrl});
  }

  _setComments(condComments) {
    this.setState({condComments: condComments});
  }

  _saveForm() {
    $.ajax({
      method: 'POST',
      url: '../events.json',
      data: {event: {name: this.state.name, url: this.state.url}, conditions: {likes: {present: this.state.condLikes, url: this.state.condLikesUrl}, comments: {present: this.state.condComments}}},
      success: (result) => {
      }
    });
  }

  // renders
  render() {
    return (
      <div className='new_event_form'>
        <ul className='nav nav-tabs' id='myTab' role='tablist'>
          <li className='nav-item'>
            <a className='nav-link active' id='home-tab' data-toggle='tab' href='#home' role='tab' aria-controls='home' aria-selected='true'>Event</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' id='profile-tab' data-toggle='tab' href='#profile' role='tab' aria-controls='profile' aria-selected='false'>Conditions</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' id='contact-tab' data-toggle='tab' href='#contact' role='tab' aria-controls='contact' aria-selected='false'>Additional</a>
          </li>
        </ul>
        <div className='tab-content' id='myTabContent'>
          <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
            <BaseDataBox name={this.state.name} dateEnd={this.state.dateEnd} url={this.state.url} onSetBaseData={this._setBaseData.bind(this)} />
          </div>
          <div className='tab-pane fade' id='profile' role='tabpanel' aria-labelledby='profile-tab'>
            <ConditionsBox condLikes={this.state.condLikes} condLikesUrl={this.state.condLikesUrl} condComments={this.state.condComments} onSetLikes={this._setLikes.bind(this)} onSetLikesUrl={this._setLikesUrl.bind(this)} onSetComments={this._setComments.bind(this)} />
          </div>
          <div className='tab-pane fade' id='contact' role='tabpanel' aria-labelledby='contact-tab'>
            <AdditionalBox />
          </div>
        </div>
        <div className='save_button'>
          <button type='button' className='btn btn-primary' onClick={this._saveForm.bind(this)}>Save Event</button>
        </div>
      </div>
    );
  }
}
