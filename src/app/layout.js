import { DM_Sans, Poppins } from "next/font/google";
import previewImage from "../../public/images/openGraphImage.png";
import "./globals.css";

const dm_sans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-text" 
});

const poppins = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-title"
});

export const metadata = {
  metadataBase: new URL('https://localhost:3000'),
  title: "Diana Araujo",
  description: "Clínica Odontológica Diana Araujo, nosso compromisso é oferecer saúde e bem estar através da Odontologia Humanizada.",
  keywords: ["Diana Araújo", "Diana Araujo", "Desntista", "Dentista em Campos", "Dentista em Campos dos Goytacazes", "Odontologia", "Odontologia Humanizada", "Clínica Odontológica", "Clínica Odontológica em Campos", "Clínica Odontológica em Campos dos Goytacazes", "Campos dos Goytacazes", "Campos", "Campos/RJ", "Campos dos Goytacazes/RJ", "Rio de Janeiro"],
  openGraph: {
    images: previewImage,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dm_sans.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
