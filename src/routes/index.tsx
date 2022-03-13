import {
  Switch,
} from "react-router-dom";
import Confirmation from "../pages/Confirmation";
import Register from '../pages/Register';
import PrivateRoutes from './PrivateRoutes';

import Wellcome from "../pages/Wellcome";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

function Routes() {
  return (
    <>
      <Switch>
        <PrivateRoutes path="/" exact component={Wellcome} />
        <PrivateRoutes path="/login" component={SignIn} />
        <PrivateRoutes path="/register" component={Register} />
        <PrivateRoutes path="/confirmation" component={Confirmation} />
        <PrivateRoutes path="/home" component={Home} isPrivate />
      </Switch>
    </>
  )
}

export default Routes