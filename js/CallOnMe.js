var Call = (function() {
	var that = this;
	var _students = [];
	
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
	
	that.Clear = function () {
		_students = [];
	}
	return that;
})();
