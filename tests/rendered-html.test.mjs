import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { after, before, test } from "node:test";

const port = 4010;
const origin = `http://127.0.0.1:${port}`;
let server;

before(async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  server = createServer((request, response) => {
    if (request.url === "/" || request.url === "/index.html") {
      response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      response.end(html);
      return;
    }
    response.writeHead(404);
    response.end();
  });
  await new Promise((resolve) => server.listen(port, "127.0.0.1", resolve));
});

after(async () => {
  await new Promise((resolve) => server?.close(resolve));
});

async function render() {
  return fetch(origin, { headers: { accept: "text/html" } });
}

test("renders the mnemu.ai landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>mnemu\.ai: Your private memory across apps<\/title>/i);
  assert.match(html, /You saved it\./);
  assert.match(html, /Now.*where is it\?/s);
  assert.match(html, /Join the early access list/);
  assert.match(html, /Send Reels, links, screenshots, notes, videos or files to mnemu\.ai/);
  assert.match(html, /remembers and organizes everything/);
  assert.match(html, /Everything worth remembering is trapped somewhere else/);
  assert.match(html, /Instagram Reel/);
  assert.match(html, /high-protein pasta recipe/);
  assert.doesNotMatch(html, /WHATSAPP LINKS/);
  assert.match(html, /A useful piece of information sent to yourself on WhatsApp/);
  assert.match(html, /Register for early access/);
  assert.match(html, /encrypted in transit and at rest/i);
  assert.match(html, /<span><b>02<\/b> Export or delete your memories<\/span>/);
  assert.doesNotMatch(html, /<span><b>02<\/b> Encrypted in transit and at rest<\/span>/);
  assert.doesNotMatch(html, /Not used to train shared AI/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("wires early access calls to action to Google Forms", async () => {
  const response = await render();
  const html = await response.text();
  assert.match(
    html,
    /https:\/\/docs\.google\.com\/forms\/d\/e\/1FAIpQLSdYCdyewvHVQI8qcQrpE5GyJ1TtzFOjDFlGVWlthC06HqcK9A\/viewform/,
  );
  assert.match(html, /rel="noopener noreferrer"/);
});
