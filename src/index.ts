import { colorPrint } from './common/utils'

const speaker = () => {
  colorPrint({ words: 'hoge' })
}

speaker()

console.log({ 'process.argv': process.argv })

console.log('hey')
