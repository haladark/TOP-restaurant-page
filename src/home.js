const homeLoad = () => {

  const main = document.createElement("main");

  main.classList.add('home');


  main.innerHTML = 
    ` <div class="banner">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus architecto veniam cum aperiam facere laudantium amet incidunt, hic doloremque expedita, neque impedit. Magni explicabo, in est ratione ipsa, iusto fugiat, delectus quos fuga tempore itaque.</div>
    <footer class="homeFooter">
        Created by Halla Idris
    </footer>`;


    content.append(main);

};

export {homeLoad};