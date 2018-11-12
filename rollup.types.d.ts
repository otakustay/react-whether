declare function resolve(): void
declare function commonjs(): void
declare function sourcemaps(): void
declare function json(): void

declare module 'rollup-plugin-node-resolve' {
    export = resolve
}

declare module 'rollup-plugin-commonjs' {
    export = commonjs
}

declare module 'rollup-plugin-sourcemaps' {
    export = sourcemaps
}

declare module 'rollup-plugin-json' {
    export = json
}

declare module 'rollup-plugin-terser' {
    export const terser: () => void;
}
