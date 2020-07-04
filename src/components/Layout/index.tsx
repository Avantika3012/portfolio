import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';

import Header from 'components/Header';
import Footer from 'components/Footer';


import 'assets/styles/global.css';
import GlobalStyles from 'assets/styles/globalStyles';
import * as Styled from './styles';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(63, 237, 162)'
  }
};

interface Props {
  children: React.ReactNode;
}

const Add = <div>+</div>;

const mainButtonStyles = {
  backgroundColor: 'rgba(0, 204, 255, 0.85)'
};
const position = {
  bottom: 24,
  right: 24
};

const messageBox = (
  <div>
    <i className="far fa-comment-dots" />
  </div>
);
const divStyle = {
  color: 'white'
}

const downloadButton = (
  <div>
    <a href="https://drive.google.com/file/d/1KZosTw4CORBL17OsUQmCmuPQr0vLL0rP/view?usp=sharing" target="_blank" style={divStyle}><i className="fa fa-download" /></a>
  </div>
);



const profile = (
  <div>
    <a href="https://www.linkedin.com/in/avantika-gupta-5b7a867a" target="_blank" style={divStyle}><i className="fa fa-user" /></a>
  </div>
);

const Layout: React.FC<Props> = ({ children }) => {
  const [showComponent, setShowComponent] = useState('false');

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const handleEmailOnClick = () => {
    setShowComponent('true');
  };

  const handleModalClose = (event: any) => {
    setShowComponent('false');
  };

  return (
    <>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous"
      />
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Styled.Layout>
          <Header siteTitle={data.site.siteMetadata.title} />
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            {children}
            
            <Fab mainButtonStyles={mainButtonStyles} position={position} icon={Add} event="click">
              <Action onClick={handleEmailOnClick} children={messageBox} text="Drop me a message" />
              <Action children={downloadButton} text="Download Resume" />
              <Action children={profile} text="LinkedIn Profile" />
            </Fab>
            {showComponent === 'true' ? (
              <ReactModal
                isOpen={showComponent == 'true'}
                onRequestClose={handleModalClose}
                contentLabel="Example Modal In Gatsby"
                style={customStyles}
              >
                <button onClick={handleModalClose} className="close">
                  x
                </button>
                <br />
                <h4>Get in touch!!</h4>
                <form className="form" action="https://www.flexyform.com/f/[YouFormKey]" method="post">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name"  required/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control"  placeholder="name@example.com" required/>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control"  placeholder="Your Message" rows="3" required></textarea>
                  </div>
                  <ul className="actions" >
                    <li>
                      <button type="submit"  className="btn btn-info">Send</button>
                    </li>
                  </ul>
                </form>
              </ReactModal>
            ) : null}
            <Footer />
          </motion.div>
        </Styled.Layout>
      </AnimatePresence>
    </>
  );
};

export default Layout;
