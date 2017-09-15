import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/about">
            <FormattedMessage {...messages.about} />
          </HeaderLink>
          <HeaderLink to="/gallery">
            <FormattedMessage {...messages.gallery} />
          </HeaderLink>
          <HeaderLink to="/game">
            <FormattedMessage {...messages.game} />
          </HeaderLink>
           <HeaderLink to="/contact">
            <FormattedMessage {...messages.contact} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
