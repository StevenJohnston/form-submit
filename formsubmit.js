(function( $ ) {
  $.fn.formCount = 0;
  $.fn.formSubmitObj = function(obj)
  {
    url = obj.url;
    method = obj.method;
    data = obj.data;
    var form_html = "";
    form_html += '<form method="'+method+'" action="'+url+'" id="form-submit-'+ ++$.fn.formCount+'" hidden>';
    form_html += obj_to_input(data,undefined,method);
    form_html += "</form>";

    inputs = obj.inputs;
    for (var i = 0; i < inputs.length; i++) {
      $(inputs[i]).appendTo($(form_html));
    }
    $(document.body).append(form_html);
    $('#form-submit-' + $.fn.formCount).submit();
  };
  $.fn.formSubmit = function(url, method, data, newTab) {
    var target ="";
    if(newTab)
    {
      target = '_blank';
    }
    var form_html = "";
    form_html += '<form method="'+method+'" action="'+url+'" target="'+target+'" id="form-submit-'+ ++$.fn.formCount+'" hidden>';
    form_html += obj_to_input(data,undefined, method);
    form_html += "</form>";

    $(document.body).append(form_html);
    $('#form-submit-' + $.fn.formCount).submit();
  };
  $.fn.formCreate = function(url, method, data) {
    var form_html = "";
    form_html += '<form method="'+method+'" action="'+url+'">';
    form_html += obj_to_input(data,undefined,method);
    form_html += "</form>";
    return form_html;
  }
}( jQuery ));
function obj_to_input(obj,my_keys,method)
{
  my_keys = typeof my_keys !== 'undefined' ? my_keys : [];
  var html = "";
  for (var this_key in obj) {
    if (obj.hasOwnProperty(this_key)) {
      var new_my_keys = my_keys.slice();


      new_my_keys.push(this_key);
      if(Array.isArray(obj[this_key]))
      {
        html += obj_to_input(obj[this_key], new_my_keys,method);
      }
      else if (typeof obj[this_key] === 'object' && obj[this_key] !== null) {
        html += obj_to_input(obj[this_key], new_my_keys,method);
      }
      else {
        var name = '';
        var first = false;
        for (var one_key in new_my_keys) {
          if (new_my_keys.hasOwnProperty(one_key)) {
            if(first == false)
            {
              name += new_my_keys[one_key];
              first = true;
            }
            else {
              if(isNaN(new_my_keys[one_key]) || method=="post")
              {
                name += "["+new_my_keys[one_key]+"]";
              }
            }
          }
        }
        html += '<input type="text" name="'+name+'" value="'+obj[this_key]+'">';
      }
    }
  }
  return html;
}
