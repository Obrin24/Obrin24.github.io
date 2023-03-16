function runDemo(command, lang) {
  var output = document.getElementById(lang + '-output');
  output.innerHTML = 'Running command: ' + command + '\n\n';
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      output.innerHTML += xhr.responseText;
    }
  }
  xhr.open('POST', 'http://localhost:8000/' + lang);
  xhr.setRequestHeader('Content-Type', 'text/plain');
  xhr.send(command);
}