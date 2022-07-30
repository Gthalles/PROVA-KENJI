const url = "http://ubuntu.alphaedtech.org.br:8080/"

async function handleQuestion() {
    const fullname = window.document.getElementById("fullname").value;
    const asciConverter = new AscII(fullname);
    const asciCode = asciConverter.getCode();
    const request = fetch(`${url}?string=${fullname}&code=${asciCode}`);
    const result = document.getElementById("result");
    
    request.then((response) => {
        response.json().then((data) => {
            result.innerHTML = data.question;
        });
    });
}

function resetQuestion() {
    const result = document.getElementById("result");
    result.firstChild.remove();
}
