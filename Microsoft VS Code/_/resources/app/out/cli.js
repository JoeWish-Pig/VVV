/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";const bootstrap=require("./bootstrap"),product=require("../product.json");bootstrap.avoidMonkeyPatchFromAppInsights(),bootstrap.configurePortable(product),bootstrap.enableASARSupport(),require("./bootstrap-amd").load("vs/code/node/cli");
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/93c2f0fbf16c5a4b10e4d5f89737d9c2c25488a3/core/cli.js.map
