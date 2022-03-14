import {
  Route,
  Switch,
} from "react-router-dom";
import Confirmation from "../pages/Confirmation";
import Register from '../pages/Register';
import PrivateRoutes from './PrivateRoutes';

import Wellcome from "../pages/Wellcome";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Dashboard from '../pages/Dashboard/Dashboard';
import SurveyStarts from "../pages/SurveyStart/SurveyStart";
import SurveyFinish from "../pages/SurveyFinish/SurveyFinish";
import Question from "../pages/Question";

function Routes() {
  return (
    <>
      <Switch>
        <PrivateRoutes path="/" exact component={Wellcome} />
        <PrivateRoutes path="/login" component={SignIn} />
        <PrivateRoutes path="/register" component={Register} />
        <PrivateRoutes path="/confirmation" component={Confirmation} />
        <PrivateRoutes path="/home" component={Home} isPrivate />
        <PrivateRoutes path="/painel" component={Dashboard} />
        {/* <PrivateRoutes path="/pesquisa" component={SurveyStarts} /> */}
        <Route path="/pesquisa" component={SurveyStarts} />
        <Route path="/fim-pesquisa" component={SurveyFinish} />
        <PrivateRoutes path="/painel" component={Dashboard} isPrivate />
        <PrivateRoutes path="/pesquisa" component={SurveyStarts} isPrivate />
        <PrivateRoutes path="/questao" component={Question} isPrivate />
      </Switch>
    </>
  )
}

export default Routes