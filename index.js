
const freelanceAvgPriceContainer = document.querySelector('#freelanceAvgPrice_Container')
const freelanceContainer = document.querySelector('#freelance_container')
// const addNew = setInterval(addingMoreFreelancers, 1000)
// createFreelancers();

const freelanceForum = [
  
        {
            name: "Alice",
            occupation: "Writer",
            price: 30,
        },
        {
            name: "Bob",
            occupation: "Teacher",
            price: 50,
        },
        {
            name: "Carol",
            occupation: "Programmer",
            price: 70,
        },
     
];



//  function AvgPrice(averagePrice){
    //   const freelanceAvg = document.createElement("div");
    //   freelanceAvg.classList.add('freelancer_avg');
    
    //   const freelanceAvgPrice = document.createElement('span');
    //   freelanceAvgPrice.textContent = averagePrice;
    
    //   freelanceAvg.appendChild(freelanceAvgPrice);
    
    //   return freelanceAvg;
    //  }
    
    
    function createFreelancers(states){
        // creating a div and the variable holding it is called stockticker
        const freelancerbox = document.createElement('div');
        //he created a class in css file gave it styling and this 
        // classList is used to add that class to the html file 
        // and its in the div created above
        freelancerbox.classList.add('freelancer_box');
        
        const freelanceName = document.createElement('span');
        freelanceName.textContent = states.name;
        const freelanceOccupation = document.createElement('span');
        freelanceOccupation.textContent = states.occupation;
        const freelancePrice = document.createElement('span');
        freelancePrice.textContent = states.price;
        
        
        freelancerbox.appendChild(freelanceName);
        freelancerbox.appendChild(freelanceOccupation);
        freelancerbox.appendChild(freelancePrice);
        return freelancerbox;
    }
    freelanceAvgPriceContainer.replaceChildren(`${displayAveragePrice()}`)
    freelanceContainer.append(...createFreelance(freelanceForum));

    function createFreelance(allFreelance) {
       let tickers = [];
       for(let i = 0; i < allFreelance.length; ++i){
           const currentFreelance = allFreelance[i];
           tickers.push(createFreelancers(currentFreelance));
       }
    
       return tickers;
    }
       function addFreelancer(states){
        freelanceForum.push(states);
       }
        const addedFreelancersNameAtRandom = ["Jacob", "Jack", "Jill"];
        const addedFreelancersOccupationAtRandom = ["Singer", "Chef", "Plumber"];
        const addedFreelancersPayAtRandom = [20,60,70];
        function displayAveragePrice(){
           let total = 0;
        freelanceForum.forEach((freelance) => {
           total += freelance.price
        })
        let averagePrice = total/freelanceForum.length
        return averagePrice.toFixed(2)
        }
        
    function addingMoreFreelancers(){
    
        const randName = addedFreelancersNameAtRandom[Math.floor(Math.random() * addedFreelancersNameAtRandom.length)];
        const randOccupation = addedFreelancersOccupationAtRandom[Math.floor(Math.random() * addedFreelancersOccupationAtRandom.length)];
        const randPrice = [Math.floor(Math.random() * addedFreelancersPayAtRandom.length)];
    
      
       const freelanceForum = {
        name: randName,
        occupation: randOccupation,
        price: randPrice
       };

       return freelanceForum;

}

let count = 0;
let time = setInterval(function(){
    if (count> 100){
        clearInterval(time);
    }
    const newFreelancer = addingMoreFreelancers();
       addFreelancer(newFreelancer);
    
    createFreelancers();

    ++count;
}, 5000);
     
    
    


