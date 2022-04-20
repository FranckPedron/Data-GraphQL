const client = require('./dbClient');

const dataMapper = {
    /**
     * 
     * @returns 
     */
    async getAll() {
        const query = {
            text: `select * from ingredient;`
        }
        const result = await client.query(query);
        return result.rows;
    }
}

module.exports = dataMapper;