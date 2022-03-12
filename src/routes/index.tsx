import {
  Route,
  Routes as Switch,
} from "react-router-dom";
import Register from '../pages/Register';

import Wellcome from "../pages/Wellcome";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" element={<Wellcome />} />
        <Route path="/register" element={<Register />} />
      </Switch>
    </>
  )
}

export default Routes