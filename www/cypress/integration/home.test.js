describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("open contact me and close it", () => {
    cy.get("[data-test=contactme]").click()
    cy.get(".contact").should("have.class", "contactme-open")
    cy.wait(500)
    cy.get("[data-test=contactmeClose]").click()
    cy.get(".contact").should("not.have.class", "contactme-open")
  })

  it("check content in contact me when it's open", () => {
    cy.get("[data-test=contactme]").click()
    cy.contains(".contactme-info", "Get in touch with me on")
    cy.wait(500)
    cy.get("[data-test=contactmeClose]").click()
    cy.get(".contact").should("not.have.class", "contactme-open")
  })

  it("open hamburguer menu and close it", () => {
    cy.get(".hamburger")
      .click()
      .should("have.class", "is-opened-navi")
    cy.wait(1500)
    // Close menu
    cy.get(".hamburger")
      .click()
      .should("not.have.class", "is-opened-navi")
  })

  it("search for 4 links, and close it", () => {
    cy.get(".hamburger").click()
    cy.wait(1000)
    // Count Links
    cy.get("[data-test=menulinks]")
      .find("a.is-opened")
      .should($a => {
        expect($a, "4 items").to.have.length(4)
        expect($a.eq(0), "first item").to.contain("Home")
        expect($a.eq(1), "second item").to.contain("Experience")
        expect($a.eq(2), "thrid item").to.contain("Skills")
        expect($a.eq(3), "fourth item").to.contain("About Me")

        expect($a.eq(0).attr("href"), "Home link").to.eq("/")
        expect($a.eq(1).attr("href"), "Experience link").to.eq("/experience")
        expect($a.eq(2).attr("href"), "Skills link").to.eq("/skills")
        expect($a.eq(3).attr("href"), "About Me link").to.eq("/about-me")
      })
  })
})
