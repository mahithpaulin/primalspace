import './globals.css';

export const metadata = {
  title: 'PrimalSpace',
  description: 'Turn your devices into a private compute network.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
