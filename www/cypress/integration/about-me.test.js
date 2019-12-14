describe("About me page", () => {
  beforeEach(() => {
    cy.visit("/about-me")
  })

  it("should have the hamburger link and the contact me link", () => {
    cy.get("[data-test=menu]").should("have.class", "hamburger")
    cy.get("[data-test=contactme]").should("have.attr", "title", "Contact me")
  })

  it("should contains Abot me h2, and experience h2", () => {
    cy.get("h2").contains("About Me!")
    cy.get("h2").contains("Experience!")
  })
})
