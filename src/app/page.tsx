import Link from "next/link";

// NEXT.js 14 doesnot support getServerSideProps
// export const getServerSideProps = async() => {
//   const data = await fetchData()
//   return {
//     props: {
//       blogs: data
//     }
//   }
// }

const fetchData = async () => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/data`, {cache: "no-cache"});
    return data.json();
  } catch (error) {
    console.error(error);
  }
};

export default async function Home() {
  const blogs = await fetchData();

  return (
    <>
      <Link href={"/add"}>
        <button>Add</button>
      </Link>

      <div>
        {blogs.map((blog) => {
          return (
            <>
              <h1>{blog.title}</h1>
              <p>{blog.desc}</p>
            </>
          );
        })}
      </div>
    </>
  );
}
