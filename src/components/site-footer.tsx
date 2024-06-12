const date = new Date();
const year = date.getFullYear();

export const SiteFooter = () => {
	return (
		<footer className="py-6">
			<p className="text-neutral-600">&copy; {year} Selium Labs</p>
		</footer>
	);
};
