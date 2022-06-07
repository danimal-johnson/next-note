import { useRouter } from 'next/router';

// An optional catch-all route 
// - add one more bracket to the filename: [[...params]]

const Page = () => {
  const router = useRouter();
  // const { id } = router.query; // Catches the id from the URL
  const { params } = router.query; // Catches ALL the parameters from the URL}
  console.log(params);

  return (
    <div>
      <h3>Note</h3>
      <p>{params}</p>
    </div>
  );
}

export default Page;