import "./App.css";
import Logo from "./img/Logo.png";
import Background from "./img/Space.png";
import Phones from "./img/Phones.png";
import AppStore from "./img/App Store.png";
import GooglePay from "./img/GooglePay.png";
import ScreenPhone from "./img/Big_Phone.png";
import Behance from "./img/Behance.svg";
import Vimeo from "./img/Vimeo.svg";
import Linkedin from "./img/Linkedin.svg";

function App() {
  return (
    <div className="App mainContainer">
      <header className="header">
        <section className="leftSide">
          <img src={Logo} alt="logo" />
          <h4>Fit Mitch</h4>
        </section>
        <section className="navButtons">
          <button class="button_HowItWorks">How it works</button>
          <p>Why Fit Mitch</p>
          <p>Download App</p>
          <p>Gallery</p>
          <p>Contact us</p>
        </section>
      </header>

      <main>
        <section className="cnt">
          <div>
            <h3>
              The best way to close distance
              <br />
              between the trainer and the trainee.
            </h3>
            <p>
              Fit Mitch offers a host of workouts that are all centered around
              high intensity interval training, or HIIT. This platform revolves
              around four free platforms - Gym, Bodyweight Workouts and
              Training, Nutrition and Running.
            </p>
            <p>
              There are videos for each exercise demonstrating porper form, and
              there is a great social aspect to the app which motivates you to
              stick to your plan, and push yourself to beat your personal bests.
            </p>
            <p>
              There is a further subscription that you can pay to access
              Nutrition, which gives you weekly nutrition plans to complement
              the intense workouts.
            </p>
            <div className="buyButtons">
              <img src={GooglePay} alt="GooglePlay" />
              <img src={AppStore} alt="App Store" />
            </div>
          </div>
        </section>

        <section className="space">
          <img src={Phones} alt="Phone Screens" />
          <div className="leftBoard">
            <h2>A Million Possibility</h2>
            <p>
              Our approach has proven succeddful because everything we create
              combines your users 'goals' emotions, and prespectives with the
              objectives of your business and your product.
            </p>
            <button>Take a Tour</button>
            <button>Get App</button>
          </div>
        </section>

        <section className="container3">
          <h1 className="WhatPeople">What People Say</h1>
          <div className="cols">
            <article className="col">
              <img src="" alt="Person1" />
              <p>
                Is a simple but neat that allows you to completely control over
                your workout.
              </p>
              <h4>ANNA SMITH</h4>
              <p>Bodybuilder at The Golden Eva</p>
            </article>
            <article className="col">
              <img src="" alt="Person2" />
              <p>
                Is a simple but neat that allows you to completely control over
                your workout.
              </p>
              <h4>JOHNSON LAKE</h4>
              <p>Personal Trainer at Fit3000.org</p>
            </article>
            <article className="col">
              <img src="" alt="Person3" />
              <p>
                This is an amazing app. Once I installed it, I was able to
                manage every aspect of successfully running my business.
              </p>
              <h4>ALEX ROSS</h4>
              <p>Official Judge at IFBB</p>
            </article>
          </div>

          <article className="newsletter">
            <h3>Subcribe to our newsletter</h3>
            <div className="buttonsContain">
              <button type="text" className="newsletterButton1">
                Your email address
              </button>
              <button type="submit" className="newsletterButton2">
                SUBSCRIBE
              </button>
            </div>

            <p>
              If you want to receive monthly updates from us just pop your email
              in the box.
              <p>We think that spam is for jerks. And jerks we are not.</p>
            </p>
          </article>
        </section>

        <section className="rightBigPhone">
          <div className="bigPhone">
            <img src={ScreenPhone} alt="Phone Screen" />
          </div>
        </section>
      </main>

      <footer>
        <img src={Behance} alt="Linkedin" />
        <img src={Linkedin} alt="Behance" />
        <img src={Vimeo} alt="Vimeo" />
      </footer>
    </div>
  );
}

export default App;
