const Header = () => {
  return (
    <header className="w-full bg-slate-800 text-slate-50">
      <nav className="flex justify-between items-center py-5 px-6">
        <a className="text-xl font-bold" href="/">URL Shortener</a>
        <div className="space-x-3">
          <a className="hover:underline hover:opacity-80" href="#signup">Sign up</a>
          <a className="hover:underline hover:opacity-80" href="#signin">Sign in</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
