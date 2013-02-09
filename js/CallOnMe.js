var Call = (function() {
	var that = this;
	var _students = [];
	var _used = [];
	var _skip = [];
	var _current = {};
	
	that.Get = function(i) {
		if(typeof i == 'number') {
			return _students[i];	
		} else {
			return _students;
		}
	};
	
	that.Add = function(o) {
		if(o.name) {
			_students.push(o);	
		} else if(typeof o.length == 'number') {
			for(var i = 0; i < o.length; i++) {
				_students.push(o[i]);
			}
		}
		
	};
	
	that.Next = function () {
		if(_current.name) _used.push(_current);
		
		if (_students.length == 0) {
			_students = _used;
			_used = [];
		}
		
		var i = Math.round((Math.random() * 101)) % _students.length;
		
		_current = _students[i];
		
		_students.splice(i, 1);
		
		return _current;
	}
	
	that.Skip = function () {
		if(_current.name) {
			_skip.push(_current);
			var rtn = _current;
		
			_current = {};
		
			return rtn;
		}
	}
	
	that.Clear = function () {
		_students = [];
		_used = [];
		_current = {};
		_skip = [];
	}
	return that;
})();
