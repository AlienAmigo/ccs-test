import { css } from 'styled-components';

const MIXINS = {
  MEDIA: (size = 'desktop', code = css``) => {
    switch (size) {
      case 'phone':
        return css`
          @media screen and (max-width: 768px) {
            ${code}
          }
        `;
      case 'tablet':
        return css`
          @media screen and (max-width: 1440px) {
            ${code}
          }
        `;
      default:
        return css`
          @media screen and (min-width: 1440px + 1px) {
            ${code}
          }
        `;
    }
  },

  // псевдоблок
  PSEUDO: (display = 'block', pos = 'absolute', content = '') => css`
    content: '${content}';
    display: ${display};
    position: ${pos};
  `,

  // защита о текстового переполнения
  TEXT_OVERFLOW: () => css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,

  // защита о текстового переполнения (многострочное)
  PARAGRAPH_TEXT_OVERFLOW: (linesCount = 3) => css`
    display: -webkit-box; /* stylelint-disable-line value-no-vendor-prefix */
    overflow: hidden;
    -webkit-line-clamp: ${linesCount}; /* stylelint-disable-line property-no-vendor-prefix */
    -webkit-box-orient: vertical; /* stylelint-disable-line property-no-vendor-prefix */
    text-overflow: ellipsis;
  `,

  // стилизация скролла эл-та
  SCROLL_STYLE: (width = '7px', scrollbarColor = '#D1D1D1') => css`
    /* Mozilla */
    scrollbar-color: rgba(0, 0, 0, 0.4) ${scrollbarColor};
    scrollbar-width: thin;
    /* Webkit */
    /* stylelint-disable-next-line */

    &::-webkit-scrollbar {
      width: ${width};
      height: ${width};
      background-color: ${scrollbarColor};
      border-radius: 3px;
    }

    /* stylelint-disable-next-line */

    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.4);
    }
  `,

  // адаптивное видео (по умолчанию пропорции для видео с YouTube)
  ADAPTIVE_VIDEO: (proportion = '56.25%', bgColor = '#000') => css`
    position: relative;
    width: auto;
    height: 0;
    padding-bottom: ${proportion};
    background-color: ${bgColor};

    /* stylelint-disable */
    iframe,
    object,
    embed,
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
    /* stylelint-enable */
  `,

  // текст с градиентом
  GRADIENT_TEXT: (gradient: string) => css`
    background: ${gradient};
    -webkit-background-clip: text; /* stylelint-disable-line property-no-vendor-prefix */
    -webkit-text-fill-color: transparent; /* stylelint-disable-line property-no-vendor-prefix */
  `,

  // фигурный фон блоков
  POLYGON_BACKGROUND: (
    polygon: string,
    color: string,
    zIndex = -1,
    position = 'relative'
  ) => css`
    position: ${position};

    /* stylelint-disable-next-line */
    &::before {
      content: '';
      display: block;
      position: absolute;
      z-index: ${zIndex};
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${color};
      clip-path: ${polygon.toString()};
    }
  `,

  // стандартная анимация
  TRANSITION: (property = 'opacity', delay = '0.25s', style = 'ease-in') => css`
    transition: ${property} ${delay} ${style};
  `,

  // анимация на hover
  HOVER: (delay = '0.25s') => css`
    transition: opacity ${delay} ease-in;

    /* stylelint-disable-next-line plugin/selector-bem-pattern */

    &:hover {
      opacity: 0.65;
    }
  `,

  HOVER_IMG: (delay = '0.25s') => css`
    transition: opacity ${delay} ease-in;

    /* stylelint-disable-next-line plugin/selector-bem-pattern */

    &:hover {
      overflow: hidden;
      opacity: 0.65;

      & img {
        transform: scale(1.025);
        transition: transform 0.25s ease-in;
      }
    }
  `,

  // Button Basic Style
  BUTTON_BASIC_STYLE: (fz = '1.375rem', bdrs = '16px') => css`
    @keyframes bgMove {
      0% {
        background-position: 0 82%;
      }

      50% {
        background-position: 100% 19%;
      }

      100% {
        background-position: 0 82%;
      }
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: ${bdrs};
    background: var(--main-color);
    font-weight: 700;
    font-size: ${fz};
    color: var(--white-color);
    outline-color: var(--submain-color);
    cursor: pointer;

    &:visited,
    &:active {
      color: var(--white-color);
    }

    &:hover {
      background: linear-gradient(
        90deg,
        var(--main-color),
        var(--submain-color),
        var(--main-color)
      );
      background-size: 400% 400%;
      transition: all 0.35s;
      animation: bgMove 5s ease infinite;
    }
  `
};

export default MIXINS;
