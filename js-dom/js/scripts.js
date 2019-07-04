(function(){

    var carImages = document.querySelector('.carimages');

    carImages.addEventListener('click', function(e){
        if(e.target.tagName === 'IMG'){

            var overlay = document.createElement('div');
            overlay.id = 'overlay';
            // setting some styles
            overlay.style.position = 'absolute';
            overlay.style.top = 0;
            overlay.style.background = 'rgba(0,0,0,0.7)';
            overlay.style.cursor = 'pointer';
            
            // setting some sizes
            overlay.style.width = window.innerWidth + "px";
            overlay.style.height = window.innerHeight + "px";

            // append the overlay to the body

            document.body.appendChild(overlay);


            // get image source
            var imageSource = e.target.src;

            // create the image
            var popUpImage = document.createElement('img');
            popUpImage.id = 'popImage';
            popUpImage.src = imageSource;

            // style the image
            popUpImage.style.display = 'block';
            popUpImage.style.width = '50%';
            popUpImage.style.margin = '0 auto';
            popUpImage.style.marginTop = '10%';

            // append the image to the overlay
            overlay.appendChild(popUpImage);

            popUpImage.addEventListener('click', function(){
                if(overlay){
                    overlay.parentElement.removeChild(overlay);
                }
            });

            // set overlay to follow window scroll

            window.addEventListener('scroll', function(){
                if(overlay){
                    overlay.style.top = window.pageYOffset + "px";
                    overlay.style.left = window.pageXOffset + "px";
                }
            });

            // set overlay to resize with window

            window.addEventListener('resize', function(){
                overlay.style.width = window.innerWidth + "px";
                overlay.style.height = window.innerHeight + "px";
                overlay.style.top = window.pageYOffset + "px";
                overlay.style.left = window.pageXOffset + "px";
            });

        } // check if the image is being clicked
        

    }); // Event listener for the div with class of carimages

}()); // load the document first