import React from "react";
import "../assets/scss/temple_culberson/Newsletter.scss";
import Navbar from "./common/Navbar2";
import Footer from "./common/Footer";
import HeaderImage from "./HeaderImage";
import landing_page_img from "../assets/img/Photo by Aaron Burden on Unsplash.png";

export default function Newsletter() {
  return (
    <>
      <Navbar />
      <HeaderImage source={landing_page_img} />
      <main role="main" class="container">
        <div class="row">
          <div class="col-md-8 blog-main">
            <div class="blog-post">
              <h2 class="blog-post-title">Moving to South Gate</h2>
              <p class="blog-post-meta">
                March 12, 2020 by <a href="#">Eric</a>
              </p>
              <hr />
              <p>
                We are currently in the process of expanding our services; we
                are relocating to a larger operation in South Gate.
              </p>
            </div>

            {/* <div class="blog-post">
              <h2 class="blog-post-title">Sample Newsletter</h2>
              <p class="blog-post-meta">
                January 01, 2020 by <a href="#">Eric</a>
              </p>
              <hr />
              <p>
                Cum sociis natoque penatibus et magnis
                <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Sed posuere consectetur est at lobortis.
                Cras mattis consectetur purus sit amet fermentum.
              </p>
              <blockquote>
                <p>
                  Curabitur blandit tempus porttitor.
                  <strong>Nullam quis risus eget urna mollis</strong> ornare vel
                  eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
              </blockquote>
              <p>
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
              <p>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
                ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
            </div> */}

            {/* <div class="blog-post">
              <h2 class="blog-post-title">Sample Newsletter</h2>
              <p class="blog-post-meta">
                January 01, 2020 by <a href="#">Eric</a>
              </p>
              <hr />
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
                consectetur. Etiam porta sem malesuada magna mollis euismod.
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>

              <p>
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae
                elit libero, a pharetra augue.
              </p>
            </div> */}
          </div>

          {/* <aside class="col-md-4 blog-sidebar">
            <div class="p-3 mb-3 bg-light rounded">
              <h4 class="font-italic">About</h4>
              <p class="mb-0">
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
            </div>

            <div class="p-3">
              <h4 class="font-italic">Elsewhere</h4>
              <ol class="list-unstyled">
                <li>
                  <a href="#">Indeed</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ol>
            </div>
          </aside> */}
        </div>
      </main>
      <Footer />
    </>
  );
}
