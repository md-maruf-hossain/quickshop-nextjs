import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <nav>
        <header className="footer-title">Services</header>
        <Link className="link link-hover">Branding</Link>
        <Link className="link link-hover">Design</Link>
        <Link className="link link-hover">Marketing</Link>
        <Link className="link link-hover">Advertisement</Link>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Jobs</Link>
        <Link className="link link-hover">Press kit</Link>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Cookie policy</Link>
      </nav>
      <form>
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
      <p>Copyright © {new Date().getFullYear()} - All right reserved by Quick Shop BD</p>
    </footer>
  );
};

export default Footer;
