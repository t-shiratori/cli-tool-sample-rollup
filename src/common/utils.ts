import { PRINT_COLOR } from './const'

type TPrintArgs = {
  words: string
}

export const colorPrint = ({ words }: TPrintArgs) => {
  console.log(`${PRINT_COLOR.FG.GREEN}${words}${PRINT_COLOR.RESET}`)
}
