import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import nodeGlobals from 'rollup-plugin-node-globals';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const isProd = process.env.NODE_ENV === 'production';

const banner = `
  /**
   * @license
   * author: ${pkg.author.name}
   * Released under the ${pkg.license} license.
   */
`;

const globals = {
  react: 'React'
};

export default (async () => ({
  input: 'components/index.ts',
  output: [
    {
      file: `dist/umd/stoui.${isProd ? 'production.min' : 'development'}.js`,
      format: 'umd',
      globals,
      name: 'Stone UI',
      banner
    },
    {
      file: `dist/${pkg.main}`,
      format: 'iife',
      extend: true,
      globals,
      name: 'Stone UI',
      banner
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    peerDepsExternal(),
    nodeResolve(),
    nodeGlobals(),
    json(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: 'tsconfig.build.json',
      clean: true
    }),
    postcss({
      extensions: ['.css', '.scss', '.sass'],
      extract: true,
      minimize: isProd
      // modules: true
    }),
    isProd && (await import('rollup-plugin-terser')).terser()
  ]
}))();
