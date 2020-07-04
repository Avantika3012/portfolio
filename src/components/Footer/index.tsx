import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FacebookShareButton, LinkedinShareButton, TelegramShareButton, WhatsappShareButton } from 'react-share';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <LinkedinShareButton
          url="https://www.linkedin.com/in/avantika-gupta-5b7a867a"
          className="button is-outlined is-rounded linkedin"
          title="LinkedIn"
        >
          <span className="icon">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </span>
        </LinkedinShareButton>
        <FacebookShareButton
          url="https://www.facebook.com/avantika3012"
          className="button is-outlined is-rounded facebook"
        >
          <span className="icon">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </span>
        </FacebookShareButton>
        <WhatsappShareButton
          url="https://api.whatsapp.com/send?phone=7028924144&text=urlencodedtext"
          className="button is-outlined is-rounded whatsapp"
          title="WhatsApp"
        >
          <span className="icon">
            <FontAwesomeIcon icon={['fab', 'whatsapp']} />
          </span>
        </WhatsappShareButton>
        <TelegramShareButton
          url="https://t.me/@avantika_gupta"
          className="button is-outlined is-rounded whatsapp"
          title="Telegram"
        >
          <span className="icon">
            <FontAwesomeIcon icon={['fab', 'telegram']} />
          </span>
        </TelegramShareButton>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
