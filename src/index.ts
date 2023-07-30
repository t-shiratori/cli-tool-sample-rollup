import { program } from 'commander'
import { colorPrint } from './common/utils'
import { PRINT_COLOR_MAP_ORIGIN } from './common/const'

const colorKeys = Object.keys(PRINT_COLOR_MAP_ORIGIN)

program
  .description('Split a string into substrings and display as an array')
  .option('-w, --word <char>', 'somthing word')
  .option('-c, --color <char>', `colorKey [${colorKeys.toString()}]`)

const parsed = program.parse(process.argv)
const args = parsed.opts()

colorPrint({ word: args.word, colorKey: args.color })
