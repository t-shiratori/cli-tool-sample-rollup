import { program } from 'commander'
import { colorPrint } from './common/utils'

program.description('Split a string into substrings and display as an array').option('-w, --words <char>', 'words')

const parsed = program.parse(process.argv)

console.log({ 'process.argv': process.argv, parsed })

const speaker = () => {
  colorPrint({ words: 'hoge' })
}

speaker()

console.log({ 'process.argv': process.argv })

console.log('hey')
