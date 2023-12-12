function scrollToElement(elementSelector, instance = 0) {
  // Select all elements that match the given selector
  const elements = document.querySelectorAll(elementSelector);
  // Check if there are elements matching the selector and if the requested instance exists
  if (elements.length > instance) {
    // Scroll to the specified instance of the element
    elements[instance].scrollIntoView({ behavior: 'smooth' });
  }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
  scrollToElement('.header');
});

link2.addEventListener('click', () => {
  // Scroll to the second element with "header" class
  scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
  scrollToElement('.column');
});


// script.js

// Particle configuration
const particleConfig = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#7fff7f"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 6,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#7fff7f",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse" // Change to "repulse" to create a repulsion effect
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 100, // Adjust the repulsion distance as needed
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  }
};

// Initialize particles
particlesJS("particles-js", particleConfig);


function changeColor(color1, color2) {
  const headers = document.querySelectorAll('h2, h4');
  const p = document.querySelectorAll('p');
  const spanElements = document.querySelectorAll('header .content h1 span');
  const navLinks = document.querySelectorAll('.nav-links a');
  const nav = document.querySelectorAll('nav');
  const linkUnderlines = document.querySelectorAll('.link a::after');

  navLinks.forEach(link => {
    link.style.color = color1;
  });

  nav.forEach(n => {
    n.style.textShadow = `0 0 1ex ${color2}, 0 0 2px rgba(255, 255, 255, .8)`;
  })

  linkUnderlines.forEach(underline => {
    underline.style.backgroundColor = color1;
  });
  const particleConfig = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: color1
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 6,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: color1,
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse" // Change to "repulse" to create a repulsion effect
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 100, // Adjust the repulsion distance as needed
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    }
  };
  particlesJS("particles-js", particleConfig);

  headers.forEach(header => {
    header.style.color = color1;
    header.style.textShadow = `0 0 1ex ${color2}, 0 0 2px rgba(255, 255, 255, .8)`;
  });

  p.forEach(p => {
    p.style.color = color1;
    p.style.textShadow = `0 0 1ex ${color2}, 0 0 2px rgba(255, 255, 255, .8)`;
  });

  spanElements.forEach(spanElement => {
    spanElement.style.webkitTextStroke = `1px ${color1}`;
  });
}
