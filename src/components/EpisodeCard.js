// *** ADDED IMPORTS *** //

import React from 'react';
import { Card } from 'semantic-ui-react';

// *** EPISODE CARD *** //

export default function EpisodeCard({ epi }) {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{epi.name}</Card.Header>
          <Card.Meta>{epi.air_date}</Card.Meta>
          <Card.Description> {epi.id}</Card.Description>
        </Card.Content>
      </Card>
    );
  }