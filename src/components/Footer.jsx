export default function Footer() {
  return (
    <footer className="mt-auto text-center py-4 text-sm text-white/80 bg-black/40 backdrop-blur">
      © {new Date().getFullYear()} SolBoard · support@solboard.com
    </footer>
  );
}
