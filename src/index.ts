import { program } from 'commander'
import { colorPrint } from './common/utils'
import { COLOR_MAP_KEYS } from './common/const'
;(() => {
  program
    .description('Split a string into substrings and display as an array')
    .option('-w, --word <char>', 'somthing word')
    .option('-c, --color <char>', `colorKey [${COLOR_MAP_KEYS.toString()}]`)

  const parsed = program.parse(process.argv)
  const args = parsed.opts()

  colorPrint({ word: args.word, colorKey: args.color })
})()
