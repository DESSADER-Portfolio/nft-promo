/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: fontsLoader.js
 * Created: 22.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const paths = require("../tools/paths");
const getFilename = require("../tools/getFilename");

module.exports = {
  test: /\.(woff(2)?|ttf|eot|otf)$/,
  type: "asset/resource",
  generator: {
    filename: `${paths.resources.fonts}/${getFilename("[ext]", "asset/resource")}`
  }
};
