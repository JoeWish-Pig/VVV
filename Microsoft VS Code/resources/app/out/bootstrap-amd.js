/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";const loader=require("./vs/loader"),bootstrap=require("./bootstrap"),nlsConfig=bootstrap.setupNLS();loader.config({baseUrl:bootstrap.fileUriFromPath(__dirname),catchError:!0,nodeRequire:require,nodeMain:__filename,"vs/nls":nlsConfig}),(process.env.ELECTRON_RUN_AS_NODE||process.versions.electron)&&loader.define("fs",["original-fs"],(function(e){return e})),nlsConfig.pseudo&&loader(["vs/nls"],(function(e){e.setPseudoTranslation(nlsConfig.pseudo)})),exports.load=function(e,o,n){e&&(process.env.VSCODE_NODE_CACHED_DATA_DIR&&loader.config({nodeCachedData:{path:process.env.VSCODE_NODE_CACHED_DATA_DIR,seed:e}}),loader([e],o=o||function(){},n=n||function(e){console.error(e)}))};
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/e5e9e69aed6e1984f7499b7af85b3d05f9a6883a/core/bootstrap-amd.js.map
