import { defineConfig } from '@farmfe/core';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isDev = mode === 'production' ? false : true;
  return {
    plugins: [
      '@farmfe/plugin-react',
    ],
    server: {
      hmr: true,
    },
    compilation: {
      lazyCompilation: true,
      sourcemap: isDev ? 'all' : false,
      script: {
        target: 'es5',
        decorators: {
          legacyDecorator: true,
          decoratorMetadata: false,
          /**
           * 装饰器版本： 2021-12 或者 2022-03
           * @default 2021-12
           */
          decoratorVersion: '2021-12',
          /**
           * @default []
           */
          includes: ['src/'],
          /**
           * @default ["node_modules/"]
           */
          excludes: ['node_modules/**/*'],
        },
        plugins: [],
        parser: {
          esConfig: {
            jsx: true,
            fnBind: true,
            decorators: true,
            decoratorsBeforeExport: true,
            exportDefaultFrom: true,
            importAssertions: true,
            privateInObject: true,
            allowSuperOutsideMethod: true,
            allowReturnOutsideFunction: true,
          },
          tsConfig: {
            tsx: true,
            decorators: true,
            dts: true,
            noEarlyErrors: true,
          },
        },
      },
      resolve: {
        alias: {
          '@/': path.join(process.cwd(), 'src'),
        },
        extensions: ['tsx', 'ts', 'jsx', 'js', 'mjs', 'json', 'html', 'css'],
      },
      css: {
        modules: {
          paths: ['.module.css', '.module.less', '.less'],
        },
      },
      output: {
        targetEnv: 'browser-legacy',
        filename: 'assets/[ext]/[hash].[ext]',
        assetsFilename: 'assets/[ext]/[hash].[ext]',
      },
      minify: {
        compress: {
          drop_console: isDev ? false : true,
        },
      },
    },
  };
});
