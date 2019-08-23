// *** IMPORTS *** //

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import WelcomePage from './WelcomePage';
import LocationsList from './LocationsList';
import EpisodeList from './EpisodeList';

// *** ROUTER *** //

export default function AppRouter() {
    return (
      <div className='router'>
        <Switch>
          <Route path='/characters' component={CharacterList} />
          <Route path='/episodes' component={EpisodeList} />
          <Route path='/locations' component={LocationsList} />
          <Route component={WelcomePage} />
        </Switch>
      </div>
    );
  }