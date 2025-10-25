export default function Footer() {
  return (
    <footer className="border-t px-4 py-8">
      <div className="mx-auto max-w-[1200px] text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Joe's Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
