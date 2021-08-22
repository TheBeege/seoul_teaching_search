class CustomHeader extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});
    const wrapper = document.createElement('header');
    wrapper.id = 'header';

    const logo = document.createElement('img');
    logo.src = 'img/BadSmiley.svg';
    logo.id = 'logo';
    logo.setAttribute('alt', 'Mean troll smiley logo (temporary)');

    const title = document.createElement('h1');
    title.textContent = 'Find Your Next English Teaching Job';

    const styleLink = document.createElement('link');
    styleLink.setAttribute('rel', 'stylesheet');
    styleLink.setAttribute('href', 'css/header.css');

    shadow.appendChild(wrapper);
    shadow.appendChild(styleLink);
    wrapper.appendChild(logo);
    wrapper.appendChild(title);
  }
}

customElements.define('custom-header', CustomHeader);
