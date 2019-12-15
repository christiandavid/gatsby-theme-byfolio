describe("Vlooping experience page", () => {
  const h3Titles = [
    "Mobile App Development",
    "Mobile App",
    "Queue",
    "Social network",
    "Recording Messages",
    "Report Content",
  ]

  beforeEach(() => {
    cy.visit("/experience/vlooping")
    cy.wait(1000)
  })

  it("should not have the hamburger link and should not have the contact me link", () => {
    cy.get("[data-test=menu]").should("not.exist")
    cy.get("[data-test=contactme]").should("not.exist")
  })

  it("should have navigations links", () => {
    cy.get("[data-test=goback]")
      .should("exist")
      .and("have.attr", "href", "/experience")
    cy.get("[data-test=previous]").should("exist")
    cy.get("[data-test=next]").should("exist")
  })

  it("should navigate between next slides", () => {
    // Next button
    h3Titles.forEach(title => {
      cy.get("[data-test=slideshow")
        .find("[aria-hidden=true]")
        .should("be.visible")
        .find("h3")
        .contains(title)
      cy.get("[data-test=next]").click()
      cy.scrollTo(0, 0)
      cy.wait(1500)
    })
  })

  it("should navigate between previous slides", () => {
    h3Titles.push(h3Titles.shift())
    console.log("h3Titles", h3Titles)
    // Previous button
    h3Titles.reverse().forEach(title => {
      cy.get("[data-test=slideshow")
        .find("[aria-hidden=true]")
        .should("be.visible")
        .find("h3")
        .contains(title)
      cy.get("[data-test=previous]").click()
      cy.scrollTo(0, 0)
      cy.wait(1500)
    })
  })

  it("should have title content and skills content", () => {
    cy.get("[data-test=content]")
      .find("h1")
      .should("exist")
    cy.get("[data-test=content]")
      .find("h3")
      .should("exist")
    cy.get("main")
      .find("header")
      .contains("Tools used")
  })
})
