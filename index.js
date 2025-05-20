    let arr = [10, 2, 4, 3, 5, 6,1,9];
    let button = document.getElementById("btn");
    let resultDiv = document.getElementById("result");

    button.addEventListener('click', () => {
      resultDiv.innerHTML = "";
      let randomIndex = Math.floor(Math.random() * arr.length);

      for (let i = 0; i < randomIndex; i++) {
        let tag = document.createElement("h3");
        tag.textContent = 'My name is Somesh' 
        resultDiv.appendChild(tag);
      }
    });