import React,{lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Browse from './Components/Browse';
import Contact from './Components/Contact';
import Details from './Components/Details';
// import DetailsMovie1 from './Components/DetailsMovie1';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import appStore from './ReduxStore/appStore';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const Movies = lazy(()=>import('./Components/Movies'))
const Search = lazy(()=>import('./Components/Search'))
const Television = lazy(()=>import('./Components/Television'))

const appRouter = createBrowserRouter(
  [
    {
      path:"/",
      element: <App />,
      children: [
        {
          path:"/",
          element: <Browse />,
        },
        {
          path:"/movies",
          element: <Suspense fallback={<h1>Loading..</h1>}><Movies /></Suspense>,
        },
        {
          path:"/tv",
          element: <Suspense fallback = {<h1>Loading...</h1>}><Television /></Suspense>,
        },
        {
          path:"/contact",
          element: <Contact />,
        },
        {
          // here session is movie/tv/people this will pass to <Details /> component
          path: "/details/:session/:id",
          element: <Details />,
        },
        // {
        //   path:"/details/:id",
        //   element: <DetailsMovie1 />,
        // },
        {
          path:"/search",
          element: <Suspense fallback={<h1>Loading...</h1>}><Search /></Suspense>,
        }
      ]
    },
    
  ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={appStore}>
        <RouterProvider router={appRouter} />
  </Provider>
);


reportWebVitals();
