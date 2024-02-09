import "./globals.css";

export const metadata = {
  title: "Matias Seitour",
  description:
    "Web developer specialized in creating unique and elegant websites and applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
