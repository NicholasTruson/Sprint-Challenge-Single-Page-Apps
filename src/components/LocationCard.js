import React from "react";

// *** ADDED IMPORTS *** //

import { Card } from 'semantic-ui-react';

// *** LOCATION CARD *** //

export default function LocationCard({ local }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{local.name}</Card.Header>
        <Card.Meta>{local.type}</Card.Meta>
        <Card.Meta>{local.dimension}</Card.Meta>
        <Card.Description> {local.created}</Card.Description>
      </Card.Content>
    </Card>
  );
  }

/* export default function LocationCard({ name, type, dimension, residents }) {
  return <span>todo: location</span>;
} */


