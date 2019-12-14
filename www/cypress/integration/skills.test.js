const checkItems = [0, 1, 2, 3, 4, 5]
const itemsLength = checkItems.length

describe("Skills page", () => {
  beforeEach(() => {
    cy.visit("/skills")
    cy.wait(1000)
  })

  it("should have the hamburger link and should not have the contact me link", () => {
    cy.get("h2").contains("Skills")
    cy.get("[data-test=menu]").should("have.class", "hamburger")
    cy.get("[data-test=contactme]").should("not.exist")
  })

  it("should show a list of skills", () => {
    cy.get("[data-test=skills]").within(() => {
      cy.root()
        .find(">li")
        .should($li => {
          expect(
            $li.length,
            `more that ${itemsLength} items`
          ).to.be.greaterThan(itemsLength)
        })

      cy.scrollTo(0, 210)
      checkItems.forEach(item => {
        cy.root()
          .get("li")
          .eq(item)
          .should("be.visible")
      })
    })
  })

  it("should detect skills in the beginning and in end", () => {
    cy.get("[data-test=skills]").within(() => {
      cy.root()
        .find(">li")
        .should("contain", "React")
        .and("contain", "React Native")
        .and("contain", "Gatsby")
        .and("contain", "Google Maps")
        .and("contain", "CakePHP")
        .and("contain", "SVN")
    })
  })

  it("should the skill logos render a spacer div", () => {
    cy.get("[data-test=skills]").within(() => {
      cy.scrollTo(0, 210)
      checkItems.forEach(item => {
        cy.root()
          .get("li")
          .eq(item)
          .find(`.gatsby-image-wrapper > div`)
          .should(`have.attr`, `style`)
          .and(`match`, /width: 100%; padding-bottom:/)
      })
    })
  })

  it("should the skill logos render sizes", () => {
    cy.get("[data-test=skills]").within(() => {
      cy.scrollTo(0, 210)
      checkItems.forEach(item => {
        cy.root()
          .get("li")
          .eq(item)
          .find(`picture > source`)
          .should(`have.attr`, `sizes`)
          .and(`match`, /\(max-width: \d+px\) 100vw, \d+px/)
      })
    })
  })

  it("should the skill logos render correct srcset", () => {
    cy.scrollTo(0, 210)
    checkItems.forEach(item => {
      cy.root()
        .get("li")
        .eq(item)
        .find(`picture > source`)
        .should(`have.attr`, `srcset`)
        .and(srcset => {
          srcset.split(/\s*,\s*/).forEach(part => {
            expect(part).to.contain(`/static`)
            expect(part).to.match(/\d{2,}w/)
          })
        })
    })
  })
})
