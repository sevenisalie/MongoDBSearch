const AxiosDigestAuth = require("@mhoc/axios-digest-auth").default
require('dotenv').config()


PUBLIC_KEY=process.env.PUBLIC_KEY
PRIVATE_KEY=process.env.PRIVATE_KEY
GROUP_ID=process.env.GROUP_ID
CLUSTER_NAME=process.env.CLUSTER_NAME

const digestAuth = new AxiosDigestAuth({
    username: process.env.PUBLIC_KEY,
    password: process.env.PRIVATE_KEY,
  });

const headers = {
      'content-type': "application/json",
    }


const atlasIndex = {
    collectionName: "clients",
    database: "LobbyShop",
    mappings: {
        dynamic: true
    },
    name: "default"
}
const url = `https://cloud.mongodb.com/api/atlas/v1.0/groups/${GROUP_ID}/clusters/${CLUSTER_NAME}/fts/indexes?pretty=true`

const main = async () => {
    const request = await digestAuth.request({
        headers: headers,
        method: "POST",
        data: atlasIndex,
        url: url
    })
    console.log(request)
    console.log("DATARA")
    console.log(request.data)
}
main()