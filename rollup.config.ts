import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';

const inputOption = {
    input: 'src/index.ts',
    external: ['react', 'prop-types'],
    plugins: [
        json(),
        typescript({
            useTsconfigDeclarationDir: true,
        }),
        commonjs(),
        resolve(),
        sourceMaps(),
        terser(),
    ],
};

const outputOption = [
    {file: pkg.main, name: 'index', format: 'cjs', sourcemap: true},
    {file: pkg.module, name: 'index', format: 'es', sourcemap: true},
];

// why divide into two option
// https://github.com/TrySound/rollup-plugin-terser/issues/5
export default outputOption.map(output => ({...inputOption, output}));
