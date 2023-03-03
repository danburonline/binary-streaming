import './globals.css';

export const metadata = {
  title: 'Testing client',
  description: 'Example testing client',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
