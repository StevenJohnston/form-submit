
(function( $ ) {

    $.fn.formSubmit = function(url, method, data) {
      var form_html = "";
      form_html += '<form method="'+method+'" action="'+url+'">';
      form_html += obj_to_input(data);
      form_html += "</form>";
      $(form_html).submit();
    };

}( jQuery ));
function obj_to_input(obj,my_keys)
{
  my_keys = typeof my_keys !== 'undefined' ? my_keys : [];
  var html = "";
  for (var this_key in obj) {
    if (obj.hasOwnProperty(this_key)) {
      var new_my_keys = my_keys.slice();


      new_my_keys.push(this_key);
      if(Array.isArray(obj[this_key]))
      {
        html += obj_to_input(obj[this_key], new_my_keys);
      }
      else if (typeof obj[this_key] === 'object' && obj[this_key] !== null) {
        html += obj_to_input(obj[this_key], new_my_keys);
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
              name += "["+new_my_keys[one_key]+"]";
            }
          }
        }
        html += '<input type="text" name="'+name+'" value="'+obj[this_key]+'">';
      }
    }
  }
  return html;
}
