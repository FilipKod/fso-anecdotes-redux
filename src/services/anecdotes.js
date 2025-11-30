const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await fetch(baseUrl)

  if (!response.ok) {
    throw new Error('Failed to fetch all anecdotes.')
  }

  return await response.json()
}

const create = async (content) => {
  const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ content, votes: 0 })
  }

  const response = await fetch(baseUrl, options)

  if (!response.ok) {
    throw new Error('Failed to create a new anecdote.')
  }

  return await response.json()
}

const vote = async (id) => {
  const originalAnecdote = await fetch(`${baseUrl}/${id}`)
  const anecdoteObj = await originalAnecdote.json()

  const options = {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      ...anecdoteObj,
      votes: anecdoteObj.votes + 1
    })
  }

  const response = await fetch(`${baseUrl}/${id}`, options)

  if (!response.ok) {
    throw new Error('Failed to update vote')
  }

  return await response.json()
}

export default { getAll, create, vote }