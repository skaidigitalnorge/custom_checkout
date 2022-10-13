import { formatDraftOrderInput } from "../../../../lib/shopifyAdmin";
import { createDraftOrder } from "../../../../lib/shopifyAdmin";

// TODO Adde iron session

export async function handler(req, res) {
  const { body, method, session } = req;
  const { items, user } = body;

  // Ignore non-POST requests
  if (method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Ignore unauthorized requests
  // if (!session.user.isLoggedIn){
  //     return res.status(401).json({error: "Unauthorized"})
  // }

  try {
    const draftOrderInput = formatDraftOrderInput(items, user);
    await createDraftOrder(draftOrderInput);
    res.status(200).json({ status: "Success" });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
}
