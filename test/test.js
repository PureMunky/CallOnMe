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

test('Next Student', function () {
	ok(Call.Next, 'Next exists');	
});

test('Skip Student', function () {
	ok(Call.Skip, 'Next exists');	
});

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

test('Call next iterates through list.', function () {
	Call.Clear();
	Call.Add([{
		name: 'Joe S'
	},
	{
		name: 'Sara H'
	}]);
	
	var s1 = Call.Next();
	var s2 = Call.Next();
	var s3 = Call.Next();
	var s4 = Call.Next();
	
	ok(s1.name, 'Student 1 Retrieved' + s1.name);
	ok(s2.name, 'Student 2 Retrieved' + s2.name);
	ok(s3.name, 'Student 3 Retrieved' + s3.name);
	ok(s4.name, 'Student 4 Retrieved' + s4.name);
	ok(s1.name != s2.name, 'First pair different');
	ok(s3.name != s4.name, 'Second pair differnt');
	ok(s1.name == s3.name || s1.name == s4.name, 'First student comes up a second time.');
	ok(s2.name == s3.name || s2.name == s4.name, 'Second student comes up a second time.');
});

test('Skip removes student from rotation.', function () {
	Call.Clear();
	Call.Add([{
		name: 'Joe S'
	},
	{
		name: 'Sara H'
	}]);
	
	var s1 = Call.Next();
	var skipped = Call.Skip();
	var s2 = Call.Next();
	var s3 = Call.Next();
	var s4 = Call.Next();
	
	ok(s1.name, 'Student 1 Retrieved ' + s1.name);
	ok(s2.name, 'Student 2 Retrieved ' + s2.name);
	ok(s3.name, 'Student 3 Retrieved ' + s3.name);
	ok(s4.name, 'Student 4 Retrieved ' + s4.name);
	ok(s2.name == s3.name, 'Second Student comes up for 3');
	ok(s2.name == s4.name, 'Second Student comes up for 4');
	ok(s1.name != s2.name, 'First Student isn\'t picked again. (1)');
	ok(s1.name != s3.name, 'First Student isn\'t picked again. (2)');
	ok(s1.name != s4.name, 'First Student isn\'t picked again. (3)');

});

test('Skip return.', function () {
	Call.Clear();
	Call.Add([{
		name: 'Joe S'
	},
	{
		name: 'Sara H'
	}]);
	
	var s1 = Call.Next();
	var skipped = Call.Skip();
	
	ok(s1.name == skipped.name, 'First Student returned as skipped ' + skipped.name);

});

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
