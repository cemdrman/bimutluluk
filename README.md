Installing Instructions.

- Clone the project.
- Enter the project folder.
- Run "npm install".
- Run "npm start".

call `POST localhost:5000/api/records`

### Sample Request

Body must be a JSON.

```
{
    "startDate": "2019-01-01",
    "endDate": "2019-10-31",
    "minCount": 100,
    "maxCount": 900
}
```