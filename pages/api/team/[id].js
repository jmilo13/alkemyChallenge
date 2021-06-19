import { IncomingMessage, ServerResponse } from 'http'
import Database from '@database/db'

const memberTeam = async (request = IncomingMessage, response = ServerResponse) => {
    const id = request.query.id
    const db = new Database()
    const entry = await db.getById(id)
    response.status(200).json({data:entry})
}

export default memberTeam