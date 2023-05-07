import { BuildOptions } from "./types/config";
import webpack from 'webpack';
import path from 'path';
import { buildPlagins } from './buildPlagins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;
    
    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        plugins: buildPlagins(options),
        devServer:  isDev ? buildDevServer(options) : undefined,
    };

}