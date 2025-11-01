import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/theme";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <main>{children}</main>
      <Toaster />
    </ThemeProvider>
  )
}
