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

require.define({"main": function(require, exports, module) {

var config = require("config");
var utils = require("utils");
var scenes = require("scenes");
var models = require("models");
var renders = require("renders");

var main = function(canvas) {

	canvas.height = config.HEIGHT;
	canvas.width = config.WIDTH;

	var scene = scenes.MENU_SCENE;
	var render = new renders.CanvasRender(canvas.getContext("2d"));

	var tick = function(time) {

		scene.update(time);
		render.render(scene);

	};

	// var interrupter = setInterval(tick, 30 / exports.FPS);

	tick(0);
}

main(utils.$("canvas"));

}}, ["config", "utils", "scenes", "models", "renders"]);