import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages/HomePage";
import WeatherPage from "../pages/WeatherPage";
import PhotosPage from "../pages/PhotosPage";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/weather" component={WeatherPage} />
        <Route path="/photos" component={PhotosPage} />
        <Route path="/" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
