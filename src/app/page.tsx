import Link from "next/link";
import { Blog } from "./(data)/data";

const fetchData = async () => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/data`, { cache: "no-cache" });
    return data.json();
  } catch (error) {
    console.error(error);
  }
};

export default async function Home() {
  const blogs: Blog[] = await fetchData();

  return (
    <>
      <Link href={"/add"} className="flex mb-4">
        <button className="btn m-auto">Add Blog</button>
      </Link>

      <ul className="grid grid-cols-3 gap-4">
        {blogs.map((blog: Blog) => {
          return (
            <li className="card" key={blog.id}>
              <h1>{blog.title}</h1>
              <p>{blog.desc}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
