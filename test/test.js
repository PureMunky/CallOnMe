module('main');

test('Exists', function() {
	ok(Call, 'Call Exists');
})

test('Get', function() {
	ok(Call.Get, 'Students Exists');
})

test('Add Students', function() {
	ok(Call.Add, 'Add Exists');
})

test('Clear Students', function () {
	ok(Call.Clear, 'Clear Exists');
})

module('function calls');

test('Add a Student', function () {
	Call.Clear();
	Call.Add({
		name: 'Joe S'
	});
	
	var s = Call.Get(0);
	
	equal(s.name, 'Joe S', 'Student Added');
})

test('Add a Student', function () {
	Call.Clear();
	Call.Add({
		name: 'Joe S'
	});
	
	var s = Call.Get()[0];
	
	equal(s.name, 'Joe S', 'Student Added');
})

test('Add multiple Students', function () {
	Call.Clear();
	Call.Add([{
		name: 'Joe S'
	},
	{
		name: 'Sara H'
	}]);
	
	var s1 = Call.Get(0);
	var s2 = Call.Get(1);
	var s3 = Call.Get(2);
	
	equal(s1.name, 'Joe S', 'Student 1 Added');
	equal(s2.name, 'Sara H', 'Student 2 Added');
	equal(s3, undefined, 'Student 3 Not There')
})

test('Get Array', function () {
	Call.Clear();
	Call.Add([{
		name: 'Joe S'
	},
	{
		name: 'Sara H'
	}]);
	
	var c = Call.Get();
	
	equal(c.length, 2, 'Get returned array');
})
