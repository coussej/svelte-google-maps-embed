import svelte from 'rollup-plugin-svelte';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/svelte-google-maps-embed.js',
    format: 'cjs'
  },
  plugins: [
    svelte({
      include: 'src/**/*.html'
    })
  ]
}