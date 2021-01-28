import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import AddProduct from './components/AddProduct'
import DuckCalls from './components/DuckCalls'
import GooseCalls from './components/GooseCalls'
import CallBlanks from './components/CallBlanks'
import Register from './components/Register'
import NotFound from './components/NotFound'

export default(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/products/:product_id' component={Products} />
      <Route exact path='/addproduct' component={AddProduct}/>
      <Route exact path='/duckcalls' component={DuckCalls} />
      <Route exact path='/goosecalls' component={GooseCalls} />
      <Route exact path='/callblanks' component={CallBlanks} />
      <Route exact path="/register"><Register /></Route>
      <Route component={NotFound}/>
    </Switch>
)