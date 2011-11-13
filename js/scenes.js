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

var utils = require("utils");

var AbstractScene = function() {
}

AbstractScene.prototype.update = function(time) {
	
}

var MenuScene = exports.MenuScene = function() {

}
utils.extend(MenuScene, AbstractScene);

var GameScene = exports.GameScene = function() {

}

var HiScoresScene = exports.HiScoresScene = function() {

}

var HelpScene = exports.HelpScene = function() {

}

exports.MENU_SCENE = new MenuScene();
exports.GAME_SCENE = new GameScene();
exports.HELP_SCENE = new HelpScene();
exports.HISCORES_SCENE = new HiScoresScene();

}}, ["utils"]);