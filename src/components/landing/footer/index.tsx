export default function Footer() {
  return (
    <footer className="relative z-20 flex h-20 flex-col gap-2 overflow-hidden bg-gray-200/20 px-12 py-24">
      <p>All Rights Reserved, {new Date().getFullYear()}</p>
    </footer>
  );
}
