import React from "react"
import { render, waitFor } from "@testing-library/react"
import Delay from "../index"

describe("Delay component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Delay wait={1} showLoadingAnimation={true}>
        Loaded
      </Delay>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it("execute the callback", async () => {
    const callback = jest.fn()
    const text = "Loaded"
    const { getByText } = render(
      <Delay wait={1} cb={callback} showLoadingAnimation={true}>
        <div>{text}</div>
      </Delay>
    )
    await waitFor(() => getByText(text))
    expect(callback).toHaveBeenCalled()
  })

  it("add a child element after a 1 second timeout", async () => {
    const text = "Loaded"
    const { getByText } = render(
      <Delay wait={1000} showLoadingAnimation={false}>
        <div>{text}</div>
      </Delay>
    )
    await waitFor(() => getByText(text))
    expect(getByText(text)).toHaveTextContent(text)
  })
})
