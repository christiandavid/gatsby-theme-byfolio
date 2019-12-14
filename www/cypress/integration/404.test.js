describe("404", () => {
  beforeEach(() => {
    cy.visit("/not-existing-page", {
      failOnStatusCode: false,
    })
    cy.get("button")
      .contains("Preview custom 404 page")
      .click()
  })

  it("should have the hamburger link and the contact me link", () => {
    cy.get("[data-test=menu]").should("have.class", "hamburger")
    cy.get("[data-test=contactme]").should("have.attr", "title", "Contact me")
  })

  it("should have a page not found, and a link to go to home page", () => {
    cy.get("h1").contains("Page not found")
    cy.get("[data-test=404]")
      .find("a")
      .should("have.attr", "href", "/")
  })
})
