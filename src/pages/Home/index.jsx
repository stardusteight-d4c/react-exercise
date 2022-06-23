import React, { useState, useEffect } from 'react'
import { Card } from '../../components/Card'

export function Home() {
  const [studentName, setStudentName] = useState()
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({ name: '', avatar: '' })

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    }
    setStudents((prevState) => [...prevState, newStudent])
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.github.com/users/stardusteight-d4c'
      )
      const data = await response.json()
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    }

    fetchData()
  }, [])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/stardusteight-d4c')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUser({
  //         name: data.name,
  //         avatar: data.avatar_url
  //       })
  //     })
  // }, [])

  return (
    <div className="flex items-center flex-col">
      <header className="mt-[5.25rem] mx-0 mb-6 text-2xl font-bold w-1/2 flex justify-between items-center">
        <h1 className="uppercase">Lista de presença</h1>
        <div className="flex items-center">
          <strong className="text-base font-normal ">{user.name}</strong>
          <img
            className="w-[60px] h-[60px] rounded-full ml-2"
            src={user.avatar}
            alt="Foto de Perfil"
          />
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
        className="w-1/2 py-3 px-5 bg-[#E6E6E6] rounded-[5px] border-none text-base"
      />
      <button
        type="button"
        onClick={handleAddStudent}
        className="w-1/2 py-3 px-5 font-bold uppercase bg-purple-500 text-white text-base rounded-[5px] mt-3 mx-0 mb-[5.25rem] border-none cursor-pointer duration-300 hover:bg-purple-600"
      >
        Adicionar
      </button>

      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  )
}
