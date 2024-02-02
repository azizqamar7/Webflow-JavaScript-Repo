require('esbuild')
  .build({
    entryPoints: ['src/index.js', 'src/about.js', 'src/components/button.js'],
    entryNames: '[dir]/[name]-[hash]',
    outbase: 'src',
    bundle: true,
    minify: true,
    outdir: 'out',
  })
  .catch(() => {
    process.exit(1)
  })
