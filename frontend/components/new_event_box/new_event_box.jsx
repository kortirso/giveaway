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
      name: '1',
      dateEnd: '2',
      url: '3',
      condLikes: false,
      condLikesUrl: '',
      countWinners: 1,
      countLosers: 0
    }
  }

  componentDidMount() {
    $('.accordion').foundation();
  }

  render() {
    return (
      <main className=''>
        <ul className='accordion' data-accordion='' data-allow-all-closed='true' data-multi-expand='true'>
          <li className='accordion-item is-active' data-accordion-item=''>
            <a className='accordion-title'>Base Data</a>
            <div className='accordion-content' data-tab-content=''>
              <BaseDataBox name={this.state.name} dateEnd={this.state.dateEnd} url={this.state.url} />
            </div>
          </li>
          <li className='accordion-item' data-accordion-item=''>
            <a className='accordion-title'>Conditions Form</a>
            <div className='accordion-content' data-tab-content=''>
              <ConditionsBox condLikes={this.state.condLikes} condLikesUrl={this.state.condLikesUrl} />
            </div>
          </li>
          <li className='accordion-item' data-accordion-item=''>
            <a className='accordion-title'>Additional Information</a>
            <div className='accordion-content' data-tab-content=''>
              <AdditionalBox />
            </div>
          </li>
        </ul>
      </main>
    );
  }
}
