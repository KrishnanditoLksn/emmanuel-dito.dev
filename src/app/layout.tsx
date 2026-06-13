import { Poppins } from "next/font/google";
import "../index.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Dit's Dev",
  description: "Emmanuel Krishnandito Laksana Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-neo-bg text-black font-body antialiased">
        {children}
      </body>
    </html>
  );
}
