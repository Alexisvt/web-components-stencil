import { Component, h, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @State() showContactInfo = false;
  @Prop({ reflectToAttr: true }) title: string;
  @Prop({ reflectToAttr: true, mutable: true }) opened: boolean;

  onCloseDrawer = () => {
    if (this.opened) {
      this.opened = false;
    }
  };

  onContentChange = (content: string) => {
    this.showContactInfo = content === 'contact';
  };

  @Method()
  async open() {
    this.opened = true;
  }

  render() {
    let drawerStateClass = '';
    let backdropOpenClass = '';
    let mainContent = <slot />;

    if (this.showContactInfo) {
      mainContent = (
        <div class="contact-information">
          <h2>Contact Information</h2>
          <p>You can reach us via phone or email.</p>
          <ul>
            <li>Phone: 123123123213</li>
            <li>
              E-Mail: <a href="mailto:test@gmail.com">test@gmail.com</a>
            </li>
          </ul>
          <slot />
        </div>
      );
    }

    if (this.opened) {
      drawerStateClass = 'side-drawer--open';
      backdropOpenClass = 'backdrop--open';
    }

    return [
      <div onClick={this.onCloseDrawer} class={`backdrop ${backdropOpenClass}`} />,
      <aside class={`side-drawer ${drawerStateClass}`}>
        <header>
          <h1>{this.title}</h1>
          <button
            onClick={this.onCloseDrawer}
            class="side-drawer__close-btn side-drawer__close-btn--focus-off"
          >
            X
          </button>
        </header>
        <section class="tabs">
          <button
            class={'tabs__nav-button ' + (!this.showContactInfo ? 'tabs__nav-button--active ' : '')}
            onClick={() => {
              this.onContentChange('nav');
            }}
          >
            Navigation
          </button>
          <button
            class={'tabs__nav-button ' + (this.showContactInfo ? 'tabs__nav-button--active ' : '')}
            onClick={() => {
              this.onContentChange('contact');
            }}
          >
            Content
          </button>
        </section>
        <main>{mainContent}</main>
      </aside>,
    ];
  }
}
