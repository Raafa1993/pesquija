import React from 'react'
import { render } from "react-dom";
import {
  Route,
  Routes as Switch,
} from "react-router-dom";

import Wellcome from "../pages/Wellcome";
import Dashboard from '../pages/Dashboard/Dashboard';

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" element={<Wellcome />} />
        <Route path="/painel" element={<Dashboard />} />
      </Switch>
    </>
  )
}

export default Routes