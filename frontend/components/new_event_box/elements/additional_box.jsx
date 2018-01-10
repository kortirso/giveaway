import React from 'react';

export default class AdditionalBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({});
  }

  render() {
    return (
      <div className='accordion-content' data-tab-content=''>
        <p>Additional Information</p>
      </div>
    );
  }
}
