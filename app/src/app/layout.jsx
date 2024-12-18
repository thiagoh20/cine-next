import { mitr } from "@/styles/font"
import "@/styles/globals.css";
import Header from "@/components/Nav/Header";
import { AuthProvider } from "@/contexts/AuthConstext";
export const metadata = {
  title: {
    template: '%s | NEXUS CINEMA',
    default: 'NEXUS CINEMA',
    keywords: "Nexus Cinemax, cine en línea, películas, series, documentales, entretenimiento, cine, Cinemax, cartelera, extrenos",
    description: "Disfruta de la mejor experiencia cinematográfica en línea con Nexus Cinemax. Accede a una amplia variedad de películas, series y documentales.",
  },
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" /> */}
      <body className={mitr.className}>
        <AuthProvider>
          <Header />
        </AuthProvider>
        {children}</body>
    </html>
  );
}
