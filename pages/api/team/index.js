import { IncomingMessage, ServerResponse } from 'http'
import Database from '@database/db'

const allTeam = async (request = IncomingMessage, response = ServerResponse) => {
    const db = new Database()
    const allEntries = await db.getAll()
    const length = allEntries.length
    response.status(200).json({length, data: allEntries})
}

export default allTeam