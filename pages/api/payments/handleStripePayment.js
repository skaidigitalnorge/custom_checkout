//Handler
export default async function handler(req, res) {
  // Reject other requests
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed");
  }

  console.log(req.body);

  res.status(200).json({ status: "sucsess" });
}
