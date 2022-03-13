import {
  Route,
  Routes as Switch,
} from "react-router-dom";

import Wellcome from "../pages/Wellcome";
import Dashboard from '../pages/Dashboard/Dashboard';
import SurveyStarts from "../pages/SurveyStart/SurveyStart";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" element={<Wellcome />} />
        <Route path="/painel" element={<Dashboard />} />
        <Route path="/pesquisa" element={<SurveyStarts />} />
      </Switch>
    </>
  )
}

export default Routes