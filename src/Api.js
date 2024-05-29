export async function getData() {
  const response = await fetch(
    'https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite'
  );
  const body = await response.json();
  return body;
}
