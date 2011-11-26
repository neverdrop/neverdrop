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

require.define({"scenes": function(require, exports, module) {

var models = require("models");
var utils = require("utils");

var indexer = 0;

var AbstractScene = function() {

	this.models = {};

};
AbstractScene.prototype.add = function(model) {
	this.models[indexer++] = model;
};

AbstractScene.prototype.remove = function(model) {
	for (var index in this.models) {
		if (model == this.models[index]) {
			delete this.models[index];
			return;
		}
	}
};

AbstractScene.prototype.update = function(time) {
	for (var index in this.models) {
		this.models[index].update(time);
	}
};

var MenuScene = exports.MenuScene = function() {
	AbstractScene.call(this);

};
utils.extend(MenuScene, AbstractScene);

var GameScene = exports.GameScene = function() {
	AbstractScene.call(this);

	this.world = new b2World(new b2Vec2(0, 10), true);

	// this.models[indexer++] = new models.BlobModel(this.world);
	new models.BlobModel(this.world);

};
utils.extend(GameScene, AbstractScene);

GameScene.prototype.update = function(time) {
	// AbstractScene.prototype.update(this);

	this.world.Step(1/30, 10, 10);

};

var HiScoresScene = exports.HiScoresScene = function() {

};
utils.extend(HiScoresScene, AbstractScene);

var HelpScene = exports.HelpScene = function() {

};
utils.extend(HelpScene, AbstractScene);

var MENU_SCENE = exports.MENU_SCENE = new MenuScene();
var GAME_SCENE = exports.GAME_SCENE = new GameScene();
var HELP_SCENE = exports.HELP_SCENE = new HelpScene();
var HISCORES_SCENE = exports.HISCORES_SCENE = new HiScoresScene();

}}, ["models", "utils"]);