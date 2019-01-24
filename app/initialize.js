document.addEventListener('DOMContentLoaded', function() {
  // do your setup here
  console.log('Initialized app');
});

$(document).ready(function(){
	$("#close-button").click(function(){
		$("#bloc-balades").hide();
	});
});