// import { createContext, useContext, useEffect, useReducer, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Link, Route, Routes } from 'react-router-dom'
// // import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// // import React, { useReducer, useContext, createContext } from 'react';

// const CartStateContext = createContext();
// const CartDispatchContext = createContext();

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "ADD":
//             return [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img }]
//         case "REMOVE":
//             let newArr = [...state]
//             newArr.splice(action.index, 1)
//             return newArr;
//         case "DROP":
//             let empArray = []
//             return empArray
//         case "UPDATE":
//             let arr = [...state]
//             arr.find((food, index) => {
//                 if (food.id === action.id) {
//                     console.log(food.qty, parseInt(action.qty), action.price + food.price)
//                     arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
//                 }
//                 return arr
//             })
//             return arr
//         default:
//             console.log("Error in Reducer");
//     }
// };

//  const CartProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, []);

//     return (
//         <CartDispatchContext.Provider value={dispatch}>
//             <CartStateContext.Provider value={state}>
//                 {children}
//             </CartStateContext.Provider>
//         </CartDispatchContext.Provider>
//     )
// };

//  const useCart = () => useContext(CartStateContext);
//  const useDispatchCart = () => useContext(CartDispatchContext);

// export default function App() {

//   return (
    
//     <div>
//       <Routes>
//      <Route exact path='/' element={<Home/>}></Route>
//      </Routes>
//     </div>
//   )
// }

// function Home() {
//   const [search, setsearch] = useState('');
//   const [foodCat, setfoodcat] = useState([]);
//   const [foodItems, setfooditem] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:4000/foodcatagory")
//       .then((data) => data.json())
//       .then((cat) => setfoodcat(cat));
//   });
//   useEffect(() => {
//     fetch("http://localhost:4000/fooditem")
//       .then((data) => data.json())
//       .then((item) => setfooditem(item));
//   });

 
// // console.log(foodItems);
// // console.log(foodCat);
//   return (
//     <div>
//      <div><Navbar/></div>
//      <div><Carousel search={search} setsearch={setsearch}/></div>
//      <div className='container'> {/* boootstrap is mobile first */}
//         {
//           foodCat != []
//             ? foodCat.map((data) => {
//               return (
//                 // justify-content-center
//                 <div className='row mb-3'>
//                   <div key={data._id} className='fs-3 m-3'>
//                     {data.categoryName}
//                   </div>
//                   <hr/>
//                   {foodItems!= []
//                    ? foodItems.filter(
//                     (items) => (items.categoryName === data.categoryName)  && (items.name.toLowerCase().includes(search.toLowerCase())))
//                     .map(filterItems => {
//                       return (
//                         <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
//                           {/* {console.log(filterItems.url)} */}
//                           <Card foodName={filterItems.name} 
//                           item={filterItems} 
//                           options={filterItems.options[0]} 
//                           imgsrc={filterItems.img} ></Card>
//                         </div>
//                       )
//                     }) : <div> No Such Data </div>}
//                 </div>
//               )
//             })
//             : ""}
//       </div>
     
//      <div><Footer/></div>
//     </div>
//   )
// }

// function Cart() {
//    return (
//     <div>

//       {/* {console.log(data)}
//       <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
//         <table className='table table-hover '>
//           <thead className=' text-success fs-4'>
//             <tr>
//               <th scope='col' >#</th>
//               <th scope='col' >Name</th>
//               <th scope='col' >Quantity</th>
//               <th scope='col' >Option</th>
//               <th scope='col' >Amount</th>
//               <th scope='col' ></th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((food, index) => (
//               <tr>
//                 <th scope='row' >{index + 1}</th>
//                 <td >{food.name}</td>
//                 <td>{food.qty}</td>
//                 <td>{food.size}</td>
//                 <td>{food.price}</td>
//                 <td ><button type="button" className="btn p-0"><Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
//             ))}
//           </tbody>
//         </table>
//         <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
//         <div>
//           <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
//         </div>
//       </div>
//  */}
// hi

//     </div>
//   )
// }

// function Carousel({search,setsearch}) {
//     return (
//         <div>

//             <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

//                 <div className="carousel-inner " id='carousel'>
//                     <div className=" carousel-caption  " style={{ zIndex: "9" }}>
//                         <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
//                             <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Type in..." aria-label="Search" value={search} onChange={(e) => { setsearch(e.target.value) }} />
//                             {/* <button 
//                             className="btn text-white bg-success" type="submit">Search</button> */}
//                         </div>
//                     </div>
//                     <div className="carousel-item active" >
//                         <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>


//         </div>
//     )
// }

// function Card({foodName,item,options,imgsrc}){
//    const priceOptions=Object.keys(options)
//   return(
//     <div>

//     <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//       <img src={imgsrc} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//       <div className="card-body">
//         <h5 className="card-title">{foodName}</h5>
//         <p className="card-text">This is some random text. This is description.</p>
//         <div className='container w-100 p-0' style={{ height: "38px" }}>
//           <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} >
//             {Array.from(Array(6), (e, i) => {
//               return (
//                 <option key={i + 1} value={i + 1}>{i + 1}</option>)
//             })}
//           </select>
//           <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} >
//             {priceOptions.map((i) => {
//               return <option key={i} value={i}>{i}</option>
//             })}
//           </select>
//           <div className=' d-inline ms-2 h-100 w-20 fs-5' >
//             ₹10000/-
//           </div>
//         </div>
//         <hr></hr>
//         <button className={`btn btn-success justify-center ms-2 `} >Add to Cart</button>
//         {/* <button className={`btn btn-danger justify-center ms-2 ${btnEnable ? "" : "disabled"}`} onClick={handleRemoveCart}>Remove</button> */}
//       </div>
//     </div>
//   </div>
//   )
// }

// function Navbar() {

//   return (
//     <div>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky"
//                 style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
//                 <div className="container-fluid">
//                     <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>  {/* index.css - nav-link color white */}
//                             </li>
//                             {/* {(localStorage.getItem("token")) ? */}
//                                 {/* <li className="nav-item"> */}
//                                     <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/myorder" >My Orders</Link>  {/* index.css - nav-link color white */}
//                                 {/* </li> : ""} */}
//                         </ul>
//                         {/* {(!localStorage.getItem("token")) ? */}
//                             {/* <form className="d-flex"> */}
//                                 <Link className="btn bg-white text-success mx-1 " to="/login">Login</Link>
//                                 <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
//                             {/* </form> : */}
//                             <div>
//                             <button  className="btn bg-white text-success" >mycart</button>
//                                 {/* <div className="btn bg-white text-success mx-2 " onClick={loadCart}>
//                                     <Badge color="secondary" badgeContent={items.length} >
//                                         <ShoppingCartIcon />
//                                     </Badge>
//                                     Cart
//                                 </div> */}

//                                 {/* {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""} */}

//                                 {/* <button onClick={handleLogout} className="btn bg-white text-success" >Logout</button> */}
                                
//                                 </div>
//                                 {/* } */}
//                     </div>
//                 </div>
//             </nav>
//         </div>
//   )
// }

//  function Footer() {

//   return (
//     <div><div className="container">
//     <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
//       <div className="col-md-4 d-flex align-items-center">
//         <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
//         </a>
//         <span className="text-muted">© 2022 <i>BuyFast</i>, Inc</span>
//       </div>
  
//       <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
//         <li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24"><use ></use></svg></a></li>
//         <li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24"><use ></use></svg></a></li>
//         <li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24"><use></use></svg></a></li>
//       </ul>
//     </footer>
//   </div>
//   </div>
//   )
// }


import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Badge from 'react-bootstrap/Badge'
import { createContext, useContext, useEffect, useReducer, useRef, useState } from 'react'
import Modal from './modal'
import { useFormik } from 'formik'


const useCart=()=>useContext(CartStateContext);
const useDispatchCart=()=>useContext(CartDispatchContext);


const CartStateContext=createContext();
const CartDispatchContext=createContext();

const reducer =(state,action)=>{
switch (action.type) {
  case "ADD":
    return[...state,{
      id:action.id,name:action.name,price:action.price,size:action.size,qty:action.qty,img:action.img
    }]
    case "REMOVE":
      let newArr=[...state]
      newArr.splice(action.index,1)
      return newArr;
    case "UPDATE":
      var arr=[...state]
      arr.map((food,index)=>{
        if(food.id === action.id) {
          console.log(parseInt(food.qty)+parseInt(action.qty),action.price+food.price)
          // console.log(index);
          arr[index]= { ...food, qty : parseInt(action.qty) +parseInt(food.qty) , price : action.price + food.price}
         }
          return arr
      })
      return arr
      case"DROP":
      let emparray=[]
      return emparray
  default:
  console.log("error in reducer")
}
}

const CartProvider=({children})=>{
  const[state,dispatch]=useReducer(reducer,[])
  return(
    <CartDispatchContext.Provider value={dispatch}>
          <CartStateContext.Provider value={state}>
            {children}
          </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )

}


export default function App() {

  return (
    <CartProvider>
    <div >
      <Routes>
        <Route exact path='/' element={<Proudctedroute><Home/></Proudctedroute>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signin' element={<Signin/>}></Route>
        <Route exact path='/myorder' element={<Proudctedroute><Myorder/></Proudctedroute>}></Route>
     </Routes>
    </div>
    </CartProvider>
     )
}
function Proudctedroute({children}){
  const token=localStorage.getItem('token');
  // const token=false;
  return(
   token? <section>{children}</section>:<Navigate replace to="/login"/>
  //  token? <section>{children}</section>:<h1>unautharaied</h1>
  )
}

function Home() {

  const [search,setsearch]=useState('')
  const [foodcat,setfoodcat]=useState([])
  const [fooditem,setfooditem]=useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the first URL
         await fetch('https://foodbackend.vercel.app/foodcategory')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setfoodcat(data);
        }).catch(error => {
          // Handle errors here, including "Network response was not ok"
          console.error('Error fetching datacat:', error);
        });
       
        await fetch('https://foodbackend.vercel.app/findallfood')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setfooditem(data);
        }).catch(error => {
          // Handle errors here, including "Network response was not ok"
          console.error('Error fetching datafood:', error);
        });

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
    return (
  <div >
      <div><Navbar/></div>
      <div><Crousel search={search} setsearch={setsearch}/></div>
      <div className='container'>
        {
          // foodcat !==[]
          // ?
          foodcat.map((data)=>{
            return(<div className='row mb-3'>
              <div key={data._id} className='fs-3 m-3'>{data.categoryName}</div>
              <hr/>
              {
              fooditem !==[]?
              
              fooditem.filter((item)=>(item.categoryName === data.categoryName)&&(item.name.toLowerCase().includes(search.toLowerCase()))
  )            .map(filteritems=>{
                return(
  <div key={filteritems._id} className='col-12 col-md-6 col-lg-3'style={{"marginLeft":"30px"}}>
     <Card fooditem={filteritems} options={filteritems.options[0]}/>
     </div>
              )
              })
               :<div> no dada found</div>
               }
              </div>
            
            )
          })
          // :<div>data load</div>
        }
       
      </div>
      <div><Footer/></div>
  </div>
       )
  }
function Crousel({search,setsearch}) {

  return (
    <div >
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{"objectFit":"cover !important"}}>
  <div className="carousel-inner"  id='carousel'>
    <div className="carousel-caption" style={{zIndex:"10"}} >
    <div className="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
      {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
    </div>
    </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900×760?burger" style={{"objectFit":"contain !important"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×760?food" style={{"objectFit":"contain !important"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×760?pizza" style={{"objectFit":"contain !important"}} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
     )

}


function Footer() {

  return (
    <div >
<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      </Link>
      <span className="text-muted">© 2023 BuyFast, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
    </ul>
  </footer>
    </div>
     )

}
function Card({fooditem,options}) {

 let priceoption=Object.keys(options)

 let data=useCart()

 const priceref=useRef();
  let dispatch=useDispatchCart();

 const [qty,setqty]=useState(1);
 const [size,setsize]=useState('');

 const handleaddcart= async () =>{

  let food=[]
  for(const item of data){
    if(item.id===fooditem._id){
      food=item;
      break;
    }
  }


if(food!==[]){
  if(food.size === size){
    await dispatch({type:"UPDATE",id:fooditem._id,price:finalprice,qty:qty})
    return
  }
  else if(food.size !== size){
    await dispatch({type:"ADD",id:fooditem._id,name:fooditem.name,price:finalprice,qty:qty,size:size})
    return
  }
  return
}

  await dispatch({type:"ADD",id:fooditem._id,name:fooditem.name,price:finalprice,qty:qty,size:size})
console.log(data);
 }
let finalprice=qty* parseInt(options[size]);
useEffect(()=>{
  setsize(priceref.current.value)
},[])

  return (
    <div >
      <div><div className="card mt-3" style={{"width": "18rem","maxHeight":"360px"}}>
  <img src={fooditem.img} className="card-img-top" style={{"height":"150px","objectFit":"cover"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{fooditem.name}</h5>
    {/* <p className="card-text"  style={{"height":"50px","overflow":"hidden"}}>{fooditem.discription}</p> */}
    <div className='container w-10 my-10' >
      <select className='m-2 h-100 bg-success rounded' onChange={(e)=>setqty(e.target.value)}>
        {Array.from(Array(6),(e,i)=>{
          return(
            <option key={i+1} value={i+1}>{i+1}</option>
          )
        })}
      </select>
      <select className='m-2 h-100 bg-success rounded' ref={priceref} onChange={(e)=>setsize(e.target.value)}>
        {priceoption.map((data)=>{
          return(<option key={data} value={data}>{data}</option>)
        })}
      </select>
      <div className='d-inline h-100 fs-5'>₹{finalprice}</div>
    </div>
    <hr/>
  <button className='btn btn-success justify-center ms-2' onClick={handleaddcart}>Add to cart</button>
  </div>
</div>
</div>
    </div>
     )
}

function Login() {
  const navigate = useNavigate(

  );
  const [formstate, setformstate] = useState("success");

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    // validationSchema: formValidationSchema,
    onSubmit: async (values) => {
      console.log("submit");
      const data = await fetch("https://foodbackend.vercel.app/user/login", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(values)
      });
      if (data.status === 400) {
        console.log("error");
        setformstate("error");
      } else {
        setformstate("success");
        const result = await data.json();
        console.log("success", result);
        localStorage.setItem("token", result.token);
        localStorage.setItem("usermail", result.email);
        navigate("/");
      }

    }
  });
  return (
    <div><Navbar/>
    <div className="container">

      {/* <Card sx={{ mx: 2, height: 300 }} className="card"> */}
        {/* <CardContent> */}
          <form onSubmit={formik.handleSubmit} className='loginform'>
            <h2>LOGIN</h2>

            <div className='mb-3'>
              <lable for="name" className="form-lable">Email</lable>
            <input 
            className='form-control'
            placeholder='Email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            label="email"
            variant="outlined" required />
              </div>

              <div className='mb-3'>
              <lable for="name" className="form-lable">Password</lable>
            <input 
            className='form-control'
            placeholder='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            label="Password"
            name="password"
            type="password"
            variant="outlined"required />
              </div>
              <button className="m-3 btn btn-success mx-1" color="success" type='submit' variant="contained">{formstate === "success" ? "Login" : "Retry"}</button>
            <Link className="m-3 btn btn-primary mx-1" to="/signin">Create User </Link>
          </form>
    </div>
    </div>
  );
}


function Signin() {
  const navigate = useNavigate();
  const [formstate, setformstate] = useState("success");
  const [message, setMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      firstname: '',
      lastname: ''
    },
    // validationSchema: formValidationSchema,
    onSubmit: (newdata) => {
      // console.log(values)
      adddata(newdata);
    }
  });

  const adddata =async  (newdata) => {
    console.log(newdata);

   
    const data = await fetch("https://foodbackend.vercel.app/user/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(newdata)
      });
    
      setTimeout(async () => {
        const msg = await data.json();
        console.log(msg.status);
        setMessage(msg.status);
    }, 3000);
    setMessage("");
      if (data.status === 400) {
        console.log("error");
        setformstate("error");
      } else {
        setformstate("success");
        const result = await data.json();
        console.log("success", result);
        // localStorage.setItem("token", result.token);
        localStorage.setItem("usermail", formik.values.email);
        navigate("/login");
      }

  };
  return (
    <div><Navbar/>
    <div className="container">
      {/* <Card sx={{ mx: 2, height: 350 }} className="card"> */}
        <form onSubmit={formik.handleSubmit} className='loginform'>
          <h2>SIGNUP</h2>
          <div className='loginfield'>
            <div className='mb-3'>
              <lable for="name" className="form-lable">UserName</lable>
            <input 
            className='form-control'
              placeholder="username"
              name='username'
              value={formik.values.username}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="Username"
              variant="outlined" required />
              </div>
              <div className='mb-3'>
              <lable for="name" className="form-lable">Email{message}</lable>
            <input
            className='form-control'
              placeholder="email"
              name='email'
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="email"
              variant="outlined" required />
              </div>
              <div className='mb-3'>
              <lable for="name" className="form-lable">FirstName</lable>
            <input
            className='form-control'
              placeholder="firstname"
              value={formik.values.firstname}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="Firstname"
              name="firstname"
              type="text"
              variant="outlined" required />
              </div>
              <div className='mb-3'>
              <lable for="name" className="form-lable">LastName</lable>
            <input
            className='form-control'
              placeholder="lastname"
              value={formik.values.lastname}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="Lastname"
              name="lastname"
              type="text"
              variant="outlined" required />
              </div>
              <div className='mb-3'>
              <lable for="name" className="form-lable">Password</lable>
            <input
            className='form-control'
              placeholder="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="Password"
              name="password"
              type="password"
              variant="outlined" required />
              </div>
            <button className="m-3 btn btn-success mx-1" color="success" type='submit' variant="contained">{formstate === "success" ? "Signup" : "Retry"}</button>
            <Link className="m-3 btn btn-primary mx-1" to="/login">Already User </Link>
          </div>

        </form>
      {/* </Card> */}
    </div>
    </div>
  );
}
function Cart() {
  let data=useCart();
  const navigate = useNavigate()
  let datee=[{"order_date":new Date().toDateString()}]
  // let full_data= data.splice(({date:datee}))
  let full_data=data.concat(datee)
  let dispatch=useDispatchCart();
  let useremail=localStorage.getItem("usermail")
  let totalprice=data.reduce((total,food)=>total+food.price,0)
  if(data.length===0){
    return(
      <div style={{zIndex:1000}}>
        <h1 className='m-5 w-100 text-center fs-3' style={{color:"white"}}>The cart is empty!</h1>
      </div>
    ) 
  }

  const handlecheckout=async()=>{

    // event.preventDefault();
      const options = {
        key: 'rzp_test_teSKDfmwTCTFu0',
        key_secret: "2TZaVrFSXYnzzu3QeH6N3t3w",
        amount: totalprice*100, // amount in paise (10000 paise = ₹100)
        currency: 'INR',
        name: 'Book My show',
        description: 'Payment for booking',
        image: 'https://your-image-url.com/logo.png',
        handler: function(){
          let response=fetch("https://foodbackend.vercel.app/order",{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({
        order_data:full_data,
        email:useremail,
      })
    });
    console.log("order response",response.status)
    console.log(data)
    // if(response.status===200){
      dispatch({type:"DROP"})
      navigate("/")
    // }
        },
        prefill: {
          name: "bharathi",
          email: "bharathiraja2207@gmail.com",
          contact:'9597105564'
        },
        notes: {
          address: 'My Store, India'
        },
        theme: {
          color: '#F37254'
        }
      };
      var pay = new window.Razorpay(options)
      pay.open()
 
  }


  return (
    <div >
<div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
  <table className='table table-hover' id='table'>
    <thead className='text-success fs-4'>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Name</th>
        <th scope='col'>Quantity</th>
        <th scope='col'>Option</th>
        <th scope='col'>Amount</th>
        <th scope='col'></th>
      </tr>
    </thead>
    <tbody>
      {data.map((food,index)=>(
        <tr>
        <th scope='row'>{index+1}</th>
        <td>{food.name}</td>
        <td>{food.qty}</td>
        <td>{food.size}</td>
        <td>{food.price}</td>
        <td><button type='button' className='bi bi-trash btn p-0'><img   alt='delete' onClick={()=>{dispatch({type:"REMOVE",index:index})}}></img></button></td>
      </tr>
      ))}
      
    </tbody>
  </table>
  <div><h1 className='fs-2' id='table'>Total Price: {totalprice}/-</h1></div>
  <div><button className='btn bg-success mt-5' onClick={handlecheckout} >check out</button></div>
</div>
    </div>
     )

}

// function Myorder() {
// const[orderdata,setorderdata]=useState("")
//   // return (
//   //   <div>
    // <div >
    //   <Navbar/>
    // </div>
//     <div className='container'>
//       <div className='row'>
//         {orderdata !== {} ? Array(orderdata).map(data)=>{
    //         return(
    //            data.orderdata ?
    //                    data.orderdata.order_data.slice(0).reverse().map((item)=>{
    //                        return (
    //                            item.map((arraydata)=>{
    //                             return(
    //                               <div>
    //                                 {arraydata.order_data ?<div className='m-auto mt-5'>
    //                                   {data=arraydata.order_date}
    //                                   <hr/>
    //                                   <div>:
                                        // <div className='col-12 col-md-6 col-lg-3'>
                                        //   <div className='card mt-3'>
                                        //     <div className='card-body'>
                                        //       <h5 className='card-title'>{arraydata.name}</h5>
                                        //       <div className='container w-100 p-0' style={{height:"38px"}}>
                                        //         <span className='m-1'>{arraydata.qty}</span>
                                        //         <span className='m-1'>{arraydata.size}</span>
                                        //         <span className='m-1'>{data}</span>
                                        //         <div className='d-inline ms-2 h-100 w-2 fs-5'>
                                        //           {arraydata.price}/-
                                        //         </div>
                                        //       </div>
                                        //     </div>
                                        //   </div>
                                        // </div>
    //                                 }
    //                                   </div>
    //                                   )
    //                               </div>
                                
    //                            })
    // )
//   }):""}

//       </div>

//       </div>

//     </div>
    // // <div>
    //   <Footer/>
    // </div>
    // </div>
//      )

// }

function Myorder(){
  const[orderdata,setorderdata]=useState("")
// console.log(orderdata);
  const fetchmyorder=async ()=>{
     await fetch("https://foodbackend.vercel.app/orderdata",{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({
        email:localStorage.getItem("usermail"),
      })
    }).then(async(res)=>{
      let response=await res.json()
     setorderdata(response)
    })
  }

  useEffect(()=>{
    fetchmyorder()
  },[])
  
  return(
    <>
    <div >
      <Navbar/>
    </div>

    <div className='container'>
       <div className='row'>
        {orderdata!=={}?Array(orderdata).map(data=>{
          console.log(data,"data")
          return(
            data.orderdata ?
              data.orderdata.order_data.slice(0).reverse().map((item)=>{
                console.log(item,"item")
                return(
                  item.map((arraydata)=>{
                    
                    return(
                      <div>
                        {arraydata.order_date ?<div className='m-auto mt-5'>
                          {console.log(arraydata.order_date)}
                          {data=arraydata.order_date}
                          {/* {console.log(date,"date")} */}
                          <hr/>
                          
                        </div> :
                           <div className='col-12 col-md-6 col-lg-3'>
                                          <div className='card mt-3'>
                                            <div className='card-body'>
                                              <h5 className='card-title'>{arraydata.name}</h5>
                                              <div className='container w-100 p-0' style={{height:"38px"}}>
                                                <span className='m-1'>{arraydata.qty}</span>
                                                <span className='m-1'>{arraydata.size}</span>
                                                {/* <span className='m-1'>{arraydatadata}</span> */}
                                                {/* {console.log(dataaa,"dattt")} */}
                                                <div className='d-inline ms-2 h-100 w-2 fs-5'>
                                                  {arraydata.price}/-
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                        }
                      </div>
                    )
                  })
                )
              }):""
          )
        }):""}
       </div>
    </div>

     <div>
      <Footer/>
    </div>
    </>
  )
}



function Navbar(){
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const [cartview,setcartview]=useState(false);
  let data=useCart();
  const handleClick = () => {
    localStorage.removeItem('token');
    setTimeout(() => {
      navigate("/login")
    }, 1500);
    console.log("logout")
  }
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic"  to="/">BuyFast</Link>
    <button className="navbar-toggler" type="button" onClick={toggleNav} data-bs-target="#toggle" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
      <ul className='navbar-nav me-auto mb-2'>
        <li className='nav-item'>
        <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
        {(localStorage.getItem("token"))?
        <li className='nav-item'>
        <Link className="nav-link active fs-5" aria-current="page" to="/myorder">MyOrders</Link>
        </li>
          :""}
      </ul>
      {(!localStorage.getItem("token"))?
      <div className="navbar-nav">
        <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
        <Link className="btn bg-white text-success mx-1" to="/signin">Signup</Link>
       
      </div>:
       <div>
        <div id='toggle' className='btn bg-white text-success mx-2' onClick={()=>{setcartview(true)}}>My Cart{""}<Badge pill bg='danger'>{data.length}</Badge></div>
{cartview ? <Modal onClose={()=>{setcartview(false)}}><Cart/></Modal>:null}
        <Link className="btn bg-white text-success mx-1" to="/signin" onClick={handleClick}>Logout</Link>
        </div>
         }
        
      
    </div>
  </div>
</nav>
  )
}

