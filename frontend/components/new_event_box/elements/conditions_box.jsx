import React from 'react';

export default class ConditionsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.condLikes,
      url: props.condLikesUrl
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({likes: nextProps.condLikes, url: nextProps.condLikesUrl});
  }

  render() {
    return (
      <div className=''>
        <p>Conditions Form</p>
      </div>
    );
  }
}
