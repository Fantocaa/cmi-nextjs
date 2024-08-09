async function getData() {
  const res = await fetch(
    "http://cmi_backend_filament.test/post",
    // "https://backend.cahayamercusuar.com/api/admin/products",
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  // console.log(data); // This will log the entire response object
  return data; // Extract the data property
}

export const getDetailPostPage = async (id: number) => {
  const post = await getData();

  // console.log(post);

  const singleItem = post.find((post: any) => {
    // console.log(post.id); // Log each ID to check
    return post.id === id;
  });

  return singleItem;
};
