/**
 * Sends a message to a Discord webhook as a simple embed.
 * Never throws — logs and returns false on failure so a Discord outage
 * never breaks the user-facing form submission.
 */
export async function sendToDiscord(webhookUrl, { title, fields = [], color = 0xffb000 }) {
  if (!webhookUrl) {
    console.error("sendToDiscord: missing webhook URL");
    return false;
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title,
            color,
            fields: fields.map((f) => ({
              name: f.name,
              value: String(f.value || "—").slice(0, 1000),
              inline: Boolean(f.inline),
            })),
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });
    return res.ok;
  } catch (err) {
    console.error("sendToDiscord error:", err);
    return false;
  }
}
