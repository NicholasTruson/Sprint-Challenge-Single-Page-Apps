import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
// export default function TabNav() {

// };

// *** LABELS *** //

const createLabel = (iconName, labelText) => (
    <div>
      <Icon name={iconName} />
      {labelText}
    </div>
  );
  
  const welcomeLabel = createLabel('home', 'Home Page');
  const characterLabel = createLabel('users', 'Characters');
  const locationLabel = createLabel('map', 'Locations');
  const episodesLabel = createLabel('play', 'Episodes');

// *** SEMANTIC UI PANES *** //

const panes = [
    {
      menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={welcomeLabel} />
    },
    {
      menuItem: (
        <Menu.Item
          key='characters'
          as={Nav}
          to={`/characters`}
          content={characterLabel}
        />
      )
    },
    {
      menuItem: (
        <Menu.Item
          key='locations'
          as={Nav}
          to={`/locations`}
          content={locationLabel}
        />
      )
    },
    {
      menuItem: (
        <Menu.Item
          key='episodes'
          as={Nav}
          to={`/episodes`}
          content={episodesLabel}
        />
      )
    }
  ];

// *** TAB-NAV & EXPORT *** //

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />;

export default TabNav;