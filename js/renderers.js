/*
 * Copyright 2011, Neverdrop project (http://neverdrop.github.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

require.define({"renderers": function(require, exports, module) {

var utils = require("utils");
var config = require("config");
var models = require("models");

var AbstractRenderer = function() { };
AbstractRenderer.prototype.render = function(scene) {

	this.clear();

	for (var index in scene.models) {
		scene.models[index].render(this);
	}

};
AbstractRenderer.prototype.clear = function() { };
AbstractRenderer.prototype.renderText = function(text) { };
AbstractRenderer.prototype.renderImage = function(image) { };

var CanvasRenderer = exports.CanvasRenderer = function(context) {
	this.context = context;
};
utils.extend(CanvasRenderer, AbstractRenderer);

CanvasRenderer.prototype.renderText = function(text) {
	this.context.fillText(text, 20, 20);
};

CanvasRenderer.prototype.clear = function() {
	this.context.clearRect(0, 0, config.HEIGHT, config.WIDTH);
};

var WebGLRenderer = exports.WebGLRenderer = function() {

};
utils.extend(WebGLRenderer, AbstractRenderer);

var DebugRenderer = exports.DebugRenderer = function(context) {
	AbstractRenderer.call(this);

//	var dd = new b2DebugDraw();
//	dd.SetSprite(context);
//	dd.SetDrawScale(30.0);
//	dd.SetFillAlpha(0.5);
//	// dd.SetLineThickness(1.0);
//	dd.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
//
//	this.debugDraw = dd;
//
};
utils.extend(WebGLRenderer, AbstractRenderer);

DebugRenderer.prototype.render = function (scene) {
	// scene.world.SetDebugDraw(this.debugDraw);
};

}}, ["utils", "config", "models"]);
