import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutScreen from "./screens/about";
import CharactersScreen from "./screens/characters";
import AuthorScreen from "./screens/author";
import PageNotFoundScreen from "./screens/pagenotfound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={AboutScreen} />
      <Route exact path="/sobre" component={AboutScreen} />
      <Route exact path="/personagens" component={CharactersScreen} />
      <Route exact path="/autor" component={AuthorScreen} />
      <Route exact path="/dragonball-fansite" component={AboutScreen} />{" "}
      {/* "/dragonball-fansite" é para o github-pages, evitando erro 404 */}
      <Route path="*" component={PageNotFoundScreen} />
    </Switch>
  );
};

export default Routes;
