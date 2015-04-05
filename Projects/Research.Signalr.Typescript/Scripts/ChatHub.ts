/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/signalr/signalr.d.ts"/>


$(function () {
    var chat = $.connection.chatHub;
    chat.client.addNewMessageToPage = function (name, message) {
        $('#discussion').append('<li><strong>' + htmlEncode(name)
            + '</strong>: ' + htmlEncode(message) + '</li>');
    };
    $('#displayname').val(prompt('Enter your name:', ''));
    $('#message').focus();
    $.connection.hub.start().done(function () {
        $('#sendmessage').click(function () {
            chat.server.send($('#displayname').val(), $('#message').val());
            $('#message').val('').focus();
        });
    });
});

function htmlEncode(value) {
    var encodedValue = $('<div />').text(value).html();
    return encodedValue;
}
