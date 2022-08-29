import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { AddAuthor, AddBooks } from '../pages'
import { MakePayment } from '../pages/myAccount/MakePayment'
import { MyAccount } from '../pages/myAccount/MyAccount'
import { MyAcount } from '../pages/myAccount/MyAcount'
import { Security } from '../pages/myAccount/Security'
import { Private } from '../Private'

export const Main = () => {
  return (

    <div>
      <Private />
      <Routes>
        <Route path='/addbook' element={<AddBooks />} />
        <Route path='/addauthor' element={<AddAuthor />} />
        <Route path='/myaccount' element={<MyAcount />} >
          <Route path='MyAcount' element={<MyAccount />} />
          <Route path='Acount' element={<Security />} />
          <Route path='MAcount' element={<MakePayment />} />
        </Route>
      </Routes>

    </div>
  )
}
