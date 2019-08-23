import React from "react";

// *** ADDED IMPORTS *** //

import { Card, Icon, Image } from 'semantic-ui-react';

// ** CHARACTER CARD *** //

export default function CharacterCard({ char }) {
  return (
    <Card>
      <Image src={char.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{char.name}</Card.Header>
        <Card.Meta>{char.species}</Card.Meta>
        <Card.Description>{char.location.name}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          episodes
        </a>
      </Card.Content>
    </Card>
  );
  }
  
/* export default function CharacterCard() {
  return <span>todo: character</span>;
} */
