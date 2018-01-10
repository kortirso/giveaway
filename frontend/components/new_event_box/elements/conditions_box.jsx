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

  // actions
  _handleChangeLikes() {
    this.props.onSetConditions(!this.state.likes, this.state.url);
    this.setState({likes: !this.state.likes});
  }

  _handleChangeLikesUrl(event) {
    this.props.onSetConditions(this.state.likes, event.target.value);
    this.setState({url: event.target.value});
  }

  // renders
  _renderCondLikes() {
    return (
      <div className='block'>
        <div className='block_input'>
          <label htmlFor='like_condition'>Do users need to like photo?</label>
          <input type='checkbox' value='true' id='like_condition' defaultChecked={this.state.likes} name='like_condition' onChange={this._handleChangeLikes.bind(this)} />
        </div>
        {this._prepareLikesUrl()}
      </div>
    );
  }

  _prepareLikesUrl() {
    if(this.state.likes) {
      return (
        <div>
          <label htmlFor='like_url'>Url for photo</label>
          <input type='text' id='like_url' value={this.state.url} onChange={this._handleChangeLikesUrl.bind(this)} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className='accordion-content' data-tab-content=''>
        <div className='grid-x'>
          <div className='cell small-4'>
            {this._renderCondLikes()}
          </div>
        </div>
      </div>
    );
  }
}
