export default function shebangPlugin() {
  return {
    name: 'shebangPlugin',
    renderChunk(code) {
      return '#!/usr/bin/env node\n' + code
    },
  }
}
