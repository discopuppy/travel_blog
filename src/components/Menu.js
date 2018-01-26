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
          <div
            onClick={this.handleClick}
            className="header__menu"
          >
            <img src="/images/menubars.png" width='22px' height='22px' style={{}} />
            <div style={{ }}>Menu</div>
          </div>
          {this.state.popupVisible && (
            <div className="popover">
              <Link to="/" onClick={this.handleClick}>Home</Link>
              <Link to="/articles" onClick={this.handleClick}>Articles</Link>
              <Link to="/construction" onClick={this.handleClick}>Inspirting Quotes</Link>
              <Link to="/construction" onClick={this.handleClick}>Best Pics</Link>
              <Link to="/construction" onClick={this.handleClick}>About Me</Link>
              <a href="/video.html" onClick={this.handleClick}>Video</a>
              <Link to="/construction" onClick={this.handleClick}>Contact Zac</Link>
           </div>
           )}
        </div>
      );
    }
}

/* <a onClick={() => this.props.history.push('/articles')}>Link</a> */

export default Menu;