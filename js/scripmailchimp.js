$('#mc-form').ajaxChimp({
	url: 'https://adservio.us9.list-manage.com/subscribe/post?u=137eff0c364e04b220053d35e&amp;id=0420a02256',
	callback: callbackFunction

});

function callbackFunction(resp) {
	if (resp.result === 'success') {
		//swal("Good job!", "You clicked the button!", "success");
		swal({
			title: "Merci pour votre inscription !",
			text: "Veuillez consulter votre boite de réception ",
			type: "success",
			confirmButtonText: "Ok"
		});
	}
	else {
		swal({
			title: "Error!",
			text: resp.msg,
			type: "error",
			html: true,
			confirmButtonText: "Ok"
		});
	}
}



$('#contact-form').ajaxChimp({
	url: 'https://adservio.us9.list-manage.com/subscribe/post?u=137eff0c364e04b220053d35e&amp;id=c6de84c7c2',
	callback: contactInscriptionFunc

});

function contactInscriptionFunc(resp) {
	if (resp.result === 'success') {
		//swal("Good job!", "You clicked the button!", "success");
		swal({
			title: "Merci !",
			text: "Merci pour votre message",
			type: "success",
			confirmButtonText: "Ok"
		});
	}
	else {
		swal({
			title: "Error!",
			text: resp.msg,
			type: "error",
			html: true,
			confirmButtonText: "Ok"
		});

	}
}