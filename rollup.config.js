import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json';

const isProduction = process.env.NODE_ENV === 'production';

export default (async () => ({
  input: 'components/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      name: 'Stone UI',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      name: 'Stone UI',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      jsnext: true
    }),
    json(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      config: {
        path: './postcss.config.js'
      },
      // extensions: ['.css', '.scss', '.sass'],
      extract: true,
      minimize: isProduction
      // modules: true,
    }),
    isProduction && (await import('rollup-plugin-terser')).terser()
  ]
}))();
