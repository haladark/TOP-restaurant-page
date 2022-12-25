const headerLoad = (() => {

  const header = document.createElement("header");
  const nav = document.createElement("nav");

  header.classList.add('title');
  nav.classList.add('nav');

  header.innerHTML = `<span>Almanal Delicacies</span>`;
  nav.innerHTML =
    `<ul class="list">
      <li id="home-btn">Home</li>
      <li id="menu-btn">Menu</li>
      <li id="contact-btn">Contact</li>
      </ul>`;

  content.append(header,nav);

})();

export {headerLoad};