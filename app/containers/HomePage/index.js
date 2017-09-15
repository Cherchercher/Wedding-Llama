/*
 * GalleryPage
 *
 * List all the Gallerys
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Iframe from 'react-iframe'
import H1 from 'components/H1';
import H3 from 'components/H3';
import messages from './messages';
export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }
  
  render() {
    return (
      <div>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'Home page of Wedding Llama' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>     
        <iframe width="100%" height="395" src="https://www.youtube.com/embed/QWMwzqzfqY4" frameBorder="0" allowFullScreen></iframe>
        <H3>
          <FormattedMessage {...messages.LlamaHeader} />
        </H3>     
        <p>
          <FormattedMessage {...messages.LlamaMessage} />
        </p>
      </div>
    );
  }
}
