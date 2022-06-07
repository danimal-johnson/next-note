import Link from 'next/link';

export default () => (
  <div>
    <h1>Index Page</h1>
    <Link href="/notes">
        <a>Notes</a>
      </Link>
  </div>
);

// Another option: <Link href="/notes/[id]" as={"/notes/1"}>
// Link is only for client side routing.