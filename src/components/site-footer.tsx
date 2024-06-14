const date = new Date();
const year = date.getFullYear();

export const SiteFooter = () => {
  return (
    <footer className="mt-16 py-4 text-neutral-600 text-center">
      <p className="text-xs">&copy; {year} Selium Labs</p>
    </footer>
  );
};
