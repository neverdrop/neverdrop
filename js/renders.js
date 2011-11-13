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

require.define({"renders": function(require, exports, module) {

var utils = require("utils");
var config = require("config");
var models = require("models");

var AbstractRender = function() { };
AbstractRender.prototype.render = function (scene) {

	this.clear();

	for (var index in scene.models) {

		if (scene.models[index] instanceof models.BlobModel) {
			
		}
	}
};

var CanvasRender = exports.CanvasRender = function(context) {
	this.context = context;
};
utils.extend(CanvasRender, AbstractRender);

CanvasRender.prototype.drawText = function(text) {
	this.context.fillText(text, 20, 20);
};

CanvasRender.prototype.clear = function() {
	this.context.clearRect(0, 0, config.HEIGHT, config.WIDTH);
};

var WebGLRender = exports.WebGLRender = function() {

};
utils.extend(WebGLRender, AbstractRender);

var DebugRender = exports.DebugRender = function(context) {
	AbstractRender.call(this);

	var dd = new b2DebugDraw();
	dd.SetSprite(context);
	dd.SetDrawScale(30.0);
	dd.SetFillAlpha(0.5);
	// dd.SetLineThickness(1.0);
	dd.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);

	this.debugDraw = dd;
	
};
utils.extend(WebGLRender, AbstractRender);

DebugRender.prototype.render = function (scene) {
	// scene.world.SetDebugDraw(this.debugDraw);
};

}}, ["utils", "config", "models"]);
