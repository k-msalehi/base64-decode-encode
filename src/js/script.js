document.getElementById('txtData').onkeyup = function () {
    decodeOrEncode();
}

document.getElementById('txtData').onchange = function () {
    decodeOrEncode();
}

document.getElementById('btnDecode').onchange = function () {
    decode();
}

document.getElementById('btnEncode').onchange = function () {
    encode();
}

document.getElementById('showLineNum').onchange = function () {
    var lines = document.querySelectorAll('tr td.hljs-ln-line.hljs-ln-numbers');

    if (document.getElementById('showLineNum').checked) {
        hljs.initLineNumbersOnLoad();
        for (var i = 0; i < lines.length; i++) {
            lines[i].style.display = "table-cell";

        }
    } else {
        for (var i = 0; i < lines.length; i++) {
            lines[i].style.display = "none";

        }
    }
}

function decodeOrEncode() {
    if (document.getElementById('btnDecode').checked) {
        decode();
    } else if (document.getElementById('btnEncode').checked) {
        encode();
    }
}
function decode() {
    document.getElementById('txtResult').textContent = '';
    strDecodedData = Base64.decode(document.getElementById('txtData').value);
    document.getElementById('txtResult').textContent = strDecodedData;
    hljs.highlightAll();
    if (document.getElementById('showLineNum').checked) {
        hljs.initLineNumbersOnLoad();
    }
}

function encode() {
    document.getElementById('txtResult').textContent = '';
    strEncodedData = Base64.encode(document.getElementById('txtData').value);
    document.getElementById('txtResult').textContent = strEncodedData;
    hljs.highlightAll();
    if (document.getElementById('showLineNum').checked) {
        hljs.initLineNumbersOnLoad();
    }

}
