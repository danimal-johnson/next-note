// pages/notes/index.jsx
// /** @jsx jsx */
// /** @jsxRuntime classic */
// import { jsx } from 'theme-ui';
// /** @jsxImportSource theme-ui */

export default () => {
  
  return (
    <div sx={{ height: `calc(100vh - 60px)`}}>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
        <h1 sx={{fontSize: 8, my: 0}}>A most-excellent note-taking app.</h1>
      </div>
    </div> 
  );

  // <div>
  //   <h1>Index Page</h1>
  //   <Link href="/notes">
  //       <a>Notes</a>
  //     </Link>
  // </div>
};

// Another option: <Link href="/notes/[id]" as={"/notes/1"}>
// Link is only for client side routing.