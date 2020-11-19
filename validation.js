function validBook() {
    var isbn = document.getElementById("isbnId").value;
    var title = document.getElementById("titleId").value;
    var copies = document.getElementById("copiesId").value;
    var publisher = document.getElementById("publisherId").value;
    var author = document.getElementById("authorId").value;

    if(!isValidIsbn(isbn)) {
        document.getElementById("isbn").innerHTML = "Enter valid isbn number (min. length should be 7)";
        document.getElementById("isbn").style.color="red";
        return false;
    }

    if(!isValidTitle(title)) {
        document.getElementById("title").innerHTML = "Enter valid title";
        document.getElementById("title").style.color="red";
        return false;
    }

    if(!isValidCopies(copies)) {
        document.getElementById("copies").innerHTML = "Enter valid number";
        document.getElementById("copies").style.color="red";
        return false;
    }

    if(!isValidName(author)) {
        document.getElementById("publisher").innerHTML = "Enter valid publisher name";
        document.getElementById("publisher").style.color="red";
        return false;
    }

    if(!isValidName(author)) {
        document.getElementById("author").innerHTML = "Enter valid author name";
        document.getElementById("author").style.color="red";
        return false;
    }

    return true;
}

function isValidIsbn(isbn) {
    return (isbn.length>=7 & isbn.length<=16)?true:false;
}

function isValidTitle(title) {
    return (title.length>7)?true:false;
}

function isValidCopies(copies) {
    return (copies <= 0)?false:true;
}

function isValidName(name) {
    return (name.length>=7)?true:false;
}
