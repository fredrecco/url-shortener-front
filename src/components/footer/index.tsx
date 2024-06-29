const Footer = () => {
  return (
    <footer className="min-h-20 w-full flex justify-center items-center bg-slate-950 text-slate-50">
      <p className="">
        &copy; {new Date().getUTCFullYear()} - <span><a className="hover:underline" href="https://www.fredrecco.xyz/">Recco</a></span></p>
    </footer>
  );
};

export default Footer;
