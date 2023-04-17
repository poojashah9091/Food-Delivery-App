import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './components/Homepage';
// import RestaurantPage from './components/RestaurantPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Homepage/>
      },
      // {
      //   path: "/restaurant/:restaurantId",
      //   element: <RestaurantPage/>
      // }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
    <RouterProvider router={appRouter}/>
  </Provider>
);
reportWebVitals();
