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

  render() {
    return (
      <div className=''>
        <p>Base Data Form</p>
      </div>
    );
  }
}
