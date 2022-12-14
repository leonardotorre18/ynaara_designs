export default {
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  particles: {
    bounce: {
      vertical: {
        value: 0,
      },
      horizontal: {
        value: 0,
      },
    },
    color: {
      value: [
        '#FF1E61',
        '#FF6392',
        '#A6103D',
        '#FFC300',
        '#FF5733',
        '#2ECC71',
        '#8E44AD',
        '#3498DB',
      ],
    },
    move: {
      decay: 0.1,
      direction: 'top',
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: true,
        maxSpeed: 100,
      },
    },
    number: {
      value: 0,
      limit: 30,
    },
    opacity: {
      value: 1,
      animation: {
        enable: false,
        startValue: 'max',
        destroy: 'min',
        speed: 0.3,
        sync: true,
      },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      direction: 'random',
      move: true,
      animation: {
        enable: true,
        speed: 60,
      },
    },
    tilt: {
      direction: 'random',
      enable: true,
      move: true,
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: 60,
      },
    },
    shape: {
      type: [
        'square',
      ],
      options: {
        polygon: [
          {
            sides: 5,
          },
          {
            sides: 6,
          },
        ],
      },
    },
    size: {
      value: 7,
    },
    roll: {
      darken: {
        enable: true,
        value: 30,
      },
      enlighten: {
        enable: true,
        value: 30,
      },
      enable: true,
      speed: {
        min: 15,
        max: 25,
      },
    },
    wobble: {
      distance: 30,
      enable: true,
      move: true,
      speed: {
        min: -15,
        max: 15,
      },
    },
  },
  emitters: {
    position: {
      x: 50,
      y: 100,
    },
    size: {
      width: 100,
      height: 100,
    },
    rate: {
      quantity: 10,
      delay: 0.3,
    },
  },
};
