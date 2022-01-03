import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";

import "./submission.css";
export class submission extends Component {
  onsubmit = (e) => {
    e.preventDefault();
    this.sitename = document.getElementById(
      "standard_submission_submission_sitename"
    ).value;
    this.url = document.getElementById(
      "standard_submission_submission_url"
    ).value;
    this.description = document.getElementById(
      "standard_submission_submission_description"
    ).value;
    this.categories = document.getElementById(
      "standard_submission_submission_categories"
    ).value;
    this.tags = document.getElementById(
      "standard_submission_submission_tags"
    ).value;
    this.technologies = document.getElementById(
      "standard_submission_submission_technologies"
    ).value;
    this.suggestedtags = document.getElementById(
      "standard_submission_submission_suggestedTags"
    ).value;
    this.designBy = document.getElementById(
      "standard_submission_submission_designBy"
    ).value;
    this.designURL = document.getElementById(
      "standard_submission_submission_designerUrl"
    ).value;
    this.twitter = document.getElementById(
      "standard_submission_submission_twitter"
    ).value;
    this.country = document.getElementById(
      "standard_submission_submission_country"
    ).value;
    const data = {
      sitename: this.sitename,
      url: this.url,
      description: this.description,
      categroies: this.categories,
      tags: this.tags,
      technologies: this.technologies,
      suggestedtags: this.suggestedtags,
      designBy: this.designBy,
      designURL: this.designURL,
      twitter: this.twitter,
      country: this.country,
    };
    localStorage.setItem("data", JSON.stringify(data));
    alert("Submitted Your Data");
    console.log(data);
  };
  render() {
    return (
      <div className="submissionContainer">
        <div className="inner width-2">
          <div className="head-box-form">
            <h1 className="inner heading-large horizontal-center">
              Standard Submission
            </h1>
          </div>

          <ul className="breadcrumb-submit">
            <li className="active">
              <span>
                <strong>Step 1</strong>. Complete information
              </span>
            </li>

            <li>
              <span>
                <strong>Step 2</strong>. Log in or Register
              </span>
            </li>

            <li>
              <span>
                <strong>Step 3</strong>. Review &amp; Check out
              </span>
            </li>
          </ul>

          <form
            name="standard_submission"
            method="post"
            novalidate="novalidate"
          >
            <div className="box-form-fields js-forms">
              <ul>
                <li>
                  <div className="row left">
                    <label
                      for="standard_submission_submission_sitename"
                      className="asterisk-required"
                    >
                      <strong>Sitename</strong>
                    </label>
                  </div>
                  <div className="row right">
                    <div className="form-group ">
                      <input
                        type="text"
                        id="standard_submission_submission_sitename"
                        name="standard_submission[submission][sitename]"
                        required="required"
                        className="text-input js-validate_characters"
                        data-msg="form.characters_remaining"
                        data-max="30"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row left">
                    <label
                      for="standard_submission_submission_url"
                      className="asterisk-required"
                    >
                      <strong>URL</strong>
                    </label>
                  </div>
                  <div className="row right">
                    <div className="form-group ">
                      <input
                        type="text"
                        id="standard_submission_submission_url"
                        name="standard_submission[submission][url]"
                        required="required"
                        className="text-input js-validate_url"
                        data-msg="form.add_a_url_with_http"
                        data-validator="url"
                        inputmode="url"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row left">
                    <label
                      for="standard_submission_submission_description"
                      className="asterisk-required"
                    >
                      <strong>Description</strong>
                    </label>
                  </div>
                  <div className="row right">
                    <div className="form-group ">
                      <textarea
                        id="standard_submission_submission_description"
                        name="standard_submission[submission][description]"
                        required="required"
                        data-msg="form.characters_remaining_no_html"
                        className="text-input js-validate_characters"
                        data-max="185"
                      ></textarea>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="row left">
                    <label
                      for="standard_submission_submission_categories"
                      className="asterisk-required"
                    >
                      <strong>Categories</strong>
                    </label>
                  </div>
                  <div className="row right">
                    <div className="form-group ">
                      <select
                        id="standard_submission_submission_categories"
                        name="standard_submission[submission][categories][]"
                        required="required"
                        className="js-choices js-choices-remove-buttons js-validate_options"
                        data-msg="form.categories.tip"
                        data-max="3"
                        data-min="1"
                        multiple="multiple"
                      >
                        <option value="73">Architecture</option>
                        <option value="74">Art &amp; Illustration</option>
                        <option value="76">Business &amp; Corporate</option>
                        <option value="77">Culture &amp; Education</option>
                        <option value="78">Design Agencies</option>
                        <option value="79">E-Commerce</option>
                        <option value="80">Events</option>
                        <option value="179">Experimental</option>
                        <option value="81">Fashion</option>
                        <option value="82">Film &amp; TV</option>
                        <option value="83">Food &amp; Drink</option>
                        <option value="84">Games &amp; Entertainment</option>
                        <option value="85">Hotel / Restaurant</option>
                        <option value="86">Institutions</option>
                        <option value="75">Magazine / Newspaper / Blog</option>
                        <option value="87">Mobile &amp; Apps</option>
                        <option value="88">Music &amp; Sound</option>
                        <option value="89">Other</option>
                        <option value="165">Photography</option>
                        <option value="90">Promotional</option>
                        <option value="270">Real Estate</option>
                        <option value="334">Social responsibility</option>
                        <option value="91">Sports</option>
                        <option value="289">Startups</option>
                        <option value="92">Technology</option>
                        <option value="93">Web &amp; Interactive</option>
                      </select>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row left">
                    <label
                      for="standard_submission_submission_tags"
                      className="asterisk-required"
                    >
                      <strong>Tags</strong>
                    </label>
                  </div>
                  <div className="row right">
                    <div className="form-group ">
                      <select
                        id="standard_submission_submission_tags"
                        name="standard_submission[submission][tags][]"
                        required="required"
                        className="js-choices js-choices-remove-buttons js-validate_options"
                        data-msg="form.tags.tip"
                        data-max="6"
                        data-min="1"
                        multiple="multiple"
                      >
                        <option value="177">360</option>
                        <option value="251">3D</option>
                        <option value="285">404 pages</option>
                        <option value="278">About Page</option>
                        <option value="95">Animation</option>
                        <option value="96">App Style</option>
                        <option value="97">Big Background Images</option>
                        <option value="99">Clean</option>
                        <option value="101">Colorful</option>
                        <option value="280">Contact Page</option>
                        <option value="272">Content architecture</option>
                        <option value="298">Contentful</option>
                        <option value="273">Copy design</option>
                        <option value="178">Data Visualization</option>
                        <option value="258">Filters and Effects</option>
                        <option value="107">Flat Design</option>
                        <option value="282">Footer Design</option>
                        <option value="253">Forms and Input</option>
                        <option value="109">Fullscreen</option>
                        <option value="180">Gallery</option>
                        <option value="252">Gestures / Interaction</option>
                        <option value="110">Graphic design</option>
                        <option value="279">Header Design</option>
                        <option value="111">Horizontal Layout</option>
                        <option value="113">Icons</option>
                        <option value="181">Illustration</option>
                        <option value="164">Illustration</option>
                        <option value="114">Infinite Scroll</option>
                        <option value="274">Interaction Design</option>
                        <option value="182">Menu - Horizontal</option>
                        <option value="183">Menu - Vertical</option>
                        <option value="281">Microinteractions</option>
                        <option value="116">Minimal</option>
                        <option value="117">Navigation Menu</option>
                        <option value="299">next.js</option>
                        <option value="118">Parallax</option>
                        <option value="275">Photo &amp; Video</option>
                        <option value="119">Photography</option>
                        <option value="120">Portfolio</option>
                        <option value="283">Project Page</option>
                        <option value="185">Responsive</option>
                        <option value="121">Responsive Design</option>
                        <option value="122">Retro</option>
                        <option value="123">Scrolling</option>
                        <option value="124">SEO</option>
                        <option value="125">Single page</option>
                        <option value="187">Social Integration</option>
                        <option value="188">Sound-Audio</option>
                        <option value="189">Storytelling</option>
                        <option value="176">Transitions</option>
                        <option value="130">Typography</option>
                        <option value="276">UI design</option>
                        <option value="131">Unusual Navigation</option>
                        <option value="132">Vector</option>
                        <option value="133">Video</option>
                        <option value="134">Web Fonts</option>
                      </select>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row left">
                    <label for="standard_submission_submission_technologies">
                      <strong>Technologies</strong>
                    </label>
                  </div>
                  <div className="row right">
                    <div className="form-group ">
                      <select
                        id="standard_submission_submission_technologies"
                        name="standard_submission[submission][technologies][]"
                        className="js-choices js-choices-remove-buttons js-validate_options"
                        data-msg="form.select_technologies"
                        data-max="6"
                        data-min="1"
                        data-noresults="form.select_technologies.no_results"
                        multiple="multiple"
                      >
                        <option value="327">11ty</option>
                        <option value="345">Adobe Illustrator</option>
                        <option value="344">Adobe Photoshop</option>
                        <option value="335">Adobe XD</option>
                        <option value="311">After Effects</option>
                        <option value="207">Angular</option>
                        <option value="295">Anime.js</option>
                        <option value="342">AWS</option>
                        <option value="205">Backbone.js</option>
                        <option value="288">BARBA.js</option>
                        <option value="339">Blender</option>
                        <option value="210">Bootstrap</option>
                        <option value="329">Cables</option>
                        <option value="333">Canvas API</option>
                        <option value="338">Cinema 4D</option>
                        <option value="349">Contentful</option>
                        <option value="254">Craft CMS</option>
                        <option value="260">CreateJS</option>
                        <option value="103">CSS</option>
                        <option value="315">Curtains.js</option>
                        <option value="217">D3</option>
                        <option value="351">DatoCMS</option>
                        <option value="247">Debian</option>
                        <option value="248">Demandware</option>
                        <option value="307">Directus</option>
                        <option value="343">Docker</option>
                        <option value="105">Drupal</option>
                        <option value="346">Editor X</option>
                        <option value="316">Elementor</option>
                        <option value="225">Express</option>
                        <option value="255">FastClick</option>
                        <option value="314">Figma</option>
                        <option value="257">Firebase</option>
                        <option value="319">Flickity</option>
                        <option value="231">Font Awesome</option>
                        <option value="306">Framer Motion</option>
                        <option value="290">Gatsby</option>
                        <option value="216">GLSL</option>
                        <option value="294">Go</option>
                        <option value="204">Google App Engine</option>
                        <option value="226">Google Font API</option>
                        <option value="293">GraphQL</option>
                        <option value="195">GSAP Animation</option>
                        <option value="213">Hammer.JS</option>
                        <option value="239">Handlebars</option>
                        <option value="296">Highway.js</option>
                        <option value="112">HTML5</option>
                        <option value="292">Hugo</option>
                        <option value="242">Ink</option>
                        <option value="312">Javascript</option>
                        <option value="115">jQuery</option>
                        <option value="243">Knockout</option>
                        <option value="347">Lambda</option>
                        <option value="229">Laravel</option>
                        <option value="256">Lo-dash</option>
                        <option value="328">Locomotive Scroll</option>
                        <option value="308">Lottie</option>
                        <option value="209">Magento</option>
                        <option value="301">Matter.js</option>
                        <option value="240">MediaElement.js</option>
                        <option value="218">Modernizr</option>
                        <option value="348">MongoDB</option>
                        <option value="350">Morphic</option>
                        <option value="297">Neos CMS</option>
                        <option value="303">Netlify</option>
                        <option value="317">Next.js</option>
                        <option value="199">Nginx</option>
                        <option value="193">Node.js</option>
                        <option value="291">Nuxt.js</option>
                        <option value="234">Optimizely</option>
                        <option value="238">OWL Carousel</option>
                        <option value="300">P5.js</option>
                        <option value="198">PHP</option>
                        <option value="221">PixiJS</option>
                        <option value="337">Prestashop</option>
                        <option value="304">Prismic</option>
                        <option value="324">PWA</option>
                        <option value="341">Python</option>
                        <option value="200">Raphael.js</option>
                        <option value="212">React</option>
                        <option value="332">ReadyMag</option>
                        <option value="326">Redux</option>
                        <option value="320">Rellax.js</option>
                        <option value="206">RequireJS</option>
                        <option value="220">Reveal.js</option>
                        <option value="261">Ruby</option>
                        <option value="325">Sanity</option>
                        <option value="336">Sass</option>
                        <option value="228">Shopify</option>
                        <option value="310">Sketch</option>
                        <option value="250">Skrollr.js</option>
                        <option value="202">Snap.svg</option>
                        <option value="232">Socket.io</option>
                        <option value="237">Spin.js</option>
                        <option value="305">Svelte</option>
                        <option value="127">SVG</option>
                        <option value="321">Swiper.js</option>
                        <option value="318">Tailwind CSS</option>
                        <option value="201">Three.js</option>
                        <option value="331">Tilda</option>
                        <option value="330">Timber</option>
                        <option value="262">tween.js</option>
                        <option value="259">Twitter API</option>
                        <option value="227">Typekit</option>
                        <option value="340">Typescript</option>
                        <option value="196">Underscore.js</option>
                        <option value="322">Unity</option>
                        <option value="323">Unreal Engine</option>
                        <option value="313">Vanilla JS</option>
                        <option value="222">Varnish</option>
                        <option value="263">Velocity.js</option>
                        <option value="302">Vercel</option>
                        <option value="223">VideoJS</option>
                        <option value="190">VR</option>
                        <option value="287">Vue.js</option>
                        <option value="309">Webflow</option>
                        <option value="135">WebGL</option>
                        <option value="224">Webpack</option>
                        <option value="136">WebSockets</option>
                        <option value="192">WebVR</option>
                        <option value="211">WooCommerce</option>
                        <option value="100">Wordpress</option>
                        <option value="230">Yepnope</option>
                        <option value="233">YouTube API</option>
                        <option value="219">Zepto</option>
                      </select>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row left">
                    <label for="standard_submission_submission_suggestedTags">
                      <strong>Other technologies</strong>
                    </label>
                  </div>
                  <div className="row right">
                    <div className="form-group ">
                      <input
                        type="text"
                        id="standard_submission_submission_suggestedTags"
                        name="standard_submission[submission][suggestedTags]"
                        placeholder="Add here the technologies that are not on the list above?"
                        className="text-input"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="box-form-fields js-forms">
              <ul>
                <li>
                  <div className="row left">
                    <label
                      for="standard_submission_submission_designBy"
                      className="asterisk-required"
                    >
                      <strong>Design by</strong>
                    </label>
                  </div>
                  <div className="row right">
                    <div className="form-group ">
                      <input
                        type="text"
                        id="standard_submission_submission_designBy"
                        name="standard_submission[submission][designBy]"
                        required="required"
                        className="text-input js-validate_characters"
                        data-msg="form.characters_remaining"
                        placeholder="Author name"
                        data-max="30"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row left">
                    <label
                      for="standard_submission_submission_designerUrl"
                      className="asterisk-required"
                    >
                      <strong>Designer&#039;s URL</strong>
                    </label>
                  </div>
                  <div className="row right">
                    <div className="form-group ">
                      <input
                        type="text"
                        id="standard_submission_submission_designerUrl"
                        name="standard_submission[submission][designerUrl]"
                        required="required"
                        className="text-input js-validate_url"
                        data-msg="form.add_a_url_with_http"
                        placeholder="URL of the Designer"
                        inputmode="url"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row left">
                    <label for="standard_submission_submission_twitter">
                      <strong>Twitter</strong> <em>(optional)</em>
                    </label>
                  </div>
                  <div className="row right">
                    <input
                      type="text"
                      id="standard_submission_submission_twitter"
                      name="standard_submission[submission][twitter]"
                      className="text-input"
                      placeholder="Twitter"
                    />
                  </div>
                </li>
                <li>
                  <div className="row left">
                    <label
                      for="standard_submission_submission_country"
                      className="asterisk-required"
                    >
                      <strong>Country</strong>
                    </label>
                  </div>
                  <div className="row right">
                    <div className="form-group ">
                      <select
                        id="standard_submission_submission_country"
                        name="standard_submission[submission][country]"
                        required="required"
                        className="js-choices js-validate_options"
                        data-msg="form.choose_a_country"
                        data-max="1"
                        data-min="1"
                      >
                        <option value="" selected="selected">
                          Choose a country
                        </option>
                        <option value="151">Afghanistan</option>
                        <option value="4">Albania</option>
                        <option value="131">Algeria</option>
                        <option value="1">Andorra</option>
                        <option value="137">Angola</option>
                        <option value="180">Antarctica</option>
                        <option value="3">Antigua</option>
                        <option value="6">Argentina</option>
                        <option value="5">Armenia</option>
                        <option value="9">Aruba</option>
                        <option value="8">Australia</option>
                        <option value="7">Austria</option>
                        <option value="130">Azerbaijan</option>
                        <option value="20">Bahamas</option>
                        <option value="14">Bahrain</option>
                        <option value="11">Bangladesh</option>
                        <option value="10">Barbados</option>
                        <option value="21">Belarus</option>
                        <option value="12">Belgium</option>
                        <option value="22">Belize</option>
                        <option value="167">Benin</option>
                        <option value="16">Bermuda</option>
                        <option value="18">Bolivia</option>
                        <option value="15">Bonaire</option>
                        <option value="132">Bosnia and Herzegovina</option>
                        <option value="165">Botswana</option>
                        <option value="19">Brazil</option>
                        <option value="17">Brunei</option>
                        <option value="13">Bulgaria</option>
                        <option value="144">Burkina Faso</option>
                        <option value="62">Cambodia</option>
                        <option value="146">Cameroon</option>
                        <option value="24">Canada</option>
                        <option value="31">Cape Verde</option>
                        <option value="163">Cayman Islands</option>
                        <option value="26">Chile</option>
                        <option value="27">China</option>
                        <option value="28">Colombia</option>
                        <option value="174">Congo</option>
                        <option value="182">Cook Islands</option>
                        <option value="29">Costa Rica</option>
                        <option value="166">Côte d&#039;Ivoire</option>
                        <option value="50">Croatia</option>
                        <option value="30">Cuba</option>
                        <option value="23">Curaçao</option>
                        <option value="32">Cyprus</option>
                        <option value="33">Czech Republic</option>
                        <option value="35">Denmark</option>
                        <option value="36">Dominican Republic</option>
                        <option value="37">Ecuador</option>
                        <option value="39">Egypt</option>
                        <option value="139">El Salvador</option>
                        <option value="38">Estonia</option>
                        <option value="176">Ethiopia</option>
                        <option value="184">Faroe Islands</option>
                        <option value="183">Fiji</option>
                        <option value="41">Finland</option>
                        <option value="42">France</option>
                        <option value="92">French Polynesia</option>
                        <option value="171">Gabon</option>
                        <option value="46">Gambia</option>
                        <option value="44">Georgia</option>
                        <option value="34">Germany</option>
                        <option value="140">Ghana</option>
                        <option value="45">Gibraltar</option>
                        <option value="47">Greece</option>
                        <option value="43">Grenada</option>
                        <option value="164">Guam</option>
                        <option value="48">Guatemala</option>
                        <option value="155">Guernsey</option>
                        <option value="154">Guyana</option>
                        <option value="157">Haiti</option>
                        <option value="127">Honduras</option>
                        <option value="49">Hong Kong - Macau</option>
                        <option value="51">Hungary</option>
                        <option value="56">Iceland</option>
                        <option value="55">India</option>
                        <option value="52">Indonesia</option>
                        <option value="135">Iran</option>
                        <option value="126">Iraq</option>
                        <option value="53">Ireland</option>
                        <option value="143">Isle of Man</option>
                        <option value="54">Israel</option>
                        <option value="57">Italy</option>
                        <option value="58">Jamaica</option>
                        <option value="60">Japan</option>
                        <option value="59">Jordan</option>
                        <option value="65">Kazakhstan</option>
                        <option value="61">Kenya</option>
                        <option value="134">Kosovo</option>
                        <option value="64">Kuwait</option>
                        <option value="153">Kyrgyzstan</option>
                        <option value="152">Lao</option>
                        <option value="71">Latvia</option>
                        <option value="66">Lebanon</option>
                        <option value="162">Lesotho</option>
                        <option value="142">Libya</option>
                        <option value="69">Lithuania</option>
                        <option value="70">Luxembourg</option>
                        <option value="169">Macao</option>
                        <option value="76">Macedonia F.Y.R.O</option>
                        <option value="170">Madagascar</option>
                        <option value="82">Malaysia</option>
                        <option value="80">Maldives</option>
                        <option value="156">Mali</option>
                        <option value="78">Malta</option>
                        <option value="77">Martinique</option>
                        <option value="79">Mauritius Island</option>
                        <option value="81">Mexico</option>
                        <option value="74">Moldova</option>
                        <option value="73">Monaco</option>
                        <option value="128">Mongolia</option>
                        <option value="75">Montenegro</option>
                        <option value="72">Morocco</option>
                        <option value="83">Mozambique</option>
                        <option value="173">Myanmar</option>
                        <option value="84">Namibia</option>
                        <option value="87">Nepal</option>
                        <option value="85">Netherlands</option>
                        <option value="175">New Caledonia</option>
                        <option value="88">New Zealand</option>
                        <option value="161">Nicaragua</option>
                        <option value="133">Nigeria</option>
                        <option value="168">North Korea</option>
                        <option value="86">Norway</option>
                        <option value="89">Oman</option>
                        <option value="125">Pakistan</option>
                        <option value="150">Palestine, State of</option>
                        <option value="90">Panama</option>
                        <option value="124">Paraguay</option>
                        <option value="91">Peru</option>
                        <option value="93">Philippines</option>
                        <option value="94">Poland</option>
                        <option value="96">Portugal</option>
                        <option value="95">Puerto Rico</option>
                        <option value="97">Qatar</option>
                        <option value="159">Réunion</option>
                        <option value="98">Romania</option>
                        <option value="100">Russia</option>
                        <option value="141">Rwanda</option>
                        <option value="172">Saint Kitts and Nevis</option>
                        <option value="108">San Marino</option>
                        <option value="101">Saudi Arabia</option>
                        <option value="109">Senegal</option>
                        <option value="99">Serbia</option>
                        <option value="102">Seychelles Islands</option>
                        <option value="181">SGSSI</option>
                        <option value="105">Singapore</option>
                        <option value="107">Slovakia</option>
                        <option value="106">Slovenia</option>
                        <option value="179">Solomon Islands</option>
                        <option value="178">Somalia</option>
                        <option value="123">South Africa</option>
                        <option value="63">South Korea</option>
                        <option value="40">Spain</option>
                        <option value="68">Sri Lanka</option>
                        <option value="67">St. Lucia</option>
                        <option value="104">St. Martin</option>
                        <option value="145">Sudan</option>
                        <option value="177">Suriname</option>
                        <option value="103">Sweden</option>
                        <option value="25">Switzerland</option>
                        <option value="110">Syria</option>
                        <option value="115">Taiwan</option>
                        <option value="116">Tanzania</option>
                        <option value="111">Thailand</option>
                        <option value="158">Togo</option>
                        <option value="114">Trinidad and Tobago</option>
                        <option value="112">Tunisia</option>
                        <option value="113">Turkey</option>
                        <option value="149">Tuvalu</option>
                        <option value="147">Uganda</option>
                        <option value="117">Ukraine</option>
                        <option value="2">United Arab Emirates</option>
                        <option value="118">United Kingdom</option>
                        <option value="119">United States</option>
                        <option value="120">Uruguay</option>
                        <option value="148">Uzbekistan</option>
                        <option value="121">Venezuela</option>
                        <option value="122">Vietnam</option>
                        <option value="129">Yemen</option>
                        <option value="138">Zambia</option>
                        <option value="136">Zimbabwe</option>
                      </select>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row right">
                    <div className="form-group ">
                      <button onClick={this.onsubmit}>Proceed</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default submission;
