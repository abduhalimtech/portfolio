"use client";

import { SiGoogleplay, SiAppstore } from "react-icons/si";

interface StoreBadgesProps {
  android?: string;
  ios?: string;
  variant?: "default" | "compact";
}

const baseBtn =
  "inline-flex items-center gap-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2";
const defaultBtn =
  "px-4 py-2 bg-black text-white dark:bg-white dark:text-black hover:opacity-85";
const compactBtn =
  "px-3 py-1.5 text-xs bg-black text-white dark:bg-white dark:text-black hover:opacity-85";

export default function StoreBadges({ android, ios, variant = "default" }: StoreBadgesProps) {
  const cls = `${baseBtn} ${variant === "compact" ? compactBtn : defaultBtn}`;
  const iconSize = variant === "compact" ? 16 : 18;

  return (
    <div className="flex gap-3 flex-wrap">
      {android && (
        <a
          href={android}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          aria-label="Get it on Google Play"
        >
          <SiGoogleplay size={iconSize} aria-hidden className="text-[#34A853]" />
          <span>Google Play</span>
        </a>
      )}

      {ios && (
        <a
          href={ios}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          aria-label="Download on the App Store"
        >
          <SiAppstore size={iconSize} aria-hidden className="text-[#0D96F6]" />
          <span>App Store</span>
        </a>
      )}
    </div>
  );
}
