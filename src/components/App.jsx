import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(entry) {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      meaning={entry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
        {/* <Entry
          emoji="💪"
          name="Tense Biceps"
          meaning="You can do that!” or “I feel strong!” Arm with tense biceps. Also
        used in connection with doing sports, e.g. at the gym."
        /> */}
      </dl>
    </div>
  );
}

export default App;
