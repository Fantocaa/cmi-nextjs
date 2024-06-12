async function getData() {
  const res = await fetch(
    "http://cmi_backend_filament.test/api/admin/products",
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  // console.log(data); // This will log the entire response object
  return data.data; // Extract the data property
}

export const getDetailProductsPage = async (id: number) => {
  const products = await getData();

  // console.log(products);

  const singleItem = products.find((product: any) => {
    // console.log(product.id); // Log each ID to check
    return product.id === id;
  });

  return singleItem;
};
