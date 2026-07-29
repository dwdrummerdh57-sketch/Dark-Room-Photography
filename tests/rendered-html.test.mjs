import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

const bookingUrl = "https://darkroomrealestatephotographywg.hd.pics/order";
const projectRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, "http://localhost"), {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

const routes = ["/", "/services", "/process", "/portfolio", "/meet-will"];

test("server-renders every public page with shared navigation and booking", async () => {
  for (const route of routes) {
    const response = await render(route);
    assert.equal(response.status, 200, `${route} should return 200`);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, /Dark Room/i);
    assert.match(html, /aria-label="Main navigation"/);
    assert.match(html, /href="\/services"/);
    assert.match(html, /href="\/process"/);
    assert.match(html, /href="\/portfolio"/);
    assert.match(html, /href="\/meet-will"/);
    assert.match(html, new RegExp(bookingUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.doesNotMatch(html, /Your site is taking shape|Building your site|codex-preview/i);
  }
});

test("uses the approved hero photography on each page", async () => {
  const expectedHeroes = new Map([
    ["/", "/portfolio/twilight-favorite.webp"],
    ["/services", "/portfolio/residential-suburban-exterior-front-01.webp"],
    ["/process", "/portfolio/interior-living-room-1212.webp"],
    ["/portfolio", "/portfolio/twilight-1154.webp"],
  ]);

  for (const [route, image] of expectedHeroes) {
    const response = await render(route);
    const html = await response.text();
    assert.match(html, new RegExp(image.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("all server-rendered local image sources exist", async () => {
  for (const route of routes) {
    const response = await render(route);
    const html = await response.text();
    const sources = [...html.matchAll(/<img[^>]+\bsrc=["']([^"']+)["']/gi)]
      .map((match) => match[1])
      .filter((source) => source.startsWith("/") && !source.startsWith("/assets/"));

    for (const source of new Set(sources)) {
      await access(new URL(`public${source}`, projectRoot));
    }
  }
});
