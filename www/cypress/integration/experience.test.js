describe("Experience page", () => {
  beforeEach(() => {
    cy.visit("/experience")
    cy.wait(1000)
  })

  it("should have the hamburger link and the contact me link", () => {
    cy.get("h1").contains("Work Experience")
    cy.get("[data-test=menu]").should("have.class", "hamburger")
    cy.get("[data-test=contactme]").should("have.attr", "title", "Contact me")
  })

  it("should show a list of jobs", () => {
    cy.get("[data-test=jobs]")
      .find(">div")
      .should($div => {
        expect($div.length, "more that 1 item").to.be.greaterThan(1)
      })

    cy.get("[data-test=jobs]")
      .find(">div a")
      .each($el => {
        console.log($el.attr("href"))
        expect($el.attr("href")).to.match(/^\/experience\//)
      })
  })

  it("should has data-year attribute", () => {
    cy.get("[data-test=jobs]")
      .find(">div")
      .filter("[data-year]")
      .each($el => {
        assert.isNumber(
          parseInt($el.attr("data-year"), 10),
          "data-year is a number"
        )
      })
  })

  it("should display all jobs in small, medium and big screen", () => {
    const sizes = [554, 762, 1000]
    sizes.forEach(width => {
      cy.viewport(width, 720)

      cy.get("[data-test=jobs]")
        .find(">div a")
        .each($el => {
          cy.wrap($el).should("be.visible")
        })
    })
  })
})
