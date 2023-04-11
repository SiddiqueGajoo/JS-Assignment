function newList (Text) {
    let List = document.getElementById("MyList");
    let ListItem = document.createElement("ul");
    let text = document.createTextNode(Text);
    List.appendChild(text);
ListItem.textContent=text

}
newList("Hello World");
