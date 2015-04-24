$(document).ready(function () {
		$('#add').click(function () {
			if( $('input#adding').val().trim().length == 0 ) {
			alert('Whoops something is missing, please type in an item you need to purchase');
		} else 
		 {
			$('#myList').append('<li><button class="remove">Remove</button><input type="checkbox">' + $('input#adding').val() + '</li>');
			$('input#adding').val("");
		}
		});
		$('ul').click('.remove' function () {
			$(this).parent().remove();
		});
});