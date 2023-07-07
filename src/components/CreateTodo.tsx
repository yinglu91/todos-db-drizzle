import { db } from '@/lib/db'
import { eq } from 'drizzle-orm'
import { todo } from '../../drizzle/schema'

// rafce --- file needs to *.tsx
const CreateTodo = async () => {
  const insertRow = async () => {
    'use server'
    const result = await db
      .insert(todo)
      .values({ title: 'walk', description: 'walk is good for body' })
    console.log(result)
  }

  const deleteWalkRows = async () => {
    'use server'
    const result = await db.delete(todo).where(eq(todo.title, 'walk'))
    console.log(result)
  }

  const updateWalkRows = async () => {
    'use server'
    const result = await db
      .update(todo)
      .set({ description: 'walk is good for you!' })
      .where(eq(todo.title, 'walk'))

    console.log(result)
  }

  return (
    <>
      <br /> Actions:
      <form action={insertRow}>
        <button style={{ color: 'darkblue' }}>Insert A Walk Todo</button>
      </form>
      <form action={deleteWalkRows}>
        <button style={{ color: 'red' }}>Delete Walk Todos</button>
      </form>
      <form action={updateWalkRows}>
        <button style={{ color: 'blue' }}>Update Walk Todos</button>
      </form>
    </>
  )
}

export default CreateTodo
