# form-submit
Submit javascript array in the form of a form

##Methods 
###formSubmit
####Description
```php
void formSubmit(string url, string method, array submit_data)
```
Creates and submits a form with fields from data

####Parameters
#####url
  The url to submit the form too
#####method 
  The method attribute of the form
#####submit_data 
  Array to be converted to form fields. Can be associative or indexed.
  
####Example
  ```javascript
  var post_data =
  {
    username: 'steven', 
    password: 'pass123',
    repassword: 'pass123',
    hobbies: ['js','html','php']
  };
  $().formSubmit("/create_user", 'post', $post_data)
  ```
  Created Form
  ```html
  <form method="post" action="/create_user">
   <input type="text" name="username" value="steven">
   <input type="text" name="password" value="pass123">
   <input type="text" name="repassword" value="pass123">
   <input type="text" name="hobbies[0]" value="js">
   <input type="text" name="hobbies[1]" value="html">
   <input type="text" name="hobbies[2]" value="php">
  </form>
  ```
  
  
