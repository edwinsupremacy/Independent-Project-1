function scrolling() {
    let button = document.getElementById('button');
    let cardsSection = document.querySelector('.explore');
    cardsSection.scrollIntoView({ behavior: 'smooth' })
}
button.addEventListener('click', scrolling)



const listItems = document.getElementById("pages");
const artworkButton = document.getElementById("art");

artworkButton.addEventListener("click", () => {
    fetch("http://localhost:3000/artworks")
        .then(response => response.json())
        .then(data => {
            listItems.innerHTML = '';

            data.forEach(artwork => {
                const artworkItem = document.createElement("div");
                artworkItem.classList.add("artwork");

                artworkItem.innerHTML = `
                <img src="${artwork.image}" />
                <p class="title">Name: ${artwork.title}</p>
                <p class="price">Price: ${artwork.price}</p>
                <p class="description">${artwork.description}</p>
                <button class="butn">Buy</button>
            `;
            
            const button = artworkItem.querySelector(".butn");
            button.addEventListener('click', () => {
                button.textContent = "Item order placed";

                let button2 = document.getElementById('art');
                 button2.addEventListener('click',()=> {
                    let cardsSection = artworkItem.querySelector('price[0]');
                    cardsSection.scrollIntoView({ behavior: 'smooth' })
                }
               );
            });
            
listItems.appendChild(artworkItem);
                });

                
            });
        })
        
        
     ;

        const listItems2 = document.getElementById("pages");
        const artworkButton2 = document.getElementById("cars");
        
        artworkButton2.addEventListener("click", () => {
            fetch("http://localhost:3000/cars")
                .then(response => response.json())
                .then(data => {
                    listItems2.innerHTML = '';
        
                    data.forEach(cars => {
                        const item = document.createElement("div");
                        item.classList.add("artwork");
        
                        item.innerHTML = `
                            <img src="${cars.image}"/>
                            <p class="title">Name: ${cars.make}</p>
                            <p class="price">price: ${cars.price}</p>
                            <p class="description"> ${cars.description}</p>
                            <button class="butn">Buy</button>
                        `;
                        const button = item.querySelector(".butn");
                                button.addEventListener('click', () => {
                                    button.textContent = "Item order placed";
                                });
        
                        listItems2.appendChild(item);
                    });
                })
                
                });

                const listItems3 = document.getElementById("pages");
        const artworkButton3 = document.getElementById("jewelry");
        
        artworkButton3.addEventListener("click", () => {
            fetch("http://localhost:3000/jewelry")
                .then(response => response.json())
                .then(data => {
                    listItems3.innerHTML = '';
        
                    data.forEach(jewelry => {
                        const item = document.createElement("div");
                        item.classList.add("artwork");
        
                        item.innerHTML = `
                            <img src="${jewelry.image}"/>
                            <p class="title">Name: ${jewelry.name}</p>
                            <p class="price">price: ${jewelry.price}</p>
                            <p class="description"> ${jewelry.description}</p>
                            <button class="butn">Buy</button>
                        `;
                        const button = item.querySelector(".butn");
                        button.addEventListener('click', () => {
                            button.textContent = "Item order placed";
                        });
                        listItems2.appendChild(item);
                    });
                })
                
                });

                const listItems4 = document.getElementById("pages");
                const artworkButton4 = document.getElementById("watches");
                
                artworkButton4.addEventListener("click", () => {
                    fetch("http://localhost:3000/watches")
                        .then(response => response.json())
                        .then(data => {
                            listItems4.innerHTML = '';
                
                            data.forEach(watches => {
                                const item = document.createElement("div");
                                item.classList.add("artwork");
                
                                item.innerHTML = `
                                    <img src="${watches.image}"/>
                                    <p class="title">Name: ${watches.name}</p>
                                    <p class="price">price: ${watches.price}</p>
                                    <p class="description"> ${watches.description}</p>
                                    <button class="butn">Buy</button>
                                `;
                                const button = item.querySelector(".butn");
                                button.addEventListener('click', () => {
                                    button.textContent = "Item order placed";
                                });
                                listItems4.appendChild(item);
                            });
                        })
                        
                        });