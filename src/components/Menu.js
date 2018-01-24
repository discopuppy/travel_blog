import React from 'react';
import { Link } from 'react-router-dom';
import ArticlesPage from './ArticlesPage';
import ReactDOM from 'react-dom';


class Menu extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleOutsideClick = this.handleOutsideClick.bind(this);
      this.handleClick = this.handleClick.bind(this);
  
      this.state = {
        popupVisible: false
      };
    }

    handleClick() {
      if (!this.state.popupVisible) {
          document.addEventListener('click', this.handleOutsideClick, false);
      } else {
          document.removeEventListener('click', this.handleOutsideClick, false);
      }
      this.setState(prevState => ({
         popupVisible: !prevState.popupVisible,
      }));
    }

    handleOutsideClick(e) {
        if (this.node.contains(e.target)) {
          return;
        }
        this.handleClick();
    }
  
    render(props) {
      return (
        <div
            className="noneYet"
            ref={node => { this.node = node }}
        >
          <h3
            onClick={this.handleClick}
            className="header__menu"
          >
            Menu
          </h3>
          {this.state.popupVisible && (
            <div className="popover">
              <Link to="/">Home</Link>
              <Link to="/articles">Articles</Link>
              <a href="#">Inspirting Quotes</a>
              <a href="#">Best Pics</a>
              <a href="#">About Me</a>
              <a href="/video.html">Video</a>
              <a href="#">Contact Zac</a>
           </div>
           )}
        </div>
      );
    }
}

/* <a onClick={() => this.props.history.push('/articles')}>Link</a> */

export default Menu;