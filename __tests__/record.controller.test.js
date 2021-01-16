const request = require('supertest')
const app = require('../app')

describe('Post Endpoints', () => {
    it('should fetch records', async () => {
        const res = await request(app)
            .post('/api/products/')
            .send({
                startDate: "2016-01-26",
                endDate: "2018-02-02",
                minCount: 2980,
                maxCount: 3000
            })
        expect(res.code).toEqual(200);
    })
})