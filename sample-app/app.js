const form = document.getElementById("note-form");
const input = document.getElementById("note-input");
const notesContainer = document.getElementById("notes-container");

function loadNotes() {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notesContainer.innerHTML = "";
  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
      ${note}
      <button onclick="deleteNote(${index})">&times;</button>
    `;
    notesContainer.appendChild(div);
  });
}

function saveNote(note) {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
  loadNotes();
}

function deleteNote(index) {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  loadNotes();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const note = input.value.trim();
  if (note) {
    saveNote(note);
    input.value = "";
    input.focus();
  }
});

window.onload = loadNotes;
