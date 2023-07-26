export default async function middlewareAuth(req) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
  const accessToken = req.cookies.get("accessToken")?.value;

  const res = await fetch(`${baseUrl}/user/get`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());

  const { data } = res || {};
  return data;
}
