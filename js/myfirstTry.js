/**
 * local reviews data
 * 
 */

 const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: 
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
          "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: 
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: 
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "
    }

];

window.addEventListener('DOMContentLoaded', function() {

  const gallary = document.querySelector(' .glly');
  const btn = document.querySelector('button');
  const btnsArr = document.querySelectorAll(' .btns-l');
  const crtDiv = document.createElement('div');

  let randNum = Math.floor(Math.random() * reviews.length);
  //let itRand = reviews[randNum];
  //console.log(reviews[reviews.length-1]);

  

  btnsArr.forEach(function(btn) {

    // console.log(btn);
    btn.addEventListener('click', function() {

      if (btn.classList.contains('lft')) { // determine the arrow direction
        
        genItem();

        

        if (randNum >= 0) { // reviews.length
          // decrementing the reviews
          --randNum;
        }
        
      }
      
    });

    btn.addEventListener('click', function() {

      //
      if (btn.classList.contains('rgt')) {
        //console.log(btn.classList);

        // genItem();

        

        if (randNum < reviews[reviews.length-1]) {

          ++randNum;
          genItem();
        }
      }
      
    });

    
    

  }); // close btnsArr

  function genItem() {

    const nwArrs = reviews[randNum];

    //console.log(randNum);

    //console.log(nwArrs);

    const wbEle = `
      <img src=${nwArrs.img} alt=${nwArrs.name} />
      <h3>${nwArrs.name}</h3>
      <span>${nwArrs.job}</span>
      <p>${nwArrs.text}</p>
    `;
  
    //console.log(wbEle);
  
    crtDiv.innerHTML = wbEle;
  
    gallary.append(crtDiv);
  
    //console.log(gallary);
  
  }

  genItem();

});

// for (let i = 0; i < reviews[reviews.length-1]; i++) {

//   genItem();

//   console.log(reviews[i]);
// }

