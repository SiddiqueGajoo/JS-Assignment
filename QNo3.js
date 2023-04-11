function newPara (Text) {
    let Para = document.createElement("p");
    let text = document.createTextNode(Text);
    Para.appendChild(text);
    document.body.append(Para);

}
newPara("Hello World");
