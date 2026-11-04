import { Gilda_Display, Poppins } from "next/font/google";
import "./globals.css";

const gilda = Gilda_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gilda",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Mr Mrs Panipuriwala & Chathouse | Authentic Street Food, Chaat & Café in Chittorgarh",
  description:
    "Experience Rajasthan's finest authentic chaats, crispy gol gappe, artisan coffees, thick shakes, and gourmet street food at Mr Mrs Panipuriwala & Chathouse, Fawwara Chowk, Chittorgarh. 100% Pure Veg • Est. 2026.",
  keywords: [
    "Mr Mrs Panipuriwala",
    "Mr Mrs Panipuriwala and Chathouse",
    "Pani Puri Chittorgarh",
    "Best Chaat Chittorgarh",
    "Chathouse Chittorgarh",
    "Street Food Chittorgarh",
    "Fawwara Chowk Chittorgarh Cafe",
    "Pure Veg Restaurant Chittorgarh",
  ],
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${gilda.variable} ${poppins.variable} overflow-x-hidden w-full max-w-full`}>
      <body className="antialiased font-sans bg-[#FDFBF7] text-[#2C2725] overflow-x-hidden w-full max-w-full">
        {children}
      </body>
    </html>
  );
}

