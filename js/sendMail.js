$(document).ready( function() {

  $('#contact_form').bootstrapValidator( {
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      first_name: {
        validators: {
          stringLength: {
            min: 2,
            message: 'Имя должно быть более 2 символов'
          },
          notEmpty: {
            message: 'Введите имя'
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: 'Введите E-Mail'
          },
          emailAddress: {
            message: 'Введённый E-Mail некорректен'
          }
        }
      },
      comment: {
        validators: {
          stringLength: {
            min: 10,
            message: 'Длина сообщения должна быть более 10 символов'
          },
          notEmpty: {
            message: 'Введите сообщение'
          }
        }
      }
    }
  } )
  .on( 'success.form.bv', function(e) {
    e.preventDefault();

    var name = $('input[name=first_name]').val();
    var email = $('input[name=email]').val();
    var body = $('textarea#comment').val();

    alert( name + '\n' + email + '\n' + body );
    return;

    $.ajax( {
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': 'atuMPWDK1OaYmmxeH_28Lg',
        'message': {
          'from_email': email,
          'to': [
            {
              'email': 'burlachenkomaxim@gmail.com',
              'type': 'to'
            },
            {
              'email': 'jonnysereb@gmail.com',
              'type': 'to'
            }
          ],
          'autotext': 'true',
          'subject': 'Статьи, игры, программы - Обратная связь',
          'html': 'Письмо от <b>' + name + '</b><br/><br/>' + body + '<br/><br/><a href="http://snake174.github.io/" target="_blank">Статьи, игры, программы</a>'
        }
      }
    } ).done( function( response ) {
      $('#contact-form-wrap').html('<font color=#00AA00>Письмо успешно отправлено. Спасибо за посещение нашего ресурса.</font>');
    } );
  } );

} );
