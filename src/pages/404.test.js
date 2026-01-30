import * as React from "react"
import { render, screen } from "@testing-library/react"
import NotFoundPage, { Head } from "../pages/404"

// Mock de componentes Gatsby comunes
jest.mock("../components/layout", () => ({ children }) => (
  <div data-testid="layout">{children}</div>
))

jest.mock("../components/seo", () => props => (
  <div data-testid="seo">{props.title}</div>
))

describe("404 Page", () => {
  it("renders the 404 heading", () => {
    render(<NotFoundPage />)

    expect(
      screen.getByRole("heading", { name: /404: not found/i })
    ).toBeInTheDocument()
  })

  it("renders the not found message", () => {
    render(<NotFoundPage />)

    expect(
      screen.getByText(/you just hit a route that doesn’t exist/i)
    ).toBeInTheDocument()
  })

  it("wraps content with Layout component", () => {
    render(<NotFoundPage />)

    expect(screen.getByTestId("layout")).toBeInTheDocument()
  })

  it("renders SEO title in Head", () => {
    render(<Head />)

    expect(screen.getByTestId("seo")).toHaveTextContent("404: Not Found")
  })
})
