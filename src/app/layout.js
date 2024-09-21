import {Inter_Tight} from "next/font/google";
import "./layout.css";

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "FocalPoint Checklist"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${interTight.variable}`}>
        {children}
      </body>
    </html>
  );
}
