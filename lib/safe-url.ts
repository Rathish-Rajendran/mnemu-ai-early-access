const DEFAULT_EARLY_ACCESS_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdYCdyewvHVQI8qcQrpE5GyJ1TtzFOjDFlGVWlthC06HqcK9A/viewform";
const DEFAULT_SITE_URL = "http://localhost:3000";

function isLocalHttpHost(hostname: string) {
  return hostname === "localhost" || hostname === "127.0.0.1";
}

export function httpsUrl(value: string | undefined, fallback = DEFAULT_EARLY_ACCESS_URL) {
  const candidate = value?.trim() || fallback;
  try {
    const url = new URL(candidate);
    if (url.protocol === "https:") {
      return url.href;
    }
  } catch {
    // Use the known-good fallback when the configured value is not a URL.
  }
  return fallback;
}

export function configuredSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL?.trim()) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return undefined;
}

export function siteUrl(value: string | undefined) {
  const candidate = value?.trim() || DEFAULT_SITE_URL;
  try {
    const url = new URL(candidate);
    if (url.protocol === "https:") {
      return url;
    }
    if (url.protocol === "http:" && isLocalHttpHost(url.hostname)) {
      return url;
    }
  } catch {
    // Fall through to the local default.
  }
  return new URL(DEFAULT_SITE_URL);
}

export { DEFAULT_EARLY_ACCESS_URL };
