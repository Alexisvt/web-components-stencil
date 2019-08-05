import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @Prop({ reflectToAttr: true }) title: string;
  @Prop({ reflectToAttr: true, mutable: true }) open: boolean;

  onCloseDrawer = () => {
    this.open = false;
  };

  render() {
    let drawerStateClass = '';

    if (this.open) {
      drawerStateClass = 'side-drawer--open';
    }

    return (
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
          <button class="tabs__nav-button--active tabs__nav-button">Navigation</button>
          <button class="tabs__nav-button">Content</button>
        </section>
        <main>
          <slot />
        </main>
      </aside>
    );
  }
}
