- HTML: 
-- Semantic HTML uses tags that convey meaning about the content, not just how it looks.
-- important for sreen readers and other assistive tech.
-- Key Semantic Elements:
 -- <header> introductory content or navigation-- help screen reader skip to main header.
 -- <nav> navigation links -- allows screen readers to jump to menus.
 -- <main> main content -- skip reprtitive content (like nav)
 -- <section> thematic grouping -- screen readers announce sections.
 -- <article> standalone content -- helps with reading order.
 -- <aside> side content -- can be skipped if not primary.
 -- <footer> footer content --screen readers can identify site end.
 -- <h1> - <h6> headings -- must be hierarchical for logical navigation.
 -- <button> interactive button -- should not use <div> for click-only elements.
 -- <label> labels for form elements -- associates text with inputs for screen readers.
 -- <alt> for <img> -- describes images for non-visual users.
- Always use headings in order.
- Use <label> or aria-label for inputs
- Aovid <div> and <span> for interactive elements unless ARIA roles are added.

- CSS: for layout, colors, and visibility.
-- Layout: 1. use css grid or flexbox to structure pages semantically. 2. aovid relying on visual order only(use proper HTML order)
-- Colors:1. ensure contrast ratio >= 4.5:1 for normal text. 2. dont rely on color alone to convey information(use icon or text)
-- visibility: 1. none or bisibility: hidden carefully. 2. display: none hides content from screen readers. 3. visibility: hidden hides visually but still can be read by some screen readers. 4. aria-hidden="true" can hide elements from assistive tech explicitly. 
-- Focus: make sure interactive elements can be reached with keyboard only(tabindex,:focus styles)

-- use rem/em instead of px for font sizes.
-- avoid animations that flash rapidly(risk of seizures)
-- test your site with high contrast mode and keyboard navigation.

- DOM Manipulation: DOM(Document Object Model) represents the HTML page as a tree of nodes.
  -- JS can add, remove, or update elements dunamically.
  -- common functions: 1. document.createElement() - add new elements -- ensure new content is focusable if interactive. 2. element.innerHTML()-replace HTML -- be careful:may remove screen reader context. 3. element.insertAdjacentHTML() - insert HTML -- safer than innerHTML in some cases. 4. element.setAttribute() - add ARIA roles or labels -- critical for accessibility.
  -- when adding/removing content dynamiclly: 1. use aria-live regions for sreen reader to announce changes. 2. focus should move to new content if relevant(ex: modal dialog). 3. avoid content updates that are invisible to assistive tech. 4. test with screen readers.

  - CODE:
  - <main>
  <h1>Park Attractions</h1>
  <section aria-live="polite"> // ensures screen readers announce new attractions.
    <button id="loadMore">Load More Attractions</button> // works with keyboard users.
    <ul id="attractionsList">
      <li><span class="attraction-name">Old Faithful</span></li>
    </ul>
  </section>
</main>

<script>
  const list = document.getElementById('attractionsList');
  const btn = document.getElementById('loadMore');

    // When the user clicks this button, do something.
  btn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerHTML = '<span class="attraction-name">Grand Prismatic Spring</span>';
    list.appendChild(li);
  });
</script>