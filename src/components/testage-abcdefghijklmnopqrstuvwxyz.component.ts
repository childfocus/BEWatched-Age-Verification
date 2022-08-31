export class AgeVerificationComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const testSpan = document.createElement('span');
    testSpan.textContent = 'Hello World';

    if (this.shadowRoot) {
      this.shadowRoot.appendChild(testSpan);
    }
  }
}

customElements.define('age-verification', AgeVerificationComponent);
