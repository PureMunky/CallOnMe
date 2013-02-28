# CallOnMe

A simple app for a teacher to add students and randomize their names to call on them for questions.

## core.js

Handles the UI interaction.

## data.js

Used to define the data to be retrieved on load.

## CallOnMe.js

Creates the "Call" object that manages the student list.

### Call.Get

Retrieves a single student when passed an index or the entire array if no parameters are given.

	Call.Get(); 	// Returns entire Array of unused students.
	Call.Get(1);	// Returns a single student at the point in the array.

### Call.Add

Adds a student to the list of unused students. Accepts a single student or an array of them.

	Call.Add({name: 'Jimmy'});		// Single Student
	
	Call.Add([						// Array of students
		{name: 'Jimmy'},
		{name: 'Sally'}
	]);

### Call.Next

Returns a single random student from the unused list. Adds the previous student to the used list and recycles the used list if the student list is empty.

	Call.Next();

### Call.Skip

Skips the current student and adds them to the skipped list so they won't be recycled until the data is reloaded.

	Call.Skip();

### Call.Clear

Resets the enire class back to instantiation.

	Call.Clear();

## Tools

These are a roadmap for the pieces of the system that should be included in the final product.

### Attendence

Students' daily attendence and participation.

### Behavior

Easily mark bevhaviors in the classroom both positive and negative.

### Rewards

Introduce a reward system where the student will automatically be rewarded upon reaching goals.

### Grades

Grades will be based on assignments/lesson plans and automatically calculated.

### Lesson Plans

Allow a teacher to create activities that are scheduled and tracked. Lessons and activities can be shared between classroom teams.

### Classroom Management

Assign classrooms to teachers and create groups (e.g. K1 and K2).

### Reporting

See various types of data from trends to statistics, report cards, and others.

## Barrowed Code

* [crypto-js](https://code.google.com/p/crypto-js/)
