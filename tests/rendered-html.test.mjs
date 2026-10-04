import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Unlost landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Unlost — Your private memory for the internet<\/title>/i);
  assert.match(html, /You saved it\./);
  assert.match(html, /Now.*where is it\?/s);
  assert.match(html, /Join the early access list/);
  assert.match(html, /Bookmarks aren/);
  assert.match(html, /Register for early access/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("wires early access calls to action to Google Forms", async () => {
  const response = await render();
  const html = await response.text();
  assert.match(html, /https:\/\/docs\.google\.com\/forms\//);
});
