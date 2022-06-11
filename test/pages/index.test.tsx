import React from 'react'
import { render, screen, fireEvent } from '../testUtils'
import App from '../../pages/_app'

describe('Home page', () => {
  // it('matches snapshot', () => {
  //   const { asFragment } = render(<Home />, {})
  //   expect(asFragment()).toMatchSnapshot()
  // })

  // it('clicking button triggers alert', () => {
  //   const { getByText } = render(<Home />, {})

  //   window.alert = jest.fn()
  //   fireEvent.click(getByText('Test Button'))
  //   expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  // })


describe('Home', () => {
  it('renders a heading', () => {
    render(<App />)

    const heading = screen.getByRole('heading', {
      name: /Dapp server not configured correctly/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
})
