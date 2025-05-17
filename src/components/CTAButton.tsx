"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Locale } from "@/i18n.config";

interface CTAButtonProps {
  text: string;
  to: string;
  locale: Locale;
  primary?: boolean;
  className?: string;
  params?: Record<string, string>;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  to,
  locale,
  primary = true,
  className = "",
  params,
}) => {
  const router = useRouter();

  if (params) {
    const queryString = new URLSearchParams(params).toString();
    const url = `/${locale}${to}?${queryString}`;

    return (
      <button
        onClick={() => router.push(url)}
        className={`
          inline-block px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105
          ${
            primary
              ? "bg-primary text-white hover:bg-primary/90"
              : "bg-white text-primary hover:bg-white/90"
          }
          ${className}
        `}>
        {text}
      </button>
    );
  }

  return (
    <Link
      href={`/${locale}${to}`}
      className={`
        inline-block px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105
        ${
          primary
            ? "bg-primary text-white hover:bg-primary/90"
            : "bg-white text-primary hover:bg-white/90"
        }
        ${className}
      `}>
      {text}
    </Link>
  );
};

export default CTAButton;