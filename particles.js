particlesJS("background", {
    particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            value_area: 1000
          }
        },
        color: {
          value: ["#ffff00", "#ffe100", "#ffe100", "#0095ff", "#0088ff", "#ffffff", "#ffffff", "#ffffff"]
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.9,
          random: true,
          anim: {
            enable: true,
            speed: 1.2,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            size_min: 0.8,
            sync: false
          }
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out"
        },
        line_linked: {
          enable: true,
          distance: 120,
          opacity: 0.4,
          width: 0.5
        },
        shadow: {
          enable: true,
          color: "#ffffff",
          blur: 8
        }
      },
      interactivity: {
        events: {
          onhover: { enable: false },
          onclick: { enable: false }
        }
      },
      retina_detect: true
    });