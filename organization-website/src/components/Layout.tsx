import type { ReactNode } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navbar from './Navbar';
// Add Footer import if you have a Footer component

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <main className="main-content">
          {children}
        </main>
        {/* Footer would go here if you have one */}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
