import React from "react"

const Footer = () => {
  return (
    <div className="row m-0 p-0 footerdiv">
        <div className="col-md-12 m-0 p-0">
        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <h5>INFO</h5>
                    <ul class="list-unstyled">
                        <li><a href="/">Formats</a></li>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Status</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h5>RESOURCES</h5>
                    <ul class="list-unstyled">
                        <li><a href="/">Developer API</a></li>
                        <li><a href="/">Tools</a></li>
                        <li><a href="/">Blog</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h5>COMPANY</h5>
                    <ul class="list-unstyled">
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Terms of Service</a></li>
                        <li><a href="/">Privacy</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h5>Subscribe to our email newsletter</h5>
                    <form>
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="Your email" aria-label="Your email"/>
                            <button class="btn btn-primary" type="submit">SUBSCRIBE</button>
                        </div>
                    </form>
                    <h5 class="mt-4">Follow us</h5>
                    <div class="social-icons">
                        <a href="/"><i class="fa-brands fa-square-facebook"></i></a>
                        <a href="/"><i class="fa-brands fa-square-instagram"></i></a>
                        <a href="/"><i class="fa-brands fa-square-x-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </div>
    </div>
  )
};

export default Footer;
