"use client";

import { useState } from "react";

export function SharePage({ url }: { url: string }) {
  const [status, setStatus] = useState("");
  const title = "AstraLink: AI Astrology & Cosmic Dating by Birth Chart";
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setStatus("Link copied");
    } catch {
      setStatus("Couldn’t copy the link. Please try sharing with one of the buttons.");
    }
  }

  async function share() {
    if (!navigator.share) {
      await copyLink();
      return;
    }
    try {
      await navigator.share({ title, url });
      setStatus("");
    } catch (error) {
      if (!(error instanceof Error && error.name === "AbortError")) {
        await copyLink();
      }
    }
  }

  const links = [
    ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`],
    ["WhatsApp", `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`],
    ["X", `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`],
    ["Pinterest", `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`],
  ];

  return (
    <section className="share-section section-shell" aria-labelledby="share-title">
      <div className="share-panel">
        <h2 id="share-title">Share this page</h2>
        <div className="share-actions">
          <button className="share-primary" type="button" onClick={share}>Share</button>
          <button type="button" onClick={copyLink}>Copy link</button>
          {links.map(([label, href]) => <a href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${label}`}>{label}</a>)}
        </div>
        <p className="share-status" role="status">{status}</p>
      </div>
    </section>
  );
}
