import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'





import {HomeScreen, ProfileScreen, LoginAndRegisterScreen, DashBoard, FlashCardScreen, FlashCards , RegisterScreen, GenericFlashCard ,ProgressScreen, BookMarkScreen,DeckScreen} from './screens';


import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'
import { Provider } from 'react-redux'



import PrivateRoute from './components/PrivateRoute/index'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginAndRegisterScreen />} />

      <Route path='/register' element={<RegisterScreen />} />
      
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfileScreen />} />
          <Route path='/dashboard' element={<DashBoard />} /> 
          <Route path='/add-cards' element={<FlashCardScreen />} /> 
          <Route path='/flashcard/:id' element={<FlashCards />} /> 
          <Route path='/GenericFlashCard' element={<GenericFlashCard />} /> 
          <Route path='/progress' element={<ProgressScreen />} /> 
          <Route path='/bookmarks' element={<BookMarkScreen />} /> 
          <Route path= '/decks/${categoryId}' element={<DeckScreen />} /> 
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
