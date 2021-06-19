import enablePublicAccess from 'cors'

const allTeam = async (request, response) => {
  enablePublicAccess(request, response)

  const answer = Math.round(Math.random()) ? 'yes' : 'no'

  res.status(200).json({
    data: answer,
    error: null,
  })
}

export default allTeam