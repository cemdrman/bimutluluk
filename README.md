https://bimutluluk.herokuapp.com/api/records/

Installing Instructions.
- Clone the project.
- Enter the project folder.
- Run "npm install".
- Run "npm start".

call `POST localhost:5000/api/records`

### Sample Request

```
{
	"startDate": "2016-01-26", 
	"endDate": "2018-02-02", 
	"minCount": 2980,
	"maxCount": 3000
}
```

For best practices:

https://expressjs.com/en/advanced/best-practice-performance.html#handle-exceptions-properly