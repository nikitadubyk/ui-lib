import svgr from '@svgr/rollup';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      exports: 'named',
      preserveModules: true,
    },
  ],
  plugins: [
    svgr(),
    image(),
    commonjs(),
    peerDepsExternal(),
    typescript({
      module: 'esnext',
      tsconfig: 'tsconfig.json',
    }),
  ],
  external: ['react'],
};
