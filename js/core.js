$(function () {
	function reload() {
		$.ajax({
			url: 'js/data.js',
			success: function () {
				$('[data-call=name]').text('Who\'s next?');
			}
		});
	}
	
	reload();
	
	$('[data-call=call]').on('click', function () {
		var s = Call.Next();
		if(s) {
			$('[data-call=name]').text(s.name);
		} else {
			$('[data-call=name]').text('Skipped All Students');
		}
	});
	
	$('[data-call=skip]').on('click', function () {
		var s = Call.Skip();
		$('[data-call=name]').text('Skipped ' + s.name);
	});
	
	$('[data-call=reload]').on('click', function () {
		Call.Clear();
		reload();
	});
});
