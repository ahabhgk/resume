import mume from '@shd101wyy/mume'
import glob from 'tiny-glob'

function mdToPdf(filePath) {
  const engine = new mume.MarkdownEngine({ filePath })
  return engine.chromeExport({ fileType: 'pdf' })
}

async function build() {
  const resumes = await glob('src/**/*.md')
  await Promise.all(resumes.map(mdToPdf))
  console.log('Build .pdf successfully for: ', resumes)
}

build()
