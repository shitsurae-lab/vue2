const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  //npx webpackのモード指定。デフォルトは'production'
  mode: 'development',
  //JSのコンパイルは下記 "devtool: 'source-map',"
  devtool: 'source-map',
  entry: './src/js/main.js', //エントリーポイント => ./src/js/内に変更 + main.jsに変更
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './js/[name]-[contenthash].js', //main.jsの代わりに[name]-[contenthash].jsとすることでファイル名を強制的にキャッシュすることができる。
    //defaultは 'main.js' + ./js/とすることでフォルダ内に出力される
    publicPath: '/', //Section17 80「CSSスタイルの調整」
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.vue/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
      {
        //ES6のコンパイル記述
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: '>0.25%, not dead' }],
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
      {
        test: /\.(css|sass|scss)/, //testはファイル名(.css)を検知
        use: [
          {
            // loader: 'style-loader',
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            //SCSSのソースマップはかなり重くなるので開発時に必要なときだけtrueにするとよいらしい
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        //Asset Modulesを使う際の記述
        test: /\.(png|jpg)/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name]-[contenthash][ext]', //[name]の代わりに[name]-[contenthash]とすることでファイル名を強制的にキャッシュすることができる。
        },
        use: [
          //{
          //file-loaderを使うのでコメントアウト
          // loader: 'url-loader',
          //Asset Modulesを使うのでfile-loaderをコメントアウト
          // loader: 'file-loader',
          //  options: {
          //    esModule: false,
          //    name: 'images/[name].[ext]',
          //  },
          //},
          {
            //画像ファイルの圧縮
            loader: 'image-webpack-loader',
          },
        ],
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options: {
              //prettyをつけることでHTMLが整形される
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      //srcと同じ名前のCSSファイルがdistに出力される(src内のmy.cssにあわせる=> main.css)
      filename: './stylesheets/[name]-[contenthash].css', //[name]の代わりに[name]-[contenthash].jsとすることでファイル名を強制的にキャッシュすることができる。
    }),
    new HtmlWebpackPlugin({
      //srcフォルダ内にHTMLファイルの雛形を作り、ここから読ませる + src配下のtemplatesフォルダに入れる
      // template: './src/templates/index.html',
      //srcフォルダ内をpugファイルに変更
      template: './src/templates/index.pug',
      filename: 'index.html',
    }),

    new CleanWebpackPlugin(),
  ],
  //マスタッシュを表示させない
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  //webpack-dev-server ポート番号変更 https://bit.ly/3Caxfbp
  devServer: {
    port: 8100, // ポート番号
  },
};
