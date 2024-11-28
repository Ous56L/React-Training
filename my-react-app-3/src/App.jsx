import List from "./List.jsx";

function App(){

  const fruits = [{id: 1, name:"apple", calories: 52},
                  {id: 2, name:"banana", calories: 89}, 
                  {id: 3, name:"orange", calories: 47}, 
                  {id: 4, name:"watermelon", calories: 80}, 
                  {id: 5, name:"pineapple", calories: 50}, 
                   {id: 6, name:"mango", calories: 60}];


  const vegetables = [{id: 6, name:"potatos", calories: 110},
                    {id: 7, name:"carrot", calories: 15}, 
                    {id: 8, name:"corn", calories: 25}, 
                    {id: 9, name:"tomato", calories: 63}, 
                    {id: 10, name:"cucumber", calories: 95}, 
                     {id: 11, name:"onion", calories: 37}];


  return(
    <>
    {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
  );
}

export default App
