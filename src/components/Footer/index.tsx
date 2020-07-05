import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconStyle = {
  color: 'black',
  padding: '5px'
}

const Footer: React.FC = () => (
  <Styled.Footer className="resume-footer">
    <Container>
      <Styled.Links>
        <a href="https://www.linkedin.com/in/avantika-gupta-5b7a867a" style={iconStyle} target="_blank">
          <span className="icon">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </span>
        </a>
        <a href="https://www.facebook.com/avantika3012" style={iconStyle} target="_blank">
          <span className="icon">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </span>
        </a>
        <a href="https://api.whatsapp.com/send?phone=7028924144" style={iconStyle} target="_blank">
          <span className="icon">
            <FontAwesomeIcon icon={['fab', 'whatsapp']} />
          </span>
        </a>
        <a href="https://t.me/@avantika_gupta" style={iconStyle} target="_blank">
          <span className="icon">
            <FontAwesomeIcon icon={['fab', 'telegram']} />
          </span>
        </a>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
