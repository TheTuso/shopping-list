import Provider from "@/lib/provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golang shopping list",
  description: "Golang shopping list",
  icons: {
    icon: {
      url: "https://fav.farm/🛒",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
