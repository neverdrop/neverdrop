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
var events = require("events");

var AbstractModel = function() {

};

AbstractModel.prototype.update = function(time) {

};

var BlobModel = exports.BlobModel = function(world) {
	AbstractModel.call(this);

	var bodyDef = new b2BodyDef();
	bodyDef.type = b2Body.b2_dynamicBody;

	var fixDef = new b2FixtureDef();

	fixDef.density = 1.0;
	fixDef.friction = 0.5;
	fixDef.restitution = 0.2;

	fixDef.shape = new b2PolygonShape();
	fixDef.shape.SetAsBox(1, 1);

	bodyDef.position.x = 10;
	bodyDef.position.y = 10;

	this.body = world.CreateBody(bodyDef).CreateFixture(fixDef).GetBody();

};
utils.extend(BlobModel, AbstractModel);

BlobModel.prototype.update = function(time) {
	this.data = time;
};

BlobModel.prototype.render = function(renderer) {
	// renderer.renderText("asdasd");
};

BlobModel.prototype.handle = function(event) {

	if (event.type == events.EVENT_TYPE.LEFT_PRESSED) {
		var position = this.body.GetPosition();
		position.x += 0.5;
		this.body.SetPosition(position);
	}
	
};

}}, ["utils", "events"]);