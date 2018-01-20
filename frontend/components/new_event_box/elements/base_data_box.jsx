import React from 'react';

export default class BaseDataBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      dateEnd: props.dateEnd,
      url: props.url
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({name: nextProps.name, dateEnd: nextProps.dateEnd, url: nextProps.url});
  }

  // actions
  _handleChangeName(event) {
    this.props.onSetBaseData(event.target.value, this.state.dateEnd, this.state.url);
  }

  _handleChangeUrl(event) {
    this.props.onSetBaseData(this.state.name, this.state.dateEnd, event.target.value);
  }

  // checks
  _checkValuePresent(value) {
    if(value != '') return 'present';
  }

  // renders
  render() {
    return (
      <div>
        <div className='input required'>
          <label htmlFor='for_name'>Name of Event</label>
          <input type='text' id='for_name' className={this._checkValuePresent(this.state.name)} value={this.state.name} onChange={this._handleChangeName.bind(this)} />
        </div>
        <div className='input required'>
          <label htmlFor='for_url'>Url for photo</label>
          <input type='text' id='for_url' className={this._checkValuePresent(this.state.url)} value={this.state.url} onChange={this._handleChangeUrl.bind(this)} />
        </div>
      </div>
    );
  }
}
