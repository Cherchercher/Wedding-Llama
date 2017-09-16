/*
 * GamePage
 *
 * List all the Games
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import messages from './messages';
import TicTacToe from './TicTacToe.js';
require('./style.scss');
export default class GamePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="Game Page"
          meta={[
            { name: 'description', content: 'Game page of Wedding Llamas' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <TicTacToe width={ 3 } singlePlayer/>
      </div>
    );
  }
}
