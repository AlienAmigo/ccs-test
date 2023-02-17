import { css } from 'styled-components';

export const ANIMATE = {
  GRADIENT_FLOW: css`
    @keyframes gradientFlow {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `,

  GROW_RIGHT: (maxWidth = 100) => css`
    @keyframes growRight {
      from,
      5% {
        max-width: 0;
        overflow: hidden;
        transform: scaleX(0);
        transform-origin: left top;
      }

      to,
      90% {
        max-width: ${maxWidth}%;
        transform: scaleX(1);
        transform-origin: left top;
      }
    }
  `,
  GROW_DOWN: (maxHeight = 700) => css`
    @keyframes growDown {
      from,
      5% {
        max-height: 0;
        overflow: hidden;
      }

      to,
      90% {
        max-height: ${maxHeight}px;
      }
    }
  `,
  ZOOM_DOWN: css`
    /* stylelint-disable */
    @keyframes zoomDown {
      from,
      5% {
        transform: scaleY(0);
        transform-origin: center top;
      }

      to,
      90% {
        transform: scaleY(1);
        transform-origin: center top;
      }
    }

    /* stylelint-enable */
  `,
  BOUNCE: css`
    /* stylelint-disable */
    @-webkit-keyframes bounce {
      from,
      20%,
      53%,
      80%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      40%,
      43% {
        -webkit-animation-timing-function: cubic-bezier(
          0.755,
          0.05,
          0.855,
          0.06
        );
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        -webkit-transform: translate3d(0, -30px, 0);
        transform: translate3d(0, -30px, 0);
      }

      70% {
        -webkit-animation-timing-function: cubic-bezier(
          0.755,
          0.05,
          0.855,
          0.06
        );
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        -webkit-transform: translate3d(0, -15px, 0);
        transform: translate3d(0, -15px, 0);
      }

      90% {
        -webkit-transform: translate3d(0, -4px, 0);
        transform: translate3d(0, -4px, 0);
      }
    }

    @keyframes bounce {
      from,
      20%,
      53%,
      80%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      40%,
      43% {
        -webkit-animation-timing-function: cubic-bezier(
          0.755,
          0.05,
          0.855,
          0.06
        );
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        -webkit-transform: translate3d(0, -30px, 0);
        transform: translate3d(0, -30px, 0);
      }

      70% {
        -webkit-animation-timing-function: cubic-bezier(
          0.755,
          0.05,
          0.855,
          0.06
        );
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        -webkit-transform: translate3d(0, -15px, 0);
        transform: translate3d(0, -15px, 0);
      }

      90% {
        -webkit-transform: translate3d(0, -4px, 0);
        transform: translate3d(0, -4px, 0);
      }
    }

    .bounce {
      -webkit-animation-name: bounce;
      animation-name: bounce;
      -webkit-transform-origin: center bottom;
      transform-origin: center bottom;
    }
    /* stylelint-enable */
  `,

  FLASH: css`
    /* stylelint-disable */
    @-webkit-keyframes flash {
      from,
      50%,
      to {
        opacity: 1;
      }

      25%,
      75% {
        opacity: 0;
      }
    }

    @keyframes flash {
      from,
      50%,
      to {
        opacity: 1;
      }

      25%,
      75% {
        opacity: 0;
      }
    }

    .flash {
      -webkit-animation-name: flash;
      animation-name: flash;
    }
    /* stylelint-enable */
  `,

  PULSE: css`
    /* stylelint-disable */
    @-webkit-keyframes pulse {
      from {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }

      50% {
        -webkit-transform: scale3d(1.05, 1.05, 1.05);
        transform: scale3d(1.05, 1.05, 1.05);
      }

      to {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }

    @keyframes pulse {
      from {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }

      50% {
        -webkit-transform: scale3d(1.05, 1.05, 1.05);
        transform: scale3d(1.05, 1.05, 1.05);
      }

      to {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }

    .pulse {
      -webkit-animation-name: pulse;
      animation-name: pulse;
    }
    /* stylelint-enable */
  `,

  RUBBER_BAND: css`
    /* stylelint-disable */
    @-webkit-keyframes rubberBand {
      from {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }

      30% {
        -webkit-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
      }

      40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
      }

      50% {
        -webkit-transform: scale3d(1.15, 0.85, 1);
        transform: scale3d(1.15, 0.85, 1);
      }

      65% {
        -webkit-transform: scale3d(0.95, 1.05, 1);
        transform: scale3d(0.95, 1.05, 1);
      }

      75% {
        -webkit-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
      }

      to {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }

    @keyframes rubberBand {
      from {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }

      30% {
        -webkit-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
      }

      40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
      }

      50% {
        -webkit-transform: scale3d(1.15, 0.85, 1);
        transform: scale3d(1.15, 0.85, 1);
      }

      65% {
        -webkit-transform: scale3d(0.95, 1.05, 1);
        transform: scale3d(0.95, 1.05, 1);
      }

      75% {
        -webkit-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
      }

      to {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }

    .rubberBand {
      -webkit-animation-name: rubberBand;
      animation-name: rubberBand;
    }
    /* stylelint-enable */
  `,

  SHAKE: css`
    /* stylelint-disable */
    @-webkit-keyframes shake {
      from,
      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      10%,
      30%,
      50%,
      70%,
      90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
      }

      20%,
      40%,
      60%,
      80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
      }
    }

    @keyframes shake {
      from,
      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      10%,
      30%,
      50%,
      70%,
      90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
      }

      20%,
      40%,
      60%,
      80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
      }
    }

    .shake {
      -webkit-animation-name: shake;
      animation-name: shake;
    }
    /* stylelint-enable */
  `,

  HEAD_SHAKE: css`
    /* stylelint-disable */
    @-webkit-keyframes headShake {
      0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }

      6.5% {
        -webkit-transform: translateX(-6px) rotateY(-9deg);
        transform: translateX(-6px) rotateY(-9deg);
      }

      18.5% {
        -webkit-transform: translateX(5px) rotateY(7deg);
        transform: translateX(5px) rotateY(7deg);
      }

      31.5% {
        -webkit-transform: translateX(-3px) rotateY(-5deg);
        transform: translateX(-3px) rotateY(-5deg);
      }

      43.5% {
        -webkit-transform: translateX(2px) rotateY(3deg);
        transform: translateX(2px) rotateY(3deg);
      }

      50% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
    }

    @keyframes headShake {
      0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }

      6.5% {
        -webkit-transform: translateX(-6px) rotateY(-9deg);
        transform: translateX(-6px) rotateY(-9deg);
      }

      18.5% {
        -webkit-transform: translateX(5px) rotateY(7deg);
        transform: translateX(5px) rotateY(7deg);
      }

      31.5% {
        -webkit-transform: translateX(-3px) rotateY(-5deg);
        transform: translateX(-3px) rotateY(-5deg);
      }

      43.5% {
        -webkit-transform: translateX(2px) rotateY(3deg);
        transform: translateX(2px) rotateY(3deg);
      }

      50% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
    }

    .headShake {
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
      -webkit-animation-name: headShake;
      animation-name: headShake;
    }
    /* stylelint-enable */
  `,

  SWING: css`
    /* stylelint-disable */
    @-webkit-keyframes swing {
      20% {
        -webkit-transform: rotate3d(0, 0, 1, 15deg);
        transform: rotate3d(0, 0, 1, 15deg);
      }

      40% {
        -webkit-transform: rotate3d(0, 0, 1, -10deg);
        transform: rotate3d(0, 0, 1, -10deg);
      }

      60% {
        -webkit-transform: rotate3d(0, 0, 1, 5deg);
        transform: rotate3d(0, 0, 1, 5deg);
      }

      80% {
        -webkit-transform: rotate3d(0, 0, 1, -5deg);
        transform: rotate3d(0, 0, 1, -5deg);
      }

      to {
        -webkit-transform: rotate3d(0, 0, 1, 0deg);
        transform: rotate3d(0, 0, 1, 0deg);
      }
    }

    @keyframes swing {
      20% {
        -webkit-transform: rotate3d(0, 0, 1, 15deg);
        transform: rotate3d(0, 0, 1, 15deg);
      }

      40% {
        -webkit-transform: rotate3d(0, 0, 1, -10deg);
        transform: rotate3d(0, 0, 1, -10deg);
      }

      60% {
        -webkit-transform: rotate3d(0, 0, 1, 5deg);
        transform: rotate3d(0, 0, 1, 5deg);
      }

      80% {
        -webkit-transform: rotate3d(0, 0, 1, -5deg);
        transform: rotate3d(0, 0, 1, -5deg);
      }

      to {
        -webkit-transform: rotate3d(0, 0, 1, 0deg);
        transform: rotate3d(0, 0, 1, 0deg);
      }
    }

    .swing {
      -webkit-transform-origin: top center;
      transform-origin: top center;
      -webkit-animation-name: swing;
      animation-name: swing;
    }
    /* stylelint-enable */
  `,

  TADA: css`
    /* stylelint-disable */
    @-webkit-keyframes tada {
      from {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }

      10%,
      20% {
        -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
        transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
      }

      30%,
      50%,
      70%,
      90% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
      }

      40%,
      60%,
      80% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
      }

      to {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }

    @keyframes tada {
      from {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }

      10%,
      20% {
        -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
        transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
      }

      30%,
      50%,
      70%,
      90% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
      }

      40%,
      60%,
      80% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
      }

      to {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }

    .tada {
      -webkit-animation-name: tada;
      animation-name: tada;
    }
    /* stylelint-enable */
  `,

  WOBBLE: css`
    /* stylelint-disable */
    @-webkit-keyframes wobble {
      from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      15% {
        -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
        transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
      }

      30% {
        -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
        transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
      }

      45% {
        -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
        transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
      }

      60% {
        -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
        transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
      }

      75% {
        -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
        transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes wobble {
      from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      15% {
        -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
        transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
      }

      30% {
        -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
        transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
      }

      45% {
        -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
        transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
      }

      60% {
        -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
        transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
      }

      75% {
        -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
        transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .wobble {
      -webkit-animation-name: wobble;
      animation-name: wobble;
    }
    /* stylelint-enable */
  `,

  JELLO: css`
    /* stylelint-disable */
    @-webkit-keyframes jello {
      from,
      11.1%,
      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      22.2% {
        -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
        transform: skewX(-12.5deg) skewY(-12.5deg);
      }

      33.3% {
        -webkit-transform: skewX(6.25deg) skewY(6.25deg);
        transform: skewX(6.25deg) skewY(6.25deg);
      }

      44.4% {
        -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
        transform: skewX(-3.125deg) skewY(-3.125deg);
      }

      55.5% {
        -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
        transform: skewX(1.5625deg) skewY(1.5625deg);
      }

      66.6% {
        -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
        transform: skewX(-0.78125deg) skewY(-0.78125deg);
      }

      77.7% {
        -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
        transform: skewX(0.390625deg) skewY(0.390625deg);
      }

      88.8% {
        -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
        transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
      }
    }

    @keyframes jello {
      from,
      11.1%,
      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      22.2% {
        -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
        transform: skewX(-12.5deg) skewY(-12.5deg);
      }

      33.3% {
        -webkit-transform: skewX(6.25deg) skewY(6.25deg);
        transform: skewX(6.25deg) skewY(6.25deg);
      }

      44.4% {
        -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
        transform: skewX(-3.125deg) skewY(-3.125deg);
      }

      55.5% {
        -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
        transform: skewX(1.5625deg) skewY(1.5625deg);
      }

      66.6% {
        -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
        transform: skewX(-0.78125deg) skewY(-0.78125deg);
      }

      77.7% {
        -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
        transform: skewX(0.390625deg) skewY(0.390625deg);
      }

      88.8% {
        -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
        transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
      }
    }

    .jello {
      -webkit-animation-name: jello;
      animation-name: jello;
      -webkit-transform-origin: center;
      transform-origin: center;
    }
    /* stylelint-enable */
  `,

  HEART_BEAT: css`
    /* stylelint-disable */
    @-webkit-keyframes heartBeat {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }

      14% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
      }

      28% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }

      42% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
      }

      70% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }

    @keyframes heartBeat {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }

      14% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
      }

      28% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }

      42% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
      }

      70% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }

    .heartBeat {
      -webkit-animation-name: heartBeat;
      animation-name: heartBeat;
      -webkit-animation-duration: 1.3s;
      animation-duration: 1.3s;
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
    }
    /* stylelint-enable */
  `,

  BOUNCE_IN: css`
    /* stylelint-disable */
    @-webkit-keyframes bounceIn {
      from,
      20%,
      40%,
      60%,
      80%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
      }

      20% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
      }

      40% {
        -webkit-transform: scale3d(0.9, 0.9, 0.9);
        transform: scale3d(0.9, 0.9, 0.9);
      }

      60% {
        opacity: 1;
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03);
      }

      80% {
        -webkit-transform: scale3d(0.97, 0.97, 0.97);
        transform: scale3d(0.97, 0.97, 0.97);
      }

      to {
        opacity: 1;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }

    @keyframes bounceIn {
      from,
      20%,
      40%,
      60%,
      80%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
      }

      20% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
      }

      40% {
        -webkit-transform: scale3d(0.9, 0.9, 0.9);
        transform: scale3d(0.9, 0.9, 0.9);
      }

      60% {
        opacity: 1;
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03);
      }

      80% {
        -webkit-transform: scale3d(0.97, 0.97, 0.97);
        transform: scale3d(0.97, 0.97, 0.97);
      }

      to {
        opacity: 1;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }

    .bounceIn {
      -webkit-animation-duration: 0.75s;
      animation-duration: 0.75s;
      -webkit-animation-name: bounceIn;
      animation-name: bounceIn;
    }
    /* stylelint-enable */
  `,

  BOUNCE_IN_DOWN: css`
    /* stylelint-disable */
    @-webkit-keyframes bounceInDown {
      from,
      60%,
      75%,
      90%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -3000px, 0);
        transform: translate3d(0, -3000px, 0);
      }

      60% {
        opacity: 1;
        -webkit-transform: translate3d(0, 25px, 0);
        transform: translate3d(0, 25px, 0);
      }

      75% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0);
      }

      90% {
        -webkit-transform: translate3d(0, 5px, 0);
        transform: translate3d(0, 5px, 0);
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes bounceInDown {
      from,
      60%,
      75%,
      90%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -3000px, 0);
        transform: translate3d(0, -3000px, 0);
      }

      60% {
        opacity: 1;
        -webkit-transform: translate3d(0, 25px, 0);
        transform: translate3d(0, 25px, 0);
      }

      75% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0);
      }

      90% {
        -webkit-transform: translate3d(0, 5px, 0);
        transform: translate3d(0, 5px, 0);
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .bounceInDown {
      -webkit-animation-name: bounceInDown;
      animation-name: bounceInDown;
    }
    /* stylelint-enable */
  `,

  BOUNCE_IN_LEFT: css`
    /* stylelint-disable */
    @-webkit-keyframes bounceInLeft {
      from,
      60%,
      75%,
      90%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      0% {
        opacity: 0;
        -webkit-transform: translate3d(-3000px, 0, 0);
        transform: translate3d(-3000px, 0, 0);
      }

      60% {
        opacity: 1;
        -webkit-transform: translate3d(25px, 0, 0);
        transform: translate3d(25px, 0, 0);
      }

      75% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
      }

      90% {
        -webkit-transform: translate3d(5px, 0, 0);
        transform: translate3d(5px, 0, 0);
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes bounceInLeft {
      from,
      60%,
      75%,
      90%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      0% {
        opacity: 0;
        -webkit-transform: translate3d(-3000px, 0, 0);
        transform: translate3d(-3000px, 0, 0);
      }

      60% {
        opacity: 1;
        -webkit-transform: translate3d(25px, 0, 0);
        transform: translate3d(25px, 0, 0);
      }

      75% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
      }

      90% {
        -webkit-transform: translate3d(5px, 0, 0);
        transform: translate3d(5px, 0, 0);
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .bounceInLeft {
      -webkit-animation-name: bounceInLeft;
      animation-name: bounceInLeft;
    }
    /* stylelint-enable */
  `,

  BOUNCE_IN_RIGHT: css`
    /* stylelint-disable */
    @-webkit-keyframes bounceInRight {
      from,
      60%,
      75%,
      90%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      from {
        opacity: 0;
        -webkit-transform: translate3d(3000px, 0, 0);
        transform: translate3d(3000px, 0, 0);
      }

      60% {
        opacity: 1;
        -webkit-transform: translate3d(-25px, 0, 0);
        transform: translate3d(-25px, 0, 0);
      }

      75% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
      }

      90% {
        -webkit-transform: translate3d(-5px, 0, 0);
        transform: translate3d(-5px, 0, 0);
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes bounceInRight {
      from,
      60%,
      75%,
      90%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      from {
        opacity: 0;
        -webkit-transform: translate3d(3000px, 0, 0);
        transform: translate3d(3000px, 0, 0);
      }

      60% {
        opacity: 1;
        -webkit-transform: translate3d(-25px, 0, 0);
        transform: translate3d(-25px, 0, 0);
      }

      75% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
      }

      90% {
        -webkit-transform: translate3d(-5px, 0, 0);
        transform: translate3d(-5px, 0, 0);
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .bounceInRight {
      -webkit-animation-name: bounceInRight;
      animation-name: bounceInRight;
    }
    /* stylelint-enable */
  `,

  BOUNCE_IN_UP: css`
    /* stylelint-disable */
    @-webkit-keyframes bounceInUp {
      from,
      60%,
      75%,
      90%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      from {
        opacity: 0;
        -webkit-transform: translate3d(0, 3000px, 0);
        transform: translate3d(0, 3000px, 0);
      }

      60% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
      }

      75% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
      }

      90% {
        -webkit-transform: translate3d(0, -5px, 0);
        transform: translate3d(0, -5px, 0);
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes bounceInUp {
      from,
      60%,
      75%,
      90%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      from {
        opacity: 0;
        -webkit-transform: translate3d(0, 3000px, 0);
        transform: translate3d(0, 3000px, 0);
      }

      60% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
      }

      75% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
      }

      90% {
        -webkit-transform: translate3d(0, -5px, 0);
        transform: translate3d(0, -5px, 0);
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .bounceInUp {
      -webkit-animation-name: bounceInUp;
      animation-name: bounceInUp;
    }
    /* stylelint-enable */
  `,

  BOUNCE_OUT: css`
    /* stylelint-disable */
    @-webkit-keyframes bounceOut {
      20% {
        -webkit-transform: scale3d(0.9, 0.9, 0.9);
        transform: scale3d(0.9, 0.9, 0.9);
      }

      50%,
      55% {
        opacity: 1;
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
      }

      to {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
      }
    }

    @keyframes bounceOut {
      20% {
        -webkit-transform: scale3d(0.9, 0.9, 0.9);
        transform: scale3d(0.9, 0.9, 0.9);
      }

      50%,
      55% {
        opacity: 1;
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
      }

      to {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
      }
    }

    .bounceOut {
      -webkit-animation-duration: 0.75s;
      animation-duration: 0.75s;
      -webkit-animation-name: bounceOut;
      animation-name: bounceOut;
    }
    /* stylelint-enable */
  `,

  BOUNCE_OUT_DOWN: css`
    /* stylelint-disable */
    @-webkit-keyframes bounceOutDown {
      20% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
      }

      40%,
      45% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0);
      }
    }

    @keyframes bounceOutDown {
      20% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
      }

      40%,
      45% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0);
      }
    }

    .bounceOutDown {
      -webkit-animation-name: bounceOutDown;
      animation-name: bounceOutDown;
    }
    /* stylelint-enable */
  `,

  BOUNCE_OUT_LEFT: css`
    /* stylelint-disable */
    @-webkit-keyframes bounceOutLeft {
      20% {
        opacity: 1;
        -webkit-transform: translate3d(20px, 0, 0);
        transform: translate3d(20px, 0, 0);
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0);
      }
    }

    @keyframes bounceOutLeft {
      20% {
        opacity: 1;
        -webkit-transform: translate3d(20px, 0, 0);
        transform: translate3d(20px, 0, 0);
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0);
      }
    }

    .bounceOutLeft {
      -webkit-animation-name: bounceOutLeft;
      animation-name: bounceOutLeft;
    }
    /* stylelint-enable */
  `,

  BOUNCE_OUT_RIGHT: css`
    /* stylelint-disable */
    @-webkit-keyframes bounceOutRight {
      20% {
        opacity: 1;
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0);
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0);
      }
    }

    @keyframes bounceOutRight {
      20% {
        opacity: 1;
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0);
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0);
      }
    }

    .bounceOutRight {
      -webkit-animation-name: bounceOutRight;
      animation-name: bounceOutRight;
    }
    /* stylelint-enable */
  `,

  BOUNCE_OUT_UP: css`
    /* stylelint-disable */
    @-webkit-keyframes bounceOutUp {
      20% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0);
      }

      40%,
      45% {
        opacity: 1;
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0);
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0);
      }
    }

    @keyframes bounceOutUp {
      20% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0);
      }

      40%,
      45% {
        opacity: 1;
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0);
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0);
      }
    }

    .bounceOutUp {
      -webkit-animation-name: bounceOutUp;
      animation-name: bounceOutUp;
    }
    /* stylelint-enable */
  `,

  FADE_IN: css`
    /* stylelint-disable */
    @-webkit-keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    .fadeIn {
      -webkit-animation-name: fadeIn;
      animation-name: fadeIn;
    }
    /* stylelint-enable */
  `,

  FADE_IN_DOWN: css`
    /* stylelint-disable */
    @-webkit-keyframes fadeInDown {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes fadeInDown {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .fadeInDown {
      -webkit-animation-name: fadeInDown;
      animation-name: fadeInDown;
    }
    /* stylelint-enable */
  `,

  FADE_IN_DOWN_BIG: css`
    /* stylelint-disable */
    @-webkit-keyframes fadeInDownBig {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes fadeInDownBig {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .fadeInDownBig {
      -webkit-animation-name: fadeInDownBig;
      animation-name: fadeInDownBig;
    }
    /* stylelint-enable */
  `,

  FADE_IN_LEFT: css`
    /* stylelint-disable */
    @-webkit-keyframes fadeInLeft {
      from {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes fadeInLeft {
      from {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .fadeInLeft {
      -webkit-animation-name: fadeInLeft;
      animation-name: fadeInLeft;
    }
    /* stylelint-enable */
  `,

  FADE_IN_LEFT_BIG: css`
    /* stylelint-disable */
    @-webkit-keyframes fadeInLeftBig {
      from {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes fadeInLeftBig {
      from {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .fadeInLeftBig {
      -webkit-animation-name: fadeInLeftBig;
      animation-name: fadeInLeftBig;
    }
    /* stylelint-enable */
  `,

  FADE_IN_RIGHT: css`
    /* stylelint-disable */
    @-webkit-keyframes fadeInRight {
      from {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .fadeInRight {
      -webkit-animation-name: fadeInRight;
      animation-name: fadeInRight;
    }
    /* stylelint-enable */
  `,

  FADE_IN_RIGHT_BIG: css`
    /* stylelint-disable */
    @-webkit-keyframes fadeInRightBig {
      from {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes fadeInRightBig {
      from {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .fadeInRightBig {
      -webkit-animation-name: fadeInRightBig;
      animation-name: fadeInRightBig;
    }
    /* stylelint-enable */
  `,

  FADE_IN_UP: css`
    /* stylelint-disable */
    @-webkit-keyframes fadeInUp {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .fadeInUp {
      -webkit-animation-name: fadeInUp;
      animation-name: fadeInUp;
    }
    /* stylelint-enable */
  `,

  FADE_IN_UP_BIG: css`
    /* stylelint-disable */
    @-webkit-keyframes fadeInUpBig {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes fadeInUpBig {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .fadeInUpBig {
      -webkit-animation-name: fadeInUpBig;
      animation-name: fadeInUpBig;
    }
    /* stylelint-enable */
  `,

  FADE_OUT: css`
    /* stylelint-disable */
    @-webkit-keyframes fadeOut {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }

    .fadeOut {
      -webkit-animation-name: fadeOut;
      animation-name: fadeOut;
    }
    /* stylelint-enable */
  `,

  FADE_OUT_DOWN: css`
    /* stylelint-disable */
    @-webkit-keyframes fadeOutDown {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }
    }

    @keyframes fadeOutDown {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }
    }

    .fadeOutDown {
      -webkit-animation-name: fadeOutDown;
      animation-name: fadeOutDown;
    }
    /* stylelint-enable */
  `,

  FADE_OUT_DOWN_BIG: css`
    /* stylelint-disable */
    @-webkit-keyframes fadeOutDownBig {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0);
      }
    }

    @keyframes fadeOutDownBig {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0);
      }
    }

    .fadeOutDownBig {
      -webkit-animation-name: fadeOutDownBig;
      animation-name: fadeOutDownBig;
    }
    /* stylelint-enable */
  `,

  FADE_OUT_LEFT: css`
    /* stylelint-disable */
    @-webkit-keyframes fadeOutLeft {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    }

    @keyframes fadeOutLeft {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    }

    .fadeOutLeft {
      -webkit-animation-name: fadeOutLeft;
      animation-name: fadeOutLeft;
    }
    /* stylelint-enable */
  `,

  FADE_OUT_LEFT_BIG: css`
    /* stylelint-disable */
    @-webkit-keyframes fadeOutLeftBig {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0);
      }
    }

    @keyframes fadeOutLeftBig {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0);
      }
    }

    .fadeOutLeftBig {
      -webkit-animation-name: fadeOutLeftBig;
      animation-name: fadeOutLeftBig;
    }
    /* stylelint-enable */
  `,

  FADE_OUT_RIGHT: css`
    /* stylelint-disable */
    @-webkit-keyframes fadeOutRight {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }
    }

    @keyframes fadeOutRight {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }
    }

    .fadeOutRight {
      -webkit-animation-name: fadeOutRight;
      animation-name: fadeOutRight;
    }
    /* stylelint-enable */
  `,

  FADE_OUT_RIGHT_BIG: css`
    /* stylelint-disable */
    @-webkit-keyframes fadeOutRightBig {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0);
      }
    }

    @keyframes fadeOutRightBig {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0);
      }
    }

    .fadeOutRightBig {
      -webkit-animation-name: fadeOutRightBig;
      animation-name: fadeOutRightBig;
    }
    /* stylelint-enable */
  `,

  FADE_OUT_UP: css`
    /* stylelint-disable */
    @-webkit-keyframes fadeOutUp {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }
    }

    @keyframes fadeOutUp {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }
    }

    .fadeOutUp {
      -webkit-animation-name: fadeOutUp;
      animation-name: fadeOutUp;
    }
    /* stylelint-enable */
  `,

  FADE_OUT_UP_BIG: css`
    /* stylelint-disable */
    @-webkit-keyframes fadeOutUpBig {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0);
      }
    }

    @keyframes fadeOutUpBig {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0);
      }
    }

    .fadeOutUpBig {
      -webkit-animation-name: fadeOutUpBig;
      animation-name: fadeOutUpBig;
    }
    /* stylelint-enable */
  `,

  FLIP: css`
    /* stylelint-disable */
    @-webkit-keyframes flip {
      from {
        -webkit-transform: perspective(400px) scale3d(1, 1, 1)
          translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
          rotate3d(0, 1, 0, -360deg);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }

      40% {
        -webkit-transform: perspective(400px) scale3d(1, 1, 1)
          translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
          rotate3d(0, 1, 0, -190deg);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }

      50% {
        -webkit-transform: perspective(400px) scale3d(1, 1, 1)
          translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
          rotate3d(0, 1, 0, -170deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }

      80% {
        -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95)
          translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
        transform: perspective(400px) scale3d(0.95, 0.95, 0.95)
          translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }

      to {
        -webkit-transform: perspective(400px) scale3d(1, 1, 1)
          translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
          rotate3d(0, 1, 0, 0deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
    }

    @keyframes flip {
      from {
        -webkit-transform: perspective(400px) scale3d(1, 1, 1)
          translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
          rotate3d(0, 1, 0, -360deg);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }

      40% {
        -webkit-transform: perspective(400px) scale3d(1, 1, 1)
          translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
          rotate3d(0, 1, 0, -190deg);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }

      50% {
        -webkit-transform: perspective(400px) scale3d(1, 1, 1)
          translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
          rotate3d(0, 1, 0, -170deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }

      80% {
        -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95)
          translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
        transform: perspective(400px) scale3d(0.95, 0.95, 0.95)
          translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }

      to {
        -webkit-transform: perspective(400px) scale3d(1, 1, 1)
          translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
          rotate3d(0, 1, 0, 0deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
    }

    .animated.flip {
      -webkit-backface-visibility: visible;
      backface-visibility: visible;
      -webkit-animation-name: flip;
      animation-name: flip;
    }
    /* stylelint-enable */
  `,

  FLIP_IN_X: css`
    /* stylelint-disable */
    @-webkit-keyframes flipInX {
      from {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
      }

      40% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }

      60% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        opacity: 1;
      }

      80% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
      }

      to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
      }
    }

    @keyframes flipInX {
      from {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
      }

      40% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }

      60% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        opacity: 1;
      }

      80% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
      }

      to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
      }
    }

    .flipInX {
      -webkit-backface-visibility: visible !important;
      backface-visibility: visible !important;
      -webkit-animation-name: flipInX;
      animation-name: flipInX;
    }
    /* stylelint-enable */
  `,

  FLIP_IN_Y: css`
    /* stylelint-disable */
    @-webkit-keyframes flipInY {
      from {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
      }

      40% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }

      60% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
        opacity: 1;
      }

      80% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
      }

      to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
      }
    }

    @keyframes flipInY {
      from {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
      }

      40% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }

      60% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
        opacity: 1;
      }

      80% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
      }

      to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
      }
    }

    .flipInY {
      -webkit-backface-visibility: visible !important;
      backface-visibility: visible !important;
      -webkit-animation-name: flipInY;
      animation-name: flipInY;
    }
    /* stylelint-enable */
  `,

  FLIP_OUT_X: css`
    /* stylelint-disable */
    @-webkit-keyframes flipOutX {
      from {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
      }

      30% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        opacity: 1;
      }

      to {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        opacity: 0;
      }
    }

    @keyframes flipOutX {
      from {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
      }

      30% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        opacity: 1;
      }

      to {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        opacity: 0;
      }
    }

    .flipOutX {
      -webkit-animation-duration: 0.75s;
      animation-duration: 0.75s;
      -webkit-animation-name: flipOutX;
      animation-name: flipOutX;
      -webkit-backface-visibility: visible !important;
      backface-visibility: visible !important;
    }
    /* stylelint-enable */
  `,

  FLIP_OUT_Y: css`
    /* stylelint-disable */
    @-webkit-keyframes flipOutY {
      from {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
      }

      30% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
        opacity: 1;
      }

      to {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        opacity: 0;
      }
    }

    @keyframes flipOutY {
      from {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
      }

      30% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
        opacity: 1;
      }

      to {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        opacity: 0;
      }
    }

    .flipOutY {
      -webkit-animation-duration: 0.75s;
      animation-duration: 0.75s;
      -webkit-backface-visibility: visible !important;
      backface-visibility: visible !important;
      -webkit-animation-name: flipOutY;
      animation-name: flipOutY;
    }
    /* stylelint-enable */
  `,

  LIGHT_SPEED_IN: css`
    /* stylelint-disable */
    @-webkit-keyframes lightSpeedIn {
      from {
        -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
        transform: translate3d(100%, 0, 0) skewX(-30deg);
        opacity: 0;
      }

      60% {
        -webkit-transform: skewX(20deg);
        transform: skewX(20deg);
        opacity: 1;
      }

      80% {
        -webkit-transform: skewX(-5deg);
        transform: skewX(-5deg);
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes lightSpeedIn {
      from {
        -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
        transform: translate3d(100%, 0, 0) skewX(-30deg);
        opacity: 0;
      }

      60% {
        -webkit-transform: skewX(20deg);
        transform: skewX(20deg);
        opacity: 1;
      }

      80% {
        -webkit-transform: skewX(-5deg);
        transform: skewX(-5deg);
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .lightSpeedIn {
      -webkit-animation-name: lightSpeedIn;
      animation-name: lightSpeedIn;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    /* stylelint-enable */
  `,

  LIGHT_SPEED_OUT: css`
    /* stylelint-disable */
    @-webkit-keyframes lightSpeedOut {
      from {
        opacity: 1;
      }

      to {
        -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
        transform: translate3d(100%, 0, 0) skewX(30deg);
        opacity: 0;
      }
    }

    @keyframes lightSpeedOut {
      from {
        opacity: 1;
      }

      to {
        -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
        transform: translate3d(100%, 0, 0) skewX(30deg);
        opacity: 0;
      }
    }

    .lightSpeedOut {
      -webkit-animation-name: lightSpeedOut;
      animation-name: lightSpeedOut;
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    /* stylelint-enable */
  `,

  ROTATE_IN: css`
    /* stylelint-disable */
    @-webkit-keyframes rotateIn {
      from {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate3d(0, 0, 1, -200deg);
        transform: rotate3d(0, 0, 1, -200deg);
        opacity: 0;
      }

      to {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @keyframes rotateIn {
      from {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate3d(0, 0, 1, -200deg);
        transform: rotate3d(0, 0, 1, -200deg);
        opacity: 0;
      }

      to {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    .rotateIn {
      -webkit-animation-name: rotateIn;
      animation-name: rotateIn;
    }
    /* stylelint-enable */
  `,

  ROTATE_IN_DOWN_LEFT: css`
    /* stylelint-disable */
    @-webkit-keyframes rotateInDownLeft {
      from {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0;
      }

      to {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @keyframes rotateInDownLeft {
      from {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0;
      }

      to {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    .rotateInDownLeft {
      -webkit-animation-name: rotateInDownLeft;
      animation-name: rotateInDownLeft;
    }
    /* stylelint-enable */
  `,

  ROTATE_IN_DOWN_RIGHT: css`
    /* stylelint-disable */
    @-webkit-keyframes rotateInDownRight {
      from {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0;
      }

      to {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @keyframes rotateInDownRight {
      from {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0;
      }

      to {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    .rotateInDownRight {
      -webkit-animation-name: rotateInDownRight;
      animation-name: rotateInDownRight;
    }
    /* stylelint-enable */
  `,

  ROTATE_IN_UP_LEFT: css`
    /* stylelint-disable */
    @-webkit-keyframes rotateInUpLeft {
      from {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0;
      }

      to {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @keyframes rotateInUpLeft {
      from {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0;
      }

      to {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    .rotateInUpLeft {
      -webkit-animation-name: rotateInUpLeft;
      animation-name: rotateInUpLeft;
    }
    /* stylelint-enable */
  `,

  ROTATE_IN_UP_RIGHT: css`
    /* stylelint-disable */
    @-webkit-keyframes rotateInUpRight {
      from {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, -90deg);
        transform: rotate3d(0, 0, 1, -90deg);
        opacity: 0;
      }

      to {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @keyframes rotateInUpRight {
      from {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, -90deg);
        transform: rotate3d(0, 0, 1, -90deg);
        opacity: 0;
      }

      to {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    .rotateInUpRight {
      -webkit-animation-name: rotateInUpRight;
      animation-name: rotateInUpRight;
    }
    /* stylelint-enable */
  `,

  ROTATE_OUT: css`
    /* stylelint-disable */
    @-webkit-keyframes rotateOut {
      from {
        -webkit-transform-origin: center;
        transform-origin: center;
        opacity: 1;
      }

      to {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate3d(0, 0, 1, 200deg);
        transform: rotate3d(0, 0, 1, 200deg);
        opacity: 0;
      }
    }

    @keyframes rotateOut {
      from {
        -webkit-transform-origin: center;
        transform-origin: center;
        opacity: 1;
      }

      to {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate3d(0, 0, 1, 200deg);
        transform: rotate3d(0, 0, 1, 200deg);
        opacity: 0;
      }
    }

    .rotateOut {
      -webkit-animation-name: rotateOut;
      animation-name: rotateOut;
    }
    /* stylelint-enable */
  `,

  ROTATE_OUT_DOWN_LEFT: css`
    /* stylelint-disable */
    @-webkit-keyframes rotateOutDownLeft {
      from {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        opacity: 1;
      }

      to {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0;
      }
    }

    @keyframes rotateOutDownLeft {
      from {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        opacity: 1;
      }

      to {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0;
      }
    }

    .rotateOutDownLeft {
      -webkit-animation-name: rotateOutDownLeft;
      animation-name: rotateOutDownLeft;
    }
    /* stylelint-enable */
  `,

  ROTATE_OUT_DOWN_RIGHT: css`
    /* stylelint-disable */
    @-webkit-keyframes rotateOutDownRight {
      from {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        opacity: 1;
      }

      to {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0;
      }
    }

    @keyframes rotateOutDownRight {
      from {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        opacity: 1;
      }

      to {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0;
      }
    }

    .rotateOutDownRight {
      -webkit-animation-name: rotateOutDownRight;
      animation-name: rotateOutDownRight;
    }
    /* stylelint-enable */
  `,

  ROTATE_OUT_UP_LEFT: css`
    /* stylelint-disable */
    @-webkit-keyframes rotateOutUpLeft {
      from {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        opacity: 1;
      }

      to {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0;
      }
    }

    @keyframes rotateOutUpLeft {
      from {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        opacity: 1;
      }

      to {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0;
      }
    }

    .rotateOutUpLeft {
      -webkit-animation-name: rotateOutUpLeft;
      animation-name: rotateOutUpLeft;
    }
    /* stylelint-enable */
  `,

  ROTATE_OUT_UP_RIGHT: css`
    /* stylelint-disable */
    @-webkit-keyframes rotateOutUpRight {
      from {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        opacity: 1;
      }

      to {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, 90deg);
        transform: rotate3d(0, 0, 1, 90deg);
        opacity: 0;
      }
    }

    @keyframes rotateOutUpRight {
      from {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        opacity: 1;
      }

      to {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, 90deg);
        transform: rotate3d(0, 0, 1, 90deg);
        opacity: 0;
      }
    }

    .rotateOutUpRight {
      -webkit-animation-name: rotateOutUpRight;
      animation-name: rotateOutUpRight;
    }
    /* stylelint-enable */
  `,

  HINGE: css`
    /* stylelint-disable */
    @-webkit-keyframes hinge {
      0% {
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
      }

      20%,
      60% {
        -webkit-transform: rotate3d(0, 0, 1, 80deg);
        transform: rotate3d(0, 0, 1, 80deg);
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
      }

      40%,
      80% {
        -webkit-transform: rotate3d(0, 0, 1, 60deg);
        transform: rotate3d(0, 0, 1, 60deg);
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        opacity: 1;
      }

      to {
        -webkit-transform: translate3d(0, 700px, 0);
        transform: translate3d(0, 700px, 0);
        opacity: 0;
      }
    }

    @keyframes hinge {
      0% {
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
      }

      20%,
      60% {
        -webkit-transform: rotate3d(0, 0, 1, 80deg);
        transform: rotate3d(0, 0, 1, 80deg);
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
      }

      40%,
      80% {
        -webkit-transform: rotate3d(0, 0, 1, 60deg);
        transform: rotate3d(0, 0, 1, 60deg);
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        opacity: 1;
      }

      to {
        -webkit-transform: translate3d(0, 700px, 0);
        transform: translate3d(0, 700px, 0);
        opacity: 0;
      }
    }

    .hinge {
      -webkit-animation-duration: 2s;
      animation-duration: 2s;
      -webkit-animation-name: hinge;
      animation-name: hinge;
    }
    /* stylelint-enable */
  `,

  JACK_IN_THE_BOX: css`
    /* stylelint-disable */
    @-webkit-keyframes jackInTheBox {
      from {
        opacity: 0;
        -webkit-transform: scale(0.1) rotate(30deg);
        transform: scale(0.1) rotate(30deg);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
      }

      50% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
      }

      70% {
        -webkit-transform: rotate(3deg);
        transform: rotate(3deg);
      }

      to {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }

    @keyframes jackInTheBox {
      from {
        opacity: 0;
        -webkit-transform: scale(0.1) rotate(30deg);
        transform: scale(0.1) rotate(30deg);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
      }

      50% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
      }

      70% {
        -webkit-transform: rotate(3deg);
        transform: rotate(3deg);
      }

      to {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }

    .jackInTheBox {
      -webkit-animation-name: jackInTheBox;
      animation-name: jackInTheBox;
    }
    /* stylelint-enable */
  `,

  ROLL_IN: css`
    /* stylelint-disable */
    @-webkit-keyframes rollIn {
      from {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
        transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes rollIn {
      from {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
        transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .rollIn {
      -webkit-animation-name: rollIn;
      animation-name: rollIn;
    }
    /* stylelint-enable */
  `,

  ROLL_OUT: css`
    /* stylelint-disable */
    @-webkit-keyframes rollOut {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
        transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
      }
    }

    @keyframes rollOut {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
        transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
      }
    }

    .rollOut {
      -webkit-animation-name: rollOut;
      animation-name: rollOut;
    }
    /* stylelint-enable */
  `,

  ZOOM_IN: css`
    /* stylelint-disable */
    @-webkit-keyframes zoomIn {
      from {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
      }

      50% {
        opacity: 1;
      }
    }

    @keyframes zoomIn {
      from {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
      }

      50% {
        opacity: 1;
      }
    }

    .zoomIn {
      -webkit-animation-name: zoomIn;
      animation-name: zoomIn;
    }
    /* stylelint-enable */
  `,

  ZOOM_IN_DOWN: css`
    /* stylelint-disable */
    @-webkit-keyframes zoomInDown {
      from {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(
          0.55,
          0.055,
          0.675,
          0.19
        );
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }

      60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      }
    }

    @keyframes zoomInDown {
      from {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(
          0.55,
          0.055,
          0.675,
          0.19
        );
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }

      60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      }
    }

    .zoomInDown {
      -webkit-animation-name: zoomInDown;
      animation-name: zoomInDown;
    }
    /* stylelint-enable */
  `,

  ZOOM_IN_LEFT: css`
    /* stylelint-disable */
    @-webkit-keyframes zoomInLeft {
      from {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(
          0.55,
          0.055,
          0.675,
          0.19
        );
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }

      60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      }
    }

    @keyframes zoomInLeft {
      from {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(
          0.55,
          0.055,
          0.675,
          0.19
        );
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }

      60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      }
    }

    .zoomInLeft {
      -webkit-animation-name: zoomInLeft;
      animation-name: zoomInLeft;
    }
    /* stylelint-enable */
  `,

  ZOOM_IN_RIGHT: css`
    /* stylelint-disable */
    @-webkit-keyframes zoomInRight {
      from {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(
          0.55,
          0.055,
          0.675,
          0.19
        );
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }

      60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      }
    }

    @keyframes zoomInRight {
      from {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(
          0.55,
          0.055,
          0.675,
          0.19
        );
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }

      60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      }
    }

    .zoomInRight {
      -webkit-animation-name: zoomInRight;
      animation-name: zoomInRight;
    }
    /* stylelint-enable */
  `,

  ZOOM_IN_UP: css`
    /* stylelint-disable */
    @-webkit-keyframes zoomInUp {
      from {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(
          0.55,
          0.055,
          0.675,
          0.19
        );
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }

      60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      }
    }

    @keyframes zoomInUp {
      from {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(
          0.55,
          0.055,
          0.675,
          0.19
        );
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }

      60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      }
    }

    .zoomInUp {
      -webkit-animation-name: zoomInUp;
      animation-name: zoomInUp;
    }
    /* stylelint-enable */
  `,

  ZOOM_OUT: css`
    /* stylelint-disable */
    @-webkit-keyframes zoomOut {
      from {
        opacity: 1;
      }

      50% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
      }

      to {
        opacity: 0;
      }
    }

    @keyframes zoomOut {
      from {
        opacity: 1;
      }

      50% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
      }

      to {
        opacity: 0;
      }
    }

    .zoomOut {
      -webkit-animation-name: zoomOut;
      animation-name: zoomOut;
    }
    /* stylelint-enable */
  `,

  ZOOM_OUT_DOWN: css`
    /* stylelint-disable */
    @-webkit-keyframes zoomOutDown {
      40% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
        -webkit-animation-timing-function: cubic-bezier(
          0.55,
          0.055,
          0.675,
          0.19
        );
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }

      to {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      }
    }

    @keyframes zoomOutDown {
      40% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
        -webkit-animation-timing-function: cubic-bezier(
          0.55,
          0.055,
          0.675,
          0.19
        );
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }

      to {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      }
    }

    .zoomOutDown {
      -webkit-animation-name: zoomOutDown;
      animation-name: zoomOutDown;
    }
    /* stylelint-enable */
  `,

  ZOOM_OUT_LEFT: css`
    /* stylelint-disable */
    @-webkit-keyframes zoomOutLeft {
      40% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      }

      to {
        opacity: 0;
        -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
        transform: scale(0.1) translate3d(-2000px, 0, 0);
        -webkit-transform-origin: left center;
        transform-origin: left center;
      }
    }

    @keyframes zoomOutLeft {
      40% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      }

      to {
        opacity: 0;
        -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
        transform: scale(0.1) translate3d(-2000px, 0, 0);
        -webkit-transform-origin: left center;
        transform-origin: left center;
      }
    }

    .zoomOutLeft {
      -webkit-animation-name: zoomOutLeft;
      animation-name: zoomOutLeft;
    }
    /* stylelint-enable */
  `,

  ZOOM_OUT_RIGHT: css`
    /* stylelint-disable */
    @-webkit-keyframes zoomOutRight {
      40% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      }

      to {
        opacity: 0;
        -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
        transform: scale(0.1) translate3d(2000px, 0, 0);
        -webkit-transform-origin: right center;
        transform-origin: right center;
      }
    }

    @keyframes zoomOutRight {
      40% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      }

      to {
        opacity: 0;
        -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
        transform: scale(0.1) translate3d(2000px, 0, 0);
        -webkit-transform-origin: right center;
        transform-origin: right center;
      }
    }

    .zoomOutRight {
      -webkit-animation-name: zoomOutRight;
      animation-name: zoomOutRight;
    }
    /* stylelint-enable */
  `,

  ZOOM_OUT_UP: css`
    /* stylelint-disable */
    @-webkit-keyframes zoomOutUp {
      40% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(
          0.55,
          0.055,
          0.675,
          0.19
        );
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }

      to {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      }
    }

    @keyframes zoomOutUp {
      40% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(
          0.55,
          0.055,
          0.675,
          0.19
        );
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }

      to {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      }
    }

    .zoomOutUp {
      -webkit-animation-name: zoomOutUp;
      animation-name: zoomOutUp;
    }
    /* stylelint-enable */
  `,

  SLIDE_IN_DOWN: css`
    /* stylelint-disable */
    @-webkit-keyframes slideInDown {
      from {
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
        visibility: visible;
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes slideInDown {
      from {
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
        visibility: visible;
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .slideInDown {
      -webkit-animation-name: slideInDown;
      animation-name: slideInDown;
    }
    /* stylelint-enable */
  `,

  SLIDE_IN_LEFT: css`
    /* stylelint-disable */
    @-webkit-keyframes slideInLeft {
      from {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes slideInLeft {
      from {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .slideInLeft {
      -webkit-animation-name: slideInLeft;
      animation-name: slideInLeft;
    }
    /* stylelint-enable */
  `,

  SLIDE_IN_RIGHT: css`
    /* stylelint-disable */
    @-webkit-keyframes slideInRight {
      from {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
        visibility: visible;
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes slideInRight {
      from {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
        visibility: visible;
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .slideInRight {
      -webkit-animation-name: slideInRight;
      animation-name: slideInRight;
    }
    /* stylelint-enable */
  `,

  SLIDE_IN_UP: css`
    /* stylelint-disable */
    @-webkit-keyframes slideInUp {
      from {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
        visibility: visible;
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes slideInUp {
      from {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
        visibility: visible;
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .slideInUp {
      -webkit-animation-name: slideInUp;
      animation-name: slideInUp;
    }
    /* stylelint-enable */
  `,

  SLIDE_OUT_DOWN: css`
    /* stylelint-disable */
    @-webkit-keyframes slideOutDown {
      from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      to {
        visibility: hidden;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }
    }

    @keyframes slideOutDown {
      from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      to {
        visibility: hidden;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }
    }

    .slideOutDown {
      -webkit-animation-name: slideOutDown;
      animation-name: slideOutDown;
    }
    /* stylelint-enable */
  `,

  SLIDE_OUT_LEFT: css`
    /* stylelint-disable */
    @-webkit-keyframes slideOutLeft {
      from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      to {
        visibility: hidden;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    }

    @keyframes slideOutLeft {
      from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      to {
        visibility: hidden;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    }

    .slideOutLeft {
      -webkit-animation-name: slideOutLeft;
      animation-name: slideOutLeft;
    }
    /* stylelint-enable */
  `,

  SLIDE_OUT_RIGHT: css`
    /* stylelint-disable */
    @-webkit-keyframes slideOutRight {
      from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      to {
        visibility: hidden;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }
    }

    @keyframes slideOutRight {
      from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      to {
        visibility: hidden;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }
    }

    .slideOutRight {
      -webkit-animation-name: slideOutRight;
      animation-name: slideOutRight;
    }
    /* stylelint-enable */
  `,

  SLIDE_OUT_UP: css`
    /* stylelint-disable */
    @-webkit-keyframes slideOutUp {
      from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      to {
        visibility: hidden;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }
    }

    @keyframes slideOutUp {
      from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      to {
        visibility: hidden;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }
    }

    .slideOutUp {
      -webkit-animation-name: slideOutUp;
      animation-name: slideOutUp;
    }
    /* stylelint-enable */
  `
};
