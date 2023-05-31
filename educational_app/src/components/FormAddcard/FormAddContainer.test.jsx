import React from 'react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import FormAddcard from '.'
describe('Form Card', () => {
  beforeEach(() => {
    render(<FormAddcard />)
  })

  afterEach(() => {
    cleanup()
  })

  it('should have a content label', () => {
    const content = screen.getByRole('label', { name: 'Content' })
    expect(content).toBeInTheDocument()
  })

  it('should have an answer label', () => {
    const answer = screen.getByRole('label', { name: 'Answer' })
    expect(answer).toBeInTheDocument()
  })

  it('should have an add button', () => {
    const addButton = screen.getByRole('button', { name: 'Add' })
    expect(addButton).toBeInTheDocument()
  })
})
