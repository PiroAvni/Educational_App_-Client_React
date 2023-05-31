import React from 'react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux' // Assuming you have a Redux provider
import matchers from '@testing-library/jest-dom/matchers'
import configureStore from 'redux-mock-store'

expect.extend(matchers)

import Header from '../Header/index'

const mockStore = configureStore()
const store = mockStore({
  auth: {
    userInfo: {
      name: 'Avni',
    },
  },
})

describe('Header component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    )
  })

  it('should render logo', () => {
    const logoElement = screen.getByAltText('logo')
    expect(logoElement).toBeInTheDocument()
  })

  it('should have flashcard navbar item', () => {
    const flashcard = screen.getAllByText('Add Flashcards')[0]
    expect(flashcard).toBeInTheDocument()
  })

  it('should have Dashboard navbar item', () => {
    const dashboard = screen.getAllByText('DashBroad')[0]
    expect(dashboard).toBeInTheDocument()
  })

  it('should display user name on dropdown menu', () => {
    const userName = 'Avni'

    const dropdownToggle = screen.getAllByText(userName)[0]
    userEvent.click(dropdownToggle)
  })
})
