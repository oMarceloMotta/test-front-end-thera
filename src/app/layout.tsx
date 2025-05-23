"use client";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="vsc-initialized" cz-shortcut-listen="true">
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
