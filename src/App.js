import "./styles.css";
function createRosterItem(studentName, sutdentPronouns, studentHS) {
  rosterItem =
    "<li>studentName + '          ' + studentPronouns + '        ' + studentHS</li>";
  return rosterItem;
}

export default function App() {
  return (
    <div className="App">
      <h1>Code Nation Roster</h1>
      <ol>
        <li>Mikkail Alan He/His Williamsburg Charter High School</li>
      </ol>
    </div>
  );
}
