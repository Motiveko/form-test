import React, { HTMLAttributes, ReactNode } from 'react';

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children, style, ...props }) => (
  <div style={{ ...layoutStyle, ...style }} {...props}>
    {children}
  </div>
);

const layoutStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
};

export default Layout;
