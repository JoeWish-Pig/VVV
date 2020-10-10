/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";function _factory(e){e.MonacoPerformanceMarks=e.MonacoPerformanceMarks||[];const o=2,r="function"==typeof console.timeStamp?console.timeStamp.bind(console):()=>{};return{mark:function(o){e.MonacoPerformanceMarks.push(o,Date.now()),r(o)},getEntries:function(){const r=[],t=e.MonacoPerformanceMarks;for(let e=0;e<t.length;e+=o)r.push({name:t[e],startTime:t[e+1]});return r},getDuration:function(r,t){const n=e.MonacoPerformanceMarks;let a=t,c=0;for(let e=n.length-o;e>=0;e-=o)if(n[e]===a){if(a!==t)return n[c+1]-n[e+1];c=e,a=r}return 0},importEntries:function(o){e.MonacoPerformanceMarks.splice(0,0,...o)},exportEntries:function(){return e.MonacoPerformanceMarks.slice(0)}}}var sharedObj;sharedObj="object"==typeof global?global:"object"==typeof self?self:{},"function"==typeof define?define([],(function(){return _factory(sharedObj)})):"object"==typeof module&&"object"==typeof module.exports?module.exports=_factory(sharedObj):sharedObj.perf=_factory(sharedObj);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/e5e9e69aed6e1984f7499b7af85b3d05f9a6883a/core/vs/base/common/performance.js.map
