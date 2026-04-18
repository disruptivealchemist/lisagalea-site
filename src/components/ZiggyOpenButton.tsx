"use client";

export function ZiggyOpenButton({ label = "⚡ Say Hello to ZiggyZap" }: { label?: string }) {
  function openZiggy() {
    const btn = document.querySelector<HTMLButtonElement>(".zz-avatar-btn:not(.zz-avatar-btn--open)");
    btn?.click();
  }
  return (
    <button onClick={openZiggy} className="btn btn-filled">
      {label}
    </button>
  );
}
