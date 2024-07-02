import { Inter } from "next/font/google";
import "./globals.css";
import StepControllerProvider from "../../context/StepControllerContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StepControllerProvider>
        <body className={inter.className}>{children}</body>
      </StepControllerProvider>
    </html>
  );
}
