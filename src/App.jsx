import { useState,useEffect } from 'react'
import Card from './components/Card';
function App() {

  const [searchText, setSearchText] = useState("");
  const [product,setProduct]=useState([]);
  const submitHandle=(e)=>{
    e.preventDefault();
    const filterData=product.filter((item)=>(item.name.toLowerCase().includes(searchText.toLowerCase())))
    // console.log(filterData);
    setProduct(filterData)
  }
  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers`)
      .then((res) => (res = res.json()))
      .then((data) => {
        // console.log(data);
        setProduct(data);
      })
      .catch((error) => alert("Internet Error"));
  }, [searchText]);
  return (
    <>
    <nav className='w-full h-16 bg-black text-white flex justify-around'>
      <div className="log w-1/2 flex items-center">
        <h2>Logo</h2>
        </div>
      <ul className='flex w-1/5 max-md:w-1/2 max-md:p-4 justify-between items-center'>
        <li>Home</li>
        <li>About</li>
        <li><a href="https://github.com/Amanroy7632" target='_blanck'>Github</a></li>
      </ul>
      </nav>
    <div className='w-full'>
      <div className='bg-gray-400 flex justify-center border p-4'>
        <form onSubmit={submitHandle} className='flex'>
        <input type="text" className=' text-2xl w-full border-none outline-green-300' placeholder='Search items...' value={searchText} onChange={(e)=>(setSearchText(e.target.value))}  />
        <button className=' full bg-transparent text-white text-2xl border rounded-r-xl pl-1'>🔍</button>
        </form>
      </div>
       <h1 className=' text-center p-3 text-2xl bg-black text-white'>Products</h1>
    <div className=' flex justify-around flex-wrap'>
      
    {
      product.map((product)=>{
        return <Card key={product.id} product={product}/>
      })
    } 
    </div>
    {product.length===0?<div><h1 className=' text-2xl text-center bg-slate-300'>Result not Found ..</h1> </div>:""}


    
    </div>
    </>
  )
}

export default App
