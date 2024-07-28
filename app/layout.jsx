import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Descover & Share AI Prompts",
};

const RootLayout = () => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
