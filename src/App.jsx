import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
} from 'react-router-dom'
import HomePage from './pages/HomePage';
import TagManager from "react-gtm-module";
import { useEffect } from "react"


const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={ <HomePage />} />)
);

function App() {

  useEffect(() => {

    //Trigger the first pageview manually
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        page: window.location.pathname + window.location.search,
      },
    });

  }, []);

      return (
        <>
        <RouterProvider router={router} />
        </>
      );
    }

export default App