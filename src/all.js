// For All html file


        // ================ Menubar
        // ================ Menubar
        let menuBar = document.querySelector('#menuBar');
        let mobileMenu = document.querySelector('#mobileMenu');
        let closeMenu = document.querySelector('#closeMenu');

        menuBar.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden')
        })

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.add('hidden')
        })

        // ================ Catagory
        // ================ Catagory
        let catagoryBar = document.querySelector('#catagoryBar');
        let mobilMenu = document.querySelector('#mobilMenu');
        let stopMenu = document.querySelector('#stopMenu');

        catagoryBar.addEventListener('click', () => {
            mobilMenu.classList.remove('hidden')
        })

        stopMenu.addEventListener('click', () => {
            mobilMenu.classList.add('hidden')
        })


        // ================ Search
        // ================ Search
        let searchBar = document.querySelector('#searchBar');
        let searchMenu = document.querySelector('#searchMenu');
        let stopManu = document.querySelector('#stopManu');

        searchBar.addEventListener('click', () => {
            searchMenu.classList.remove('hidden')
        })

        stopManu.addEventListener('click', () => {
            searchMenu.classList.add('hidden')
        })


        // ================ Wish Notification Remove
        // ================ Wish Notification Remove

        //its work well But no need
        
        // let wishBar = document.querySelector('#wishBar');

        // wishBar.addEventListener('click', () => {
        //     document.querySelector('#wishBar #wish-count').style.display = 'none';
        // })

  