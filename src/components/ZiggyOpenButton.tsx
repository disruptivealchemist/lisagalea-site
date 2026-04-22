"use client";

interface ZiggyOpenButtonProps {
  label?: string;
  modalMode?: boolean;
}

export function ZiggyOpenButton({ label = "⚡ Say Hello to ZiggyZap", modalMode = false }: ZiggyOpenButtonProps) {
  function openZiggy() {
    if (modalMode) {
      window.dispatchEvent(new CustomEvent("ziggy:modal"));
    } else {
      const btn = document.querySelector<HTMLButtonElement>(".zz-avatar-btn:not(.zz-avatar-btn--open)");
      btn?.click();
    }
  }
  return (
    <button onClick={openZiggy} className="btn btn-filled">
      {label}
    </button>
  );
}
