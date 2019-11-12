import anime from "animejs"

const layoutConfig = {
  layout1: {
    out: {
      translateX: {
        next: "-100%",
        previous: "100%",
      },
      rotateZ: {
        next: () => {
          return anime.random(-15, 0)
        },
        previous: () => {
          return anime.random(0, 15)
        },
      },
      opacity: 0,
      duration: 1200,
      easing: "easeOutQuint",
      itemsDelay: 80,
    },
    in: {
      resetProps: {
        translateX: {
          next: "100%",
          previous: "-100%",
        },
        rotateZ: {
          next: () => {
            return anime.random(0, 15)
          },
          previous: () => {
            return anime.random(-15, 0)
          },
        },
        opacity: 0,
      },
      translateX: "0%",
      rotateZ: 0,
      opacity: 1,
      duration: 700,
      easing: "easeOutQuint",
      itemsDelay: 80,
    },
  },
  layout2: {
    out: {
      translateX: {
        next: () => {
          return anime.random(-50, 50) + "%"
        },
        previous: () => {
          return anime.random(-50, 50) + "%"
        },
      },
      translateY: {
        next: () => {
          return anime.random(-50, 50) + "%"
        },
        previous: () => {
          return anime.random(-50, 50) + "%"
        },
      },
      opacity: 0,
      duration: 1200,
      easing: "easeOutQuint",
      itemsDelay: 10,
    },
    in: {
      resetProps: {
        translateX: {
          next: "100%",
          previous: "-100%",
        },
        rotateZ: {
          next: () => {
            return anime.random(0, 90)
          },
          previous: () => {
            return anime.random(-90, 0)
          },
        },
        opacity: 0,
      },
      translateX: "0%",
      rotateZ: 0,
      opacity: 1,
      duration: 900,
      easing: "easeOutExpo",
      itemsDelay: 30,
    },
  },
  layout3: {
    out: {
      translateY: {
        next: "60%",
        previous: "-60%",
      },
      opacity: 0,
      duration: 700,
      easing: "easeOutQuint",
      itemsDelay: 50,
    },
    in: {
      resetProps: {
        translateY: {
          next: "-60%",
          previous: "60%",
        },
        opacity: 0,
      },
      translateY: "0%",
      opacity: 1,
      duration: 700,
      easing: "easeOutQuint",
      itemsDelay: 50,
      delay: 250,
    },
  },
  layout4: {
    out: {
      scale: 0.5,
      opacity: 0,
      duration: 300,
      easing: "easeInBack",
      itemsDelay: 20,
    },
    in: {
      resetProps: {
        scale: 0.5,
        opacity: 0,
      },
      opacity: 1,
      scale: 1,
      duration: 1000,
      easing: "easeOutElastic",
      itemsDelay: 50,
      delay: 400,
    },
  },
  layout5: {
    out: {
      translateX: {
        next: "-100%",
        previous: "100%",
      },
      opacity: 0,
      duration: 1200,
      easing: "easeOutQuint",
      itemsDelay: 40,
    },
    in: {
      resetProps: {
        translateX: {
          next: "100%",
          previous: "-100%",
        },
        rotateZ: {
          next: () => {
            return anime.random(0, 25)
          },
          previous: () => {
            return anime.random(-25, 0)
          },
        },
        opacity: 0,
      },
      translateX: "0%",
      rotateZ: 0,
      opacity: 1,
      duration: 700,
      easing: "easeOutQuint",
      itemsDelay: 40,
      delay: 250,
    },
  },
}

export default layoutConfig
