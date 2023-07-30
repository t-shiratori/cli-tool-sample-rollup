import { program } from 'commander'
import { colorPrint } from './common/utils'
import { COLOR_MAP_KEYS } from './common/const'
;(() => {
  program
    .description('Display strings in console')
    .option('-w, --word <char>', 'somthing display word')
    .option('-c, --color <char>', `colorKey [${COLOR_MAP_KEYS.toString()}]`)

  const parsed = program.parse(process.argv)
  const args = parsed.opts()

  colorPrint({ word: args.word, colorKey: args.color })
})()
