angular.module('NoteWrangler').directive('title', function($timeout) {
	return function(scope, element, attrs) {
		$timeout(function() {
			$(element).tooltip();
		});

		scope.$on('$destroy', function() {
			$(elemenet).tooltip('destroy');
		});
	}
});