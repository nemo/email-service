var onSubmit = function(event) {
    event.preventDefault();
    var $form = $("#form");
    var $messageEl = $("#message");

    f('nemo/email-service/subscribe')({
        first_name: $form.find("[name='first_name']").val(),
        email_address: $form.find("[name='email']").val()
    }, function(err, response) {
        if (err) {
            $messageEl.addClass('error');
            $messageEl.html(err && err.message || err);
            return;
        }

        $messageEl.removeClass('error');
        $messageEl.addClass('success');
        $messageEl.html("You are now a subscriber!");
    });
}

$("#form").on('submit', onSubmit);
