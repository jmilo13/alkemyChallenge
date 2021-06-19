import { IncomingMessage, ServerResponse } from 'http'
import Database from '@database/db'

const allTeam = async (request = IncomingMessage, response = ServerResponse) => {
    const db = new Database()
    const allEntries = await db.getAll()
    const length = allEntries.length
    response.status(200).json({length, data: allEntries})
}

const nueva = async (request = IncomingMessage, response = ServerResponse) => {
    if(request.config.method === 'put'){
        const db = new Database()
        await db.postById(request.data)
        response.status(200)
    }
}

export default allTeam
export default nueva