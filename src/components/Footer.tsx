export default function Footer() {
  return (
    <footer className="py-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm text-text-muted/60">
          © {new Date().getFullYear()} Javier Vieytes. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
