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

require.define({"models": function(require, exports, module) {

var utils = require("utils");

var AbstractModel = function() {
	this.x = 0;
	this.y = 0;
	this.height = 0;
	this.width = 0;
};
AbstractModel.prototype.update = function(time) {

};

var BlobModel = exports.BlobModel = function() {
	AbstractModel.call(this);

	this.data = 0;
};
utils.extend(BlobModel, AbstractModel);

BlobModel.prototype.update = function(time) {
	this.data = time;
}

}}, ["utils"]);