
var INITIAL_CODE = '\nfunction pgcd(a, b){\n' +
    '    var result;\n' +
    '\n' +
    '    return undefined; \n' +
    '}';

function savePgcd(){
  localStorage.setItem('pgcd-script', editor.getValue());
}

function openPgcd(){
  if(localStorage.getItem('pgcd-script')){
    editor.setValue(localStorage.getItem('pgcd-script'));
  }
  else{
    editor.setValue(INITIAL_CODE);
  }
  editor.gotoLine(1);
}

function restartPgcd(){
  editor.setValue(INITIAL_CODE);
}

function verifyPgcd(){
  var pgcd = _eval_function();
  var a = getNumber(document.getElementById("a").value);
  var b = getNumber(document.getElementById("b").value);
  var r;

  if(a !== 0 && b !==0){
    while(r !== 0) {
      r = a % b;

      if (r !== 0) {
        a = b;
        b = r;
      }
    }
  }
console.log(b+'' , compute())
  if(b+'' === compute()){
    document.getElementById("pgcd-feedback").className = 'alert alert-info';
    document.getElementById("pgcd-feedback").style.visibility = 'visible';
    document.getElementById("pgcd-feedback").innerHTML = 'Super tout fonctionne...';
  }
  else{
    document.getElementById("pgcd-feedback").className = 'alert alert-danger';
    document.getElementById("pgcd-feedback").style.visibility = 'visible';
    document.getElementById("pgcd-feedback").innerHTML = 'Oups ton programme pour calculer le PGCD ne fonctionne pas...';
  }
}

function _eval_function(){

}

function getNumber(val){
  try {
    return Number.parseInt(val);
  }
  catch(e) {
    return 0;
  }
}

function compute(){
  var newScript = '<script type="text/javascript">' + editor.getValue() + '</script>';
  var element = document.getElementById('elementToRefresh');
  element.innerHTML = newScript;
  eval(element.firstChild.innerHTML);

  var a = getNumber(document.getElementById("a").value);
  var b = getNumber(document.getElementById("b").value);

  document.getElementById("result").value = pgcd(a,b);
  document.getElementById("a").value = a;
  document.getElementById("b").value = b;

  return document.getElementById("result").value;
}


