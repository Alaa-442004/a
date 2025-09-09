import "./globals.css";

export const metadata = {
  title: "Alshardge",
  description: "Alshardge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="/9987eb512151b450fd789b926391e339764420c7.png"
        />
        <title>Alshardge</title>
      </head>

      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
