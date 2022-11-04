import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../pages'
import { TodosScreen } from '../pages/TodosScreen'
import { NavBar } from '../ui/NavBar'

export const OtroEnrutador = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/todos' element={<TodosScreen />} />
      </Routes>
    </>
  )
}
