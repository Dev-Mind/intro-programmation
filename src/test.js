function mytest(){
  console.log('test')
  var newScript = '<script type="text/javascript">' + document.getElementById("myscript").value + '</script>';
  var element = document.getElementById('elementToRefresh');
  console.log(newScript)
  element.innerHTML = newScript;
  eval(element.firstChild.innerHTML);
}