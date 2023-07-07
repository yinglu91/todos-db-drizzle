import { db } from '@/lib/db'
import React from 'react'
import CreateTodo from '@/components/CreateTodo'
import { todo } from '../../drizzle/schema'

const HomePage = async () => {
  const todoList = await db.select().from(todo) // select * from todo;
  console.log('ying todos:\n', todoList)

  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{`${todo.title} - ${todo.description}`}</li>
        ))}
      </ul>
      <CreateTodo />
    </div>
  )
}

export default HomePage
