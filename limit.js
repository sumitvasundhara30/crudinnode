const {MongoClient} = require('mongodb');

async function main(){

   const uri = "mongodb://localhost:27017/";
   const client = new MongoClient(uri);

   try {
      await client.connect();
      await limitdocs(client, "mydatabase", "products");
   } finally {
      await client.close();
   }
}

main().catch(console.error);


async function limitdocs(client, dbname, colname){
   var myqry = {price:{$gte:100000}};
   const result = await client.db(dbname).collection(colname).find({"price":{$gte:100000}}).limit(1).toArray();//give me first one
   console.log(JSON.stringify(result));
   const resultskip= await client.db(dbname).collection(colname).find({"price":{$gte:100000}}).limit(1).skip(1).toArray();//give me first one
   console.log(JSON.stringify(resultskip));
}
