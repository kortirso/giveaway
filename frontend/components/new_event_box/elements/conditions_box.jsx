import React from 'react';

export default class ConditionsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.condLikes,
      url: props.condLikesUrl,
      comments: props.condComments
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({likes: nextProps.condLikes, url: nextProps.condLikesUrl, comments: nextProps.condComments});
  }

  // actions
  _handleChangeLikes() {
    this.props.onSetLikes(!this.state.likes);
  }

  _handleChangeLikesUrl(event) {
    this.props.onSetLikesUrl(event.target.value);
  }

  _handleChangeComments() {
    this.props.onSetComments(!this.state.comments);
  }

  // renders
  _renderCondLikes() {
    return (
      <div>
        <div className='box_input'>
          <input type='checkbox' value='true' id='like_condition' defaultChecked={this.state.likes} name='like_condition' onChange={this._handleChangeLikes.bind(this)} />
          <label htmlFor='like_condition'>Do users need to like photo?</label>
        </div>
        {this._prepareLikesUrl()}
      </div>
    );
  }

  _prepareLikesUrl() {
    return (
      <div>
        {this.state.likes &&
          <div className='input'>
            <label htmlFor='like_url'>Url for photo</label>
            <input type='text' id='like_url' value={this.state.url} onChange={this._handleChangeLikesUrl.bind(this)} />
          </div>
        }
      </div>
    );
  }

  _renderCondComments() {
    return (
      <div>
        <div className='box_input'>
          <input type='checkbox' value='true' id='comments_condition' defaultChecked={this.state.likes} name='comments_condition' onChange={this._handleChangeComments.bind(this)} />
          <label htmlFor='comments_condition'>Do users need to do comment?</label>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id='accordion'>
        <div className='card'>
          <div className='card-header' id='headingOne'>
            <h5 className='mb-0'>
              <button className='btn btn-link' data-toggle='collapse' data-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                Conditions for Likes
              </button>
            </h5>
          </div>
          <div id='collapseOne' className='collapse show' aria-labelledby='headingOne' data-parent='#accordion'>
            <div className='card-body'>
              {this._renderCondLikes()}
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-header' id='headingTwo'>
            <h5 className='mb-0'>
              <button className='btn btn-link' data-toggle='collapse' data-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
                Conditions for Comments
              </button>
            </h5>
          </div>
          <div id='collapseTwo' className='collapse' aria-labelledby='headingTwo' data-parent='#accordion'>
            <div className='card-body'>
              {this._renderCondComments()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
