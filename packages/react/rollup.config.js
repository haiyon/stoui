import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
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
   * released under the ${pkg.license} license.
   */
`;

const globals = {
  react: 'React'
};

export default (async () => ({
  input: 'components/index.ts',
  output: [
    {
      exports: 'named',
      file: `dist/${pkg.main}`,
      format: 'cjs',
      globals,
      banner
    },
    {
      exports: 'named',
      file: `dist/${pkg.module}`,
      format: 'esm',
      globals,
      banner
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
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
      // extensions: ['.css', '.scss', '.sass'],
      extract: true,
      minimize: isProd,
      modules: false
    }),
    await terser()
  ]
}))();
