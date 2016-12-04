import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/index.js',
  dest: 'dist/bundle.js',
  format: 'iife',
  plugins: [
    resolve({ jsnext: true, main: true, browser: true }),
    commonjs(),
    svelte({ include: 'src/components/**.html' }),
    replace({ 'process.env.NODE_ENV': '"production"' }),
    babel({ exclude: 'node_modules/**' }),
    uglify(),
  ]
};
