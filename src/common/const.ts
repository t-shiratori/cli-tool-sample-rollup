export const PRINT_COLOR = {
  RESET: '\x1b[0m',
  FG: {
    BLACK: '\x1b[30m',
    RED: '\x1b[31m',
    GREEN: '\x1b[32m',
    CYAN: '\x1b[36m',
    WHITE: '\x1b[37m',
  },
  BG: {
    BLACK: '\x1b[40m',
    RED: '\x1b[41m',
    GREEN: '\x1b[42m',
    CYAN: '\x1b[46m',
    WHITE: '\x1b[47m',
  },
} as const

export const PRINT_COLOR_MAP_ORIGIN = {
  fb: PRINT_COLOR.FG.BLACK,
  fr: PRINT_COLOR.FG.RED,
  fg: PRINT_COLOR.FG.GREEN,
  fc: PRINT_COLOR.FG.CYAN,
  fw: PRINT_COLOR.FG.WHITE,
  br: PRINT_COLOR.BG.RED,
  bg: PRINT_COLOR.BG.GREEN,
  bc: PRINT_COLOR.BG.CYAN,
  bw: PRINT_COLOR.BG.WHITE,
}

export const PRINT_COLOR_MAP = new Map(Object.entries(PRINT_COLOR_MAP_ORIGIN))
