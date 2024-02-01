require('esbuild')
  .build({
    entryPoints: ['src/index.js'],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: 'dist/src/index.js',
  })
  .catch(() => {
    process.exit(1)
  })
