import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Movies from './Components/Movies';
import Browse from './Components/Browse';
import Tv from './Components/Tv';
import People from './Components/People';
import Details from './Components/Details';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import appStore from './ReduxStore/appStore';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

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
          element: <Movies />,
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
      ]
    },
    
  ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={appStore}>
        {/* <App /> */}
        <RouterProvider router={appRouter} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
