// fetching data

const dataReciever = document.querySelector("#data");
const button = document.querySelector("#btn");
const removeButton = document.querySelector("#btn-remove");

async function fetchingData(){
  const url = "https://jsonplaceholder.typicode.com/posts";
  const pendingData = await fetch(url);
  const data = await pendingData.json();
  // calling the push function for getting datum 
  dataPush(data);
}

function dataPush(data){  
  // accessing and adding data in data div using foreach method
  data.forEach(user => {
    const p = document.createElement("p");
    p.className = "para";
    p.innerHTML = `${JSON.stringify(user.id)}. User Title: ${JSON.stringify(user.title)}`;
    dataReciever.appendChild(p);
  });
}

// creating the event listener for the fetch button
button.addEventListener("click", fetchingData);

// removing data when remove button clicked
removeButton.addEventListener("click",()=>{
  const para = document.querySelectorAll(".para");
  para.forEach(item => item.remove());
});