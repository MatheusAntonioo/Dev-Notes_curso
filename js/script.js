// Elementos
const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector(".add-note");

// Funções
function showNotes() {
  getNotes().forEach((note) => {
    const noteElement = createNote(note.id, note.content, note.fixed);
    notesContainer.appendChild(noteElement);
  });
}

function addNote() {
  const notes = getNotes();

  const noteObject = {
    id: generateId(),
    content: noteInput.value,
    fixed: false,
  };

  const noteElement = createNote(noteObject.id, noteObject.content);

  notesContainer.appendChild(noteElement);

  notes.push(noteObject);

  saveNotes(notes);

  noteInput.value = "";
}

function generateId() {
  return Math.floor(Math.random() * 10000);
}

function createNote(id, content, fixed) {
  const element = document.createElement("div");
  element.classList.add("note");

  const textarea = document.createElement("textarea");
  textarea.value = content;
  textarea.placeholder = "Adicione algum texto...";
  element.appendChild(textarea);

  // -----------------------

  const pinIcon = document.createElement("i");
  pinIcon.classList.add(...["bi", "bi-pin"]);
  element.appendChild(pinIcon);

  const xLgIcon = document.createElement("i");
  xLgIcon.classList.add(...["bi", "bi-x-lg"]);
  element.appendChild(xLgIcon);

  const fileEarmarkPlusIcon = document.createElement("i");
  fileEarmarkPlusIcon.classList.add(...["bi", "bi-file-earmark-plus"]);
  element.appendChild(fileEarmarkPlusIcon);

  // -------------------------

  return element;
}

// Local storage
function getNotes() {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");

  return notes;
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Eventos
addNoteBtn.addEventListener("click", () => addNote());

// Inicialização
showNotes();
