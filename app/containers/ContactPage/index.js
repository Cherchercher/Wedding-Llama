/*
 * ContactPage
 *
 * List all the Contacts
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ReactForm from './ReactForm'
import ListItemTitle from './ListItemTitle';

export default class ContactPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="Contact Page"
          meta={[
            { name: 'description', content: 'Contact page Wedding Llama' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <ReactForm/>
      </div>
    );
  }
}

