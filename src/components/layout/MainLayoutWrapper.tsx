"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function MainLayoutWrapper({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <main className={`min-h-screen page-transition bg-slate-50 ${isHomePage ? "" : "pt-20"}`}>
            {children}
        </main>
    );
}
