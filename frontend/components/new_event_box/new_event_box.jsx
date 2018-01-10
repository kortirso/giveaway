import React from 'react';
import BaseDataBox from 'components/new_event_box/elements/base_data_box';
import ConditionsBox from 'components/new_event_box/elements/conditions_box';
import AdditionalBox from 'components/new_event_box/elements/additional_box';
import "foundation-sites";
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
      countWinners: 1,
      countLosers: 0
    }
  }

  componentDidMount() {
    $('.accordion').foundation();
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
      <ul className='accordion' data-accordion='' data-allow-all-closed='true' data-multi-expand='true'>
        <li className='accordion-item is-active' data-accordion-item=''>
          <a className='accordion-title'>Base Data</a>
          <BaseDataBox name={this.state.name} dateEnd={this.state.dateEnd} url={this.state.url} onSetBaseData={this._setBaseData.bind(this)} />
        </li>
        <li className='accordion-item' data-accordion-item=''>
          <a className='accordion-title'>Conditions Form</a>
          <ConditionsBox condLikes={this.state.condLikes} condLikesUrl={this.state.condLikesUrl} onSetConditions={this._setConditions.bind(this)} />
        </li>
        <li className='accordion-item' data-accordion-item=''>
          <a className='accordion-title'>Additional Information</a>
          <AdditionalBox />
        </li>
      </ul>
    );
  }
}
