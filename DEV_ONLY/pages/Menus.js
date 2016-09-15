import React, {
  Component
} from 'react';

import CodeBlock from '../components/CodeBlock';

const MENU_ITEMS = [
  'Item 1 (active)',
  'Item 2',
  'Item 3 (disabled)',
  'Item 4'
];

const STYLES = {
  codeBlock: {
    marginTop: 15
  }
};

const getMenuItemsWithSubmenu = (isSubmenuOpen, onClickToggle, type) => {
  return MENU_ITEMS.map((item, itemIndex) => {
    const isActive = itemIndex === 0;
    const isItemWithSubMenu = itemIndex === 3;

    return (
      <li
        className={`menu-item${isActive ? ' active' : ''}`}
        disabled={itemIndex === 2}
        key={`menu-item-${itemIndex}`}
      >
        <a
          className="menu-item-link"
          data-type={type}
          onClick={onClickToggle}
        >
          {item} {isItemWithSubMenu && (
          <span>
              &#9660;
            </span>
        )}
        </a>

        {isItemWithSubMenu && (
          <ul className={`menu${isSubmenuOpen ? ' active' : ''}`}>
            {getMenuItems()}
          </ul>
        )}
      </li>
    );
  });
};

const getMenuItems = (firstItemClass) => {
  return MENU_ITEMS.map((item, itemIndex) => {
    const isActive = itemIndex === 0;
    const extraClass = isActive && firstItemClass ? ` ${firstItemClass}` : '';

    return (
      <li
        className={`menu-item${isActive ? ' active' : ''}${extraClass}`}
        disabled={itemIndex === 2}
        key={`menu-item-${itemIndex}`}
      >
        <a className="menu-item-link">
          {item}
        </a>
      </li>
    );
  });
};

const getGroupedMenu = () => {
  const menuItems = getMenuItems();
  const halfwayPoint = Math.floor(menuItems.length / 2);

  let leftItems = [],
      rightItems = [];

  menuItems.forEach((menuItem, menuItemIndex) => {
    if (menuItemIndex < halfwayPoint) {
      leftItems.push(menuItem);
    } else {
      rightItems.push(menuItem);
    }
  });

  return (
    <ul className="menu">
      <li className="menu-group left">
        <ul className="menu">
          {leftItems}
        </ul>
      </li>

      <li className="menu-group right">
        <ul className="menu">
          {rightItems}
        </ul>
      </li>
    </ul>
  );
};

class Menus extends Component {
  state = {
    horizontal: false,
    vertical: false
  };

  onClickSubMenuOpen = (e) => {
    const type = e.currentTarget.getAttribute('data-type');
    
    this.setState({
      [type]: !this.state[type]
    });
  };

  render() {
    const {
      horizontal,
      vertical
    } = this.state;

    return (
      <section>
        <h4>
          Menu
        </h4>

        <p>
          The standard menu is a horizontal list of items (usually links) that are left-aligned. To apply the styles, add the "menu" class to the container, the "menu-item" class to each item in the list, and the "menu-item-link" class to each link in the item.
        </p>

        <ul className="menu">
          {getMenuItems()}
        </ul>

        <CodeBlock style={STYLES.codeBlock}>{`
<ul class="menu">
  <li class="menu-item active">
    Item 1 (active)
  </li>

  <li class="menu-item">
    Item 2
  </li>

  <li class="menu-item disabled">
    Item 3 (disabled)
  </li>

  <li class="menu-item">
    Item 4
  </li>
</ul>
`}</CodeBlock>

        <h4>
          Centered menu
        </h4>

        <p>
          If you apply the "centered" class to the container as well, it will align the items in the container to the center.
        </p>

        <ul className="menu centered">
          {getMenuItems()}
        </ul>

        <CodeBlock style={STYLES.codeBlock}>{`
<ul class="menu centered">
  <li class="menu-item active">
    Item 1 (active)
  </li>

  <li class="menu-item">
    Item 2
  </li>

  <li class="menu-item disabled">
    Item 3 (disabled)
  </li>

  <li class="menu-item">
    Item 4
  </li>
</ul>
`}</CodeBlock>

        <h4>
          Right menu
        </h4>

        <p>
          If you apply the "right" class to the container, it will align the items in the container to the right.
        </p>

        <ul className="menu right">
          {getMenuItems()}
        </ul>

        <CodeBlock style={STYLES.codeBlock}>{`
<ul class="menu right">
  <li class="menu-item active">
    Item 1 (active)
  </li>

  <li class="menu-item">
    Item 2
  </li>

  <li class="menu-item disabled">
    Item 3 (disabled)
  </li>

  <li class="menu-item">
    Item 4
  </li>
</ul>
`}</CodeBlock>

        <h4>
          Alignment of individual items
        </h4>

        <p>
          You can also apply the "left", "centered", and "right" classes to individual items, and it will align that item without disturbing the rest of the items in the list.
        </p>

        <ul className="menu">
          {getMenuItems('left')}
        </ul>

        <ul className="menu">
          {getMenuItems('centered')}
        </ul>

        <CodeBlock style={STYLES.codeBlock}>{`
<ul class="menu">
  <li class="menu-item active left">
    Item 1 (active)
  </li>

  <li class="menu-item">
    Item 2
  </li>

  <li class="menu-item centered disabled">
    Item 3 (disabled)
  </li>

  <li class="menu-item">
    Item 4
  </li>
</ul>
`}</CodeBlock>

        <h4>
          Justified menu
        </h4>

        <p>
          If you apply the "justified" class to the container as well, it will cause the items to grow to fill the width of the container.
        </p>

        <ul className="menu justified">
          {getMenuItems()}
        </ul>

        <CodeBlock style={STYLES.codeBlock}>{`
<ul class="menu justified">
  <li class="menu-item active">
    Item 1 (active)
  </li>

  <li class="menu-item">
    Item 2
  </li>

  <li class="menu-item disabled">
    Item 3 (disabled)
  </li>

  <li class="menu-item">
    Item 4
  </li>
</ul>
`}</CodeBlock>

        <h4>
          Menu groups
        </h4>

        <p>
          You can also group menu items by sections that can have their own alignment:
        </p>

        {getGroupedMenu()}

        <CodeBlock style={STYLES.codeBlock}>{`
<ul class="menu">
  <li class="menu-group left">
    <ul class="menu">
      <li>
         Left menu item 1
      </li>
      <li>
         Left menu item 2
      </li>
    </ul>
  </li>
  <li class="menu-group center">
    <ul class="menu">
      <li>
         Center menu item 1
      </li>
      <li>
         Center menu item 2
      </li>
      <li>
         Center menu item 3
      </li>
    </ul>
  </li>
  <li class="menu-group right">
    <ul class="menu">
      <li>
         Right menu item 1
      </li>
      <li>
         Right menu item 2
      </li>
    </ul>
  </li>
</ul>
`}</CodeBlock>

        <h4>
          Menu with submenu in items
        </h4>

        <p>
          Submenus are supported, and it is as simple as adding another menu group of elements inside the menu-item:
        </p>

        <ul className="menu">
          {getMenuItemsWithSubmenu(horizontal, this.onClickSubMenuOpen, 'horizontal')}
        </ul>

        <p>
          Submenus are hidden by default, and visible when the "active" class is added to the nested "menu" element. Please note that the handling of the opening / closing is handled by JS and therefore outside the scope of bolster.
        </p>

        <CodeBlock style={STYLES.codeBlock}>{`
<ul class="menu">
  <li class="menu-item active">
    Item 1 (active)
  </li>

  <li class="menu-item">
    Item 2
  </li>

  <li class="menu-item disabled">
    Item 3 (disabled)
  </li>

  <li class="menu-item">
    Item 4

    <ul class="menu active">
      <li class="menu-item">
        Sub-item 1
      </li>
      <li class="menu-item">
        Sub-item 2
      </li>
    </ul>
  </li>
</ul>
`}</CodeBlock>

        <h4>
          Vertical
        </h4>

        <p>
          Vertical menus are also supported, however they do not inherit the full width of the container as the horizontal menus do:
        </p>

        <ul className="menu vertical">
          {getMenuItems()}
        </ul>

        <CodeBlock style={STYLES.codeBlock}>{`
<ul class="menu vertical">
  <li class="menu-item active">
    Item 1 (active)
  </li>

  <li class="menu-item">
    Item 2
  </li>

  <li class="menu-item disabled">
    Item 3 (disabled)
  </li>

  <li class="menu-item">
    Item 4
  </li>
</ul>
`}</CodeBlock>

        <h4>
          Vertical menu with submenu in items
        </h4>

        <p>
          Submenus are also supported in vertical menus, however they will appear to the right of the item rather than below it.
        </p>

        <ul className="menu vertical">
          {getMenuItemsWithSubmenu(vertical, this.onClickSubMenuOpen, 'vertical')}
        </ul>

        <CodeBlock style={STYLES.codeBlock}>{`
<ul class="menu vertical">
  <li class="menu-item active">
    Item 1 (active)
  </li>

  <li class="menu-item">
    Item 2
  </li>

  <li class="menu-item disabled">
    Item 3 (disabled)
  </li>

  <li class="menu-item">
    Item 4

    <ul class="menu active">
      <li class="menu-item">
        Sub-item 1
      </li>
      <li class="menu-item">
        Sub-item 2
      </li>
    </ul>
  </li>
</ul>
`}</CodeBlock>
      </section>
    );
  }
}

export default Menus;
