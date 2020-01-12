import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Footer = (props) => {
  return (
    <ButtonGroup>
      <Button>Prev Page</Button>
      <Button>ToP Page</Button>
      <Button>Next Page</Button>
    </ButtonGroup>
  );
}

export default Footer;