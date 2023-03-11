import { DeepPartial } from './deep-partial';

export interface StoTheme {
  accordion: {
    base: string;
    content: {
      base: string;
    };
    flush: StoBoolean;
    title: {
      arrow: {
        base: string;
        open: {
          off: string;
          on: string;
        };
      };
      base: string;
      flush: StoBoolean;
      heading: string;
      open: StoBoolean;
    };
  };
  alert: {
    base: string;
    borderAccent: string;
    closeButton: {
      base: string;
      color: AlertColors;
    };
    color: AlertColors;
    icon: string;
    rounded: string;
  };
  avatar: {
    base: string;
    bordered: string;
    img: {
      off: string;
      on: string;
    };
    rounded: string;
    size: AvatarSizes;
    stacked: string;
    status: {
      away: string;
      base: string;
      busy: string;
      offline: string;
      online: string;
    };
    statusPosition: StoPositions;
  };
  badge: {
    base: string;
    color: BadgeColors;
    href: string;
    icon: {
      off: string;
      on: string;
      size: BadgeSizes;
    };
    size: BadgeSizes;
  };
  breadcrumb: {
    item: {
      base: string;
      chevron: string;
      href: {
        off: string;
        on: string;
      };
      icon: string;
    };
    list: string;
  };
  button: {
    base: string;
    color: ButtonColors;
    disabled: string;
    gradient: ButtonGradientColors;
    gradientDuoTone: ButtonGradientDuoToneColors;
    inner: {
      base: string;
      position: PositionInButtonGroup;
    };
    label: string;
    outline: StoBoolean & {
      color: ButtonOutlineColors;
      pill: StoBoolean;
    };
    pill: StoBoolean;
    size: ButtonSizes;
  };
  buttonGroup: {
    base: string;
    position: PositionInButtonGroup;
  };
  card: {
    base: string;
    children: string;
    horizontal: {
      off: string;
      on: string;
    };
    href: string;
    img: {
      base: string;
      horizontal: {
        off: string;
        on: string;
      };
    };
  };
  carousel: {
    base: string;
    indicators: {
      active: {
        off: string;
        on: string;
      };
      base: string;
      wrapper: string;
    };
    item: {
      base: string;
      wrapper: string;
    };
    leftControl: string;
    rightControl: string;
    scrollContainer: {
      base: string;
      snap: string;
    };
  };
  darkThemeToggle: {
    base: string;
    icon: string;
  };
  listGroup: {
    base: string;
    item: {
      active: StoBoolean;
      base: string;
      href: StoBoolean;
      icon: string;
    };
  };
  modal: {
    base: string;
    show: StoBoolean;
    content: {
      base: string;
      inner: string;
    };
    body: {
      base: string;
      popup: string;
    };
    header: {
      base: string;
      popup: string;
      title: string;
      close: {
        base: string;
        icon: string;
      };
    };
    footer: {
      base: string;
      popup: string;
    };
    sizes: ModalSizes;
    positions: ModalPositions;
  };
  rating: {
    base: string;
    star: {
      sizes: StarSizes;
      filled: string;
      empty: string;
    };
    advanced: {
      base: string;
      label: string;
      progress: {
        base: string;
        fill: string;
        label: string;
      };
    };
  };
  pagination: {
    base: string;
    layout: {
      table: {
        base: string;
        span: string;
      };
    };
    pages: {
      base: string;
      showIcon: string;
      previous: {
        base: string;
        icon: string;
      };
      next: {
        base: string;
        icon: string;
      };
      selector: {
        base: string;
        active: string;
      };
    };
  };
  sidebar: {
    base: string;
    collapsed: StoBoolean;
    inner: string;
    collapse: {
      button: string;
      icon: {
        base: string;
        open: StoBoolean;
      };
      label: {
        base: string;
        icon: string;
      };
      list: string;
    };
    cta: {
      base: string;
      color: SidebarCTAColors;
    };
    item: {
      active: string;
      base: string;
      collapsed: {
        insideCollapse: string;
      };
      content: {
        base: string;
        collapsed: string;
      };
      icon: {
        base: string;
        active: string;
      };
    };
    items: string;
    itemGroup: string;
    logo: {
      base: string;
      collapsed: StoBoolean;
      img: string;
    };
  };
  spinner: {
    base: string;
    color: SpinnerColors;
    light: {
      off: {
        base: string;
        color: SpinnerColors;
      };
      on: {
        base: string;
        color: SpinnerColors;
      };
    };
    size: SpinnerSizes;
  };
  toast: {
    base: string;
    closed: string;
    removed: string;
    toggle: {
      base: string;
      icon: string;
    };
  };
  tooltip: {
    target: string;
    base: string;
    animation: string;
    hidden: string;
    style: {
      dark: string;
      light: string;
      auto: string;
    };
    content: string;
    arrow: {
      base: string;
      style: {
        dark: string;
        light: string;
        auto: string;
      };
      placement: string;
    };
  };
}

export type CustomTheme = DeepPartial<StoTheme>;

export interface StoBoolean {
  off: string;
  on: string;
}

export interface StoColors {
  blue: string;
  cyan: string;
  dark: string;
  failure: string;
  gray: string;
  green: string;
  indigo: string;
  info: string;
  light: string;
  lime: string;
  pink: string;
  purple: string;
  red: string;
  success: string;
  teal: string;
  warning: string;
  yellow: string;
}

export interface StoGradientColors {
  cyan: string;
  failure: string;
  info: string;
  lime: string;
  pink: string;
  purple: string;
  success: string;
  teal: string;
}

export interface StoGradientDuoToneColors {
  cyanToBlue: string;
  greenToBlue: string;
  pinkToOrange: string;
  purpleToBlue: string;
  purpleToPink: string;
  redToYellow: string;
  tealToLime: string;
}

export type StoHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface StoPositions {
  'bottom-left': string;
  'bottom-right': string;
  'bottom-center': string;
  'top-left': string;
  'top-center': string;
  'top-right': string;
  'center-left': string;
  center: string;
  'center-right': string;
}

export interface StoSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
}

export interface StoColors {
  [key: string]: string;
}
