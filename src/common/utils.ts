import { PRINT_COLOR, PRINT_COLOR_MAP_ORIGIN, PRINT_COLOR_MAP } from './const'

type TPrintArgs = {
  word?: string
  colorKey?: keyof typeof PRINT_COLOR_MAP_ORIGIN
}

export const colorPrint = ({ word = 'hello', colorKey = 'fw' }: TPrintArgs) => {
  const color = PRINT_COLOR_MAP.get(colorKey) ?? PRINT_COLOR.FG.WHITE
  console.log(`${color}${word}${PRINT_COLOR.RESET}`)
}
