# FindARoomie

_a simple roomate finder for hostel_

## API Reference

#### Get items

```http
  GET /api/v1/rooms?query
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `block`   | `string` | **Required**. Block to fetch rooms of |

#### Add Rooms

```http
  POST /api/v1/rooms
```

| Parameter | Type      | Description                                                  |
| :-------- | :-------- | :----------------------------------------------------------- |
| `block`   | `string`  | **Required**. Block to fetch rooms of                        |
| `floorNo` | `integer` | **Required**. Floor Number                                   |
| `roomNo`  | `integer` | **Required**. Room Number                                    |
| `note`    | `string`  | **Required**. Contact Number and /or preferences for roomate |

#### Delete Rooms

```http
  DELETE /api/v1/rooms
```

| Parameter | Type      | Description                           |
| :-------- | :-------- | :------------------------------------ |
| `block`   | `string`  | **Required**. Block to fetch rooms of |
| `floorNo` | `integer` | **Required**. Floor Number            |
| `roomNo`  | `integer` | **Required**. Room Number             |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

_For Backend_

`MONGO_URL`
`PORT`

_For Frontend_

`VITE_API`

## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express

**Database:** Mongo

## Read More about it

![LinkedIn Post](https://www.linkedin.com/feed/update/urn:li:activity:7238798775505272832/)

## Screenshots

![App Screenshot](https://media.licdn.com/dms/image/v2/D5622AQHh4h6qCAYAmw/feedshare-shrink_800/feedshare-shrink_800/0/1725864115804?e=1728518400&v=beta&t=bPz_DkZqm7WErxdbFX-6RYr7GEedKCkPQR6FgKX-nA8)
