



import { Component } from "react";
import axios from "axios";
import CardCreation from "./Components/CardCreation";


class App extends Component{
  state={
    products:[],
    categories:[]
  }

  componentDidMount(){
    this.fetchCategories();
    this.fetchProducts();
  }

  fetchCategories=async()=>{
    const categories = await axios("https://fakestoreapi.com/products/categories");
    // console.log(categories);
    this.setState({categories:categories.data});
  }
  fetchProducts=async()=>{
    const products   = await axios("https://fakestoreapi.com/products");
    // console.log(products);
    this.setState({products:products.data});
  }
  clickHandler = (e) =>{
    // console.log("Button clicked");
    // console.log(e.target.innerText);
    if(e.target.innerText==="ALL"){
      console.log("ALL");
      this.fetchProducts();
    }
    else
    this.fetchProductsByCategory(e.target.innerText); //ACtually this should be done in componentdidmount
  }
  fetchProductsByCategory=async(value)=>{
    const products = await axios(https://fakestoreapi.com/products/category/${value})
    this.setState({
      products:products.data
    })
  }
  render(){
    return(
        <>
        <h1>select the Categories</h1>
        {
          this.state.categories.map((each,index)=>{
            return(
              <button onClick={this.clickHandler} key={index} class="bg-red-500 hover:bg-red-700 text-green font-bold py-2 px-4 rounded">
                {each}
              </button>
            )
          })
        }
        <button onClick={this.clickHandler}  class="bg-red-500 hover:bg-red-700 text-green font-bold py-2 px-4 rounded">
                ALL
              </button>
        <h3>DATA THAT IS FETCHED FROM PRODUCTS</h3>
        {
          this.state.products.map((each,index)=>{
            return(
              <CardCreation key={index} title={each.title} designation={each.price} />
            )
          })
        }
        </>
    )
  }
}
export default App;









































































