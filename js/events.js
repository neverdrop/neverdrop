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

require.define({"events": function(require, exports, module) {

var EVENT_TYPE = exports.EVENT_TYPE = {
	LEFT_PRESSED: 		0,
	RIGHT_PRESSED: 		1,
	LEFT_RELEASED: 		2,
	RIGHT_RELEASED: 	3
}

var Event = exports.Event = function (type) {
	this.type = type;
}

var queue = exports.queue = [];

document.onkeydown = function(e) {

	if (e.keyCode == 37) {
		var event = new Event(EVENT_TYPE.LEFT_PRESSED);
		queue.push(event);
	} else if (e.keyCode == 39) {
		event = new Event(EVENT_TYPE.RIGHT_PRESSED);
		queue.push(event);
	}
}

document.onkeyup = function(e) {

	if (e.keyCode == 37) {
		var event = new Event(EVENT_TYPE.LEFT_RELEASED);
		queue.push(event);
	} else if (e.keyCode == 39) {
		var event = new Event(EVENT_TYPE.RIGHT_RELEASED);
		queue.push(event);
	}
};

}}, []);