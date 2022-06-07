//  import React from 'react';
import Link from 'next/link';

export default () => {
  const notes = new Array(15).fill(1).map((_, i) => ({id: i, title: `Note ${i}`}));

  return (
    <div>
      <h2>Notes</h2>

      { notes.map(note => (
        <div key={note.id}>
          <Link href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
