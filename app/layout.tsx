import './globals.css';
import NavigationBar from '@/components/navigation-bar';

export const metadata = {
  title: 'Recruitment Firm',
  description: 'Internal company database',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
