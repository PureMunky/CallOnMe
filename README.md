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

## Future Plans

Eventually this should become a suite of tools for teachers.
