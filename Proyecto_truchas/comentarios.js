document.addEventListener("DOMContentLoaded", loadComments); // Cargar comentarios al iniciar

document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const commentText = document.getElementById("commentText").value;

    if (commentText.trim() === "") {
        alert("Por favor, escribe un comentario.");
        return;
    }

    // Agregar el comentario al localStorage
    addCommentToLocalStorage(commentText);

    // Limpiar el campo de texto
    document.getElementById("commentText").value = "";

    // Volver a cargar los comentarios para mostrarlos en pantalla
    loadComments();
});

// Función para agregar un comentario al localStorage
function addCommentToLocalStorage(comment) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));
}

// Función para cargar los comentarios desde el localStorage
function loadComments() {
    const commentsContainer = document.getElementById("commentsContainer");
    commentsContainer.innerHTML = ""; // Limpiar comentarios anteriores

    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach(comment => {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.innerHTML = `<p>${comment}</p>`;
        commentsContainer.appendChild(commentElement);
    });
}
