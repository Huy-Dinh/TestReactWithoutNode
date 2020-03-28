/*
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});


ReactDOM.render(
  <CommentBox />,
  document.getElementById('container')
);
*/
"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return e(
        'div',
        {onMouseEnter: () =>this.setState({liked: false})},
        'You clicked this');
    }

    return e(
      'button',
      { 
        onClick: () => {
          setInterval( () => {
            this.setState({ liked: true })
            console.log("chich");
          }, 2000);
        }
      },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);