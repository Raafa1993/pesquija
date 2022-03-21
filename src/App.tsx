import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./hooks/Auth";
import Routes from "./routes";
import { GlobalStyles } from "./styles/global";
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <>
      <BrowserRouter>
          <AuthProvider>
            <ToastProvider>
              <Routes />
            </ToastProvider>
          </AuthProvider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
