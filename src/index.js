import React,{lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Movies from './Components/Movies';
import Browse from './Components/Browse';
import Tv from './Components/Tv';
import People from './Components/People';
import Details from './Components/Details';
// import Search from './Components/Search';
import DetailsMovie1 from './Components/DetailsMovie1';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import appStore from './ReduxStore/appStore';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const Movies = lazy(()=>import('./Components/Movies'))
const Search = lazy(()=>import('./Components/Search'))

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
          element: <Tv />,
        },
        {
          path:"/people",
          element: <People />,
        },
        {
          path: "/details/:session/:id",
          element: <Details />,
        },
        {
          path:"/details/:id",
          element: <DetailsMovie1 />,
        },
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
