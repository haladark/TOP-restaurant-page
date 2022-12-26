const menuLoad = () => {

  const main = document.createElement("main");
  main.classList.add('menu');
  main.innerHTML = 
    ` 
    <div class = container>
    <div class="card">
      <img src="./images/card1.jpg" alt="">
      <div class="item">
        <div class="text"> Broccoli Cheddar Soup</div>
        <div class="price">$12</div>
      </div>
    </div>

    <div class="card">
      <img src="./images/card2.jpg" alt="">
      <div class="item">
        <div class="text">Orange Chicken and Rice</div>
        <div class="price">$18</div>
      </div>
    </div>

    <div class="card">
      <img src="./images/card3.jpg" alt="">
      <div class="item">
        <div class="text">Saucy Thai Chicken Pizzas</div>
        <div class="price">$18</div>
      </div>
    </div>

    <div class="card">
      <img src="./images/card4.jpg" alt="">
      <div class="item">
        <div class="text">Garlic Shrimp Scampi</div>
        <div class="price">$18</div>
      </div>
    </div>

    <div class="card">
      <img src="./images/card5.jpg" alt="">
      <div class="item">
        <div class="text">Butterburger</div>
        <div class="price">$16</div>
      </div>
    </div>

    <div class="card">
      <img src="./images/card6.jpg" alt="">
      <div class="item">
        <div class="text">Roast Beef</div>
        <div class="price">$22</div>
      </div>
    </div>

    <div class="card">
      <img src="./images/card7.jpg" alt="">
      <div class="item">
        <div class="text">Red Velvet Cheesecake</div>
        <div class="price">$26</div>
      </div>
    </div>

    <div class="card">
      <img src="./images/card8.jpg" alt="">
      <div class="item">
        <div class="text">Chocolate Pecan Skillet Cookie</div>
        <div class="price">$28</div>
      </div>
    </div>
    </div>

    <footer class="menuFooter">
    Created by Halla Idris
    </footer>
      `;

    content.append(main);
};

export {menuLoad};