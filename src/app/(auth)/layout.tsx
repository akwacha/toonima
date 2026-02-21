
export default function SponsorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // We remove <html> and <body> because they are inherited from the Root Layout
    <div className="sponsor-paddock-wrapper">
      {children}
    </div>
  );
}