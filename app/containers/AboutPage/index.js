/*
 * AboutPage
 *
 * List all the Abouts
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import banner from './rental.jpg';
import Img from './Img';
import messages from './messages';
export default class AboutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="About Page"
          meta={[
            { name: 'description', content: 'All about Wedding Llamas' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <p>Source:  PureWoW By ABBY HEPWORTH | MAY. 1, 2017 </p>
        <Img src={banner} alt={'Wedding Llamas Image'}/>
          <p> Every little girl dreams of her perfect wedding day, complete with a long white dress, a delicious three-tiered cake and…llamas? </p> 
          <p> Hey, whatever the bride wants. </p>
          <p> If your idea of a perfect reception includes a couple of llamas (or alpacas, if you’d prefer) working the room and getting the party started,
            than that dream is now a reality thanks to Rojo the Llama and his buddies at Mountain Green Therapy Llamas and Alpacas. Yep, Rojo and pals are 
            trained therapy animals that are available to rent for celebrations (and they even come dressed for the occasion).
            And we gotta say, they are officially the greatest party addition we never knew we needed. Who wants a flower girl when you could have a llama accompany 
            you down the aisle? Can you think of a better way to squelch pre-wedding jitters than with a long-necked, four-legged friend chomping some hay out of your hand? 
            And now that we’re thinking about it, we’re not sure we’ll ever be able to have fun in the future without them. </p>
          <p>Time to make some room on the guest list. Sorry, second cousin Janice—your new boyfriend just got bumped for a llama. (We’re sure they’ll understand.)</p>
      </div>
    );
  }
}
