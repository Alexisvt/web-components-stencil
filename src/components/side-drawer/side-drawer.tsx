import { h, Component } from '@stencil/core';

@Component({
  tag: 'side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  render() {
    return (
      <aside class="side-drawer">
        <h1>The side drawer</h1>
      </aside>
    );
  }
}
