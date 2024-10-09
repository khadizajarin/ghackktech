import { Cinzel_Decorative, Cinzel } from 'next/font/google';


const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '900'],
});

const cinzel_decorative = Cinzel_Decorative({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '900'],
});

const Footer = () => {
    return (
        <footer className="footer bg-primary bg-opacity-80 text-secondary lg:p-10 p-6" style={{ fontFamily: cinzel.style.fontFamily, fontWeight: '900' }}>
          <nav>
            <h6 className="footer-title text-secondary font-extrabold">Manhwa</h6>
            <a className="link text-neutral text-opacity-75 link-hover">Romantic</a>
            <a className="link text-neutral text-opacity-75 link-hover">Comedy</a>
            <a className="link text-neutral text-opacity-75 link-hover">Action</a>
            <a className="link text-neutral text-opacity-75 link-hover">Sci-fi</a>
          </nav>
          <nav>
            <h6 className="footer-title text-secondary font-extrabold">Anime</h6>
            <a className="link text-neutral text-opacity-75 link-hover">Child</a>
            <a className="link text-neutral text-opacity-75 link-hover">Funny</a>
            <a className="link text-neutral text-opacity-75 link-hover">Documentry</a>
            <a className="link text-neutral text-opacity-75 link-hover">Live Action</a>
          </nav>
          <nav>
            <h6 className="footer-title text-secondary font-extrabold">Legal</h6>
            <a className="link text-neutral text-opacity-75 link-hover">Terms of use</a>
            <a className="link text-neutral text-opacity-75 link-hover">Privacy policy</a>
            <a className="link text-neutral text-opacity-75 link-hover">Cookie policy</a>
          </nav>
          <form>
            <h6 className="footer-title text-secondary font-extrabold">Never Miss An Update...</h6>
            <fieldset className="form-control lg:w-80 w-14 ">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="lg:input lg:input-bordered join-item text-secondary text-opacity-70 pl-4 lg:font-extrabold" />
                <button className="btn btn-primary join-item bg-primary text-secondary" style={{ fontFamily: cinzel_decorative.style.fontFamily,  fontWeight: '900' }}>Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer>
    );
};

export default Footer;