import React from 'react'
import { render } from "react-dom";
import {
  Route,
  Routes as Switch,
} from "react-router-dom";

import Wellcome from "../pages/Wellcome";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" element={<Wellcome />} />
      </Switch>
    </>
  )
}

export default Routes