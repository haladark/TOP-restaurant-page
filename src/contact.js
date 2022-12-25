const contactLoad = () => {

  const main = document.createElement("main");


  main.classList.add('contact');
 

  main.innerHTML = 
    ` 
      <p>Contact us</p>
      <div class="phone">
        Phone: (xxx)xxx-xxxx
      </div>

      
      <form action="#">
        <div class = "message">
          <div>
            <label for="msg">Write us a message:</label>
            <textarea id="msg" name="msg" rows="5" cols="50" maxlength="400" placeholder="Maximum 400 characters"></textarea>
          </div>
          <div class="email">
            <label for="email">Your e-mail:</label>
            <input 
            type="email" id="email" name="email" required
            pattern="^\S+@\S+\.\S+$">
          </div>
        </div>
        <input type="submit" id="submit-btn" value="Send">
      
        </form>

    <footer class="contactFooter">
        Created by Halla Idris
    </footer>   
      `;

    content.append(main);

};

export {contactLoad};