import type { Metadata } from "next";
import {Toaster} from "sonner"
import "./globals.css";


export const metadata: Metadata = {
  title: "Management App",
  description: "Company Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="companyIcon" href="public/favicon.png"/>
      </head>
      <body>
        {children}
        <Toaster richColors/>
      </body>
    </html>
  );
}
