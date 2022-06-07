import { useRouter } from 'next/router';
import Link from 'next/link';

// Catch all catch-all route: [...params]
// Optional catch-all route add one more bracket to the filename: [[...params]]

const Page = () => {
  const router = useRouter();
  // const { params } = router.query; // Catches ALL the parameters from the URL}
  const { id } = router.query; // Catches the id from the URL

  return (
    <div>
      <h3>Note: {id}</h3>
      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  );
}

export default Page;