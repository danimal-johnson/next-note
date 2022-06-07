// pages/index.jsx

// /** @jsx jsx */
// /** @jsxRuntime classic */
// import { jsx } from 'theme-ui';

import Link from 'next/link';

export default () => {
  const notes = new Array(15).fill(1).map((_, i) => ({id: i, title: `Note ${i}`}));
  
  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>My Notes</h1>

      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {notes.map(note => (
          <div key={note.id} sx={{width: '33%', p: 2}}>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card',}}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  // (
  //   <div>
  //     <h2>Notes</h2>

  //     { notes.map(note => (
  //       <div key={note.id}>
  //         <Link href="/notes/[id]" as={`/notes/${note.id}`}>
  //           <a>
  //             <strong>{note.title}</strong>
  //           </a>
  //         </Link>
  //       </div>
  //     ))}
  //   </div>
  // );
}
