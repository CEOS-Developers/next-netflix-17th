import './globals.css';
import StyledComponentsRegistry from '@/assets/lib/registry';
export default function RooteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Repick_Netflix</title>
        <link rel='icon' href='/netflix_trans.png'/>
        </head>
      <body className="w375 h746 ma"><StyledComponentsRegistry>{children}</StyledComponentsRegistry></body>
    </html>
  );
}
