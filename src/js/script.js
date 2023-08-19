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
    var strDataToDecode = document.getElementById('txtData').value;
    strDecodedData = decodeURIComponent(atob(strDataToDecode).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    document.getElementById('txtResult').textContent = strDecodedData;
    hljs.highlightAll();
    if (document.getElementById('showLineNum').checked) {
        hljs.initLineNumbersOnLoad();
    }
}

function encode() {
    document.getElementById('txtResult').textContent = '';
    var strDataToEncode = document.getElementById('txtData').value;

    strEncodedData = btoa(encodeURIComponent(strDataToEncode).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));

    document.getElementById('txtResult').textContent = strEncodedData;
    hljs.highlightAll();
    if (document.getElementById('showLineNum').checked) {
        hljs.initLineNumbersOnLoad();
    }

}
