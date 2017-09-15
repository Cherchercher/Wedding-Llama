/*
 * GalleryPage
 *
 * List all the Gallerys
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Gallery from 'react-photo-gallery';
import H1 from 'components/H1';
import messages from './messages';
export default class GalleryPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }  
  render() {
    return (
      <div>
        <Helmet
          title="Media Page"
          meta={[
            { name: 'description', content: 'Media page of Wedding Llama' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Gallery photos={PHOTO_SET} onClick={this.openLightbox}/>
      </div>
    );
  }
}

const PHOTO_SET = [
 {
    src: ' https://i.pinimg.com/736x/1a/d3/5d/1ad35d2d7f3ec9da85f6454108c897da.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 1',
  },
  {
    src: 'https://static.boredpanda.com/blog/wp-content/uploads/2017/04/BTFAAA1Al4f-1-png__700.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2',
  },
   {
    src: 'https://s.yimg.com/iu/api/res/1.2/p09lUAhwgyE6D_is3qCowA--~C/cm90YXRlPWF1dG87dz05NjA7YXBwaWQ9eXZpZGVv/https://s.yimg.com/ea/img/-/170428/5902cfa1ec2b5_86group.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 3',
  },
  {
    src: 'https://www.easyweddings.com.au/articles/wp-content/uploads/sites/5/2017/04/16788776_402481446781849_3016062207189319680_n.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 4',
  },
  {
    src: 'https://static1.squarespace.com/static/56a2644225981dbe8510f2d5/572e06104d088ea3a8f0b14c/5877e21fd482e93a5dd01002/1484251691426/Ashbourne+wedding3.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'Llama Love Image 5',
  },
  {
    src: 'https://images.britcdn.com/wp-content/uploads/2017/05/feature4.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'Llama Love Image 6',
  },
];
