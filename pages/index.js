import Link from 'next/link';

export default () => (
  <div>
    <h1>Index Page</h1>
    <ul>
      <li><Link href="/notes">
            Note
          </Link>
        </li>
      <li>
        <Link href="/notes/[id]" as={"/notes/1"}>Note 1</Link>
      </li>
    </ul>
  </div>
);


// Another option: <Link href="/notes/[id]" as={"/notes/1"}>
// Link is only for client side routing.