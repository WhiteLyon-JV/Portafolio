export default function Footer() {
  return (
    <footer className="py-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Javier Vieytes. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
