import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'
import { Provider } from 'react-redux'

import {
  HomeScreen,
  ProfileScreen,
  LoginAndRegisterScreen,
  DashBroad,
  AddCard,
  LoginScreen,
  RegisterScreen,
} from './screens'

import PrivateRoute from './components/PrivateRoute/index'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginAndRegisterScreen />} />

      {/* <Route path='/register' element={<RegisterScreen />} /> */}
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='/dashbroad' element={<DashBroad />} />
        <Route path='/add-cards' element={<AddCard />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
