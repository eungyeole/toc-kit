# toc-kit

## Overview
The **toc-kit** is a lightweight and customizable solution for generating dynamic, nested, and responsive table of contents (ToC) components in React applications. It simplifies the creation of navigable outlines for your content, such as documentation, blogs, or long-form articles.

## Features
- **Dynamic Content Parsing**: Automatically generates a ToC based on content headings (e.g., `<h1>`, `<h2>`, `<h3>`).
- **Customizable Levels**: Specify which heading levels (`h1`-`h6`) to include in the ToC.
- **Smooth Scrolling**: Supports smooth scrolling for seamless navigation between sections.
- **Anchor Highlighting**: Highlights the currently active section based on the scroll position.
- **Styling Options**: Easily customizable with CSS or custom class names.
- **Accessibility**: Ensures accessible navigation for all users.

## Installation
Install the library using npm or yarn:

```bash
npm install toc-kit
```

or

```bash
yarn add toc-kit
```

## Usage
Here is a quick example of how to use the library in your React project:

### Basic Usage

```jsx
import React from 'react';
import TOC from 'toc-kit';

const MyPage = () => {
  const contentRef = React.useRef(null);

  return (
    <div style={{ display: 'flex' }}>
      {/* Table of Contents */}
      <aside style={{ width: '20%', padding: '1rem' }}>
        <TOC contentRef={contentRef} />
      </aside>

      {/* Main Content */}
      <main ref={contentRef} style={{ width: '80%', padding: '1rem' }}>
        <h1>Welcome to My Page</h1>
        <h2>Introduction</h2>
        <p>Here is the introduction.</p>
        <h2>Main Content</h2>
        <h3>Subsection 1</h3>
        <p>Details about subsection 1.</p>
        <h3>Subsection 2</h3>
        <p>Details about subsection 2.</p>
      </main>
    </div>
  );
};

export default MyPage;
```

### Custom Options

You can customize the behavior and appearance of the ToC by passing props:

```jsx
<TOC
  contentRef={contentRef}
  headingLevels={[2, 3]} // Include only <h2> and <h3> headings
  className="custom-toc" // Add custom CSS class
  smoothScroll={true} // Enable smooth scrolling
  activeClass="active-link" // Add active class to current section link
/>
```

### Props
| Prop            | Type          | Default       | Description                                   |
|-----------------|---------------|---------------|-----------------------------------------------|
| `contentRef`    | `React.Ref`   | `null`        | Reference to the content element.            |
| `headingLevels` | `number[]`    | `[1, 2, 3, 4, 5, 6]` | Specify heading levels to include in the ToC. |
| `className`     | `string`      | `''`          | Custom CSS class for the ToC wrapper.        |
| `smoothScroll`  | `boolean`     | `false`       | Enable smooth scrolling for ToC links.       |
| `activeClass`   | `string`      | `''`          | CSS class for the active section link.       |

## Styling
You can style the ToC using your preferred method, such as CSS or styled-components. Example:

```css
.custom-toc {
  list-style-type: none;
  padding: 0;
}

.custom-toc li {
  margin: 0.5rem 0;
}

.active-link {
  font-weight: bold;
  color: #007bff;
}
```

## License
This library is open-source and available under the MIT License.

## Contributions
Contributions are welcome! Please feel free to submit issues or pull requests on our [GitHub repository](https://github.com/your-repo/toc-kit).

---

With this library, you can effortlessly integrate a dynamic and user-friendly Table of Contents into your React application. Happy coding!