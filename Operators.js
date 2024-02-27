const { errors } = require('formidable');
const {MongoClient} =require('mongodb');
async function main()
{
    const uri='mongodb://localhost:27017';
    const client=new MongoClient(uri);
    try
    {
       await client.connect();
       await Operator(client,"mydatabase","products");
    }
    catch
    {
        await console.log("error");
    }
    finally
    {
       await client.close();
    }
}
main();
async function Operator(client,dbname,colname)
{
    const resultlt=await client.db(dbname).collection(colname).find({price:{$lt:78000}}).toArray();
    console.log(JSON.stringify(resultlt));
    const resultgt=await client.db(dbname).collection(colname).find({price:{$gt:78000}}).toArray();
    console.log(JSON.stringify(resultgt));
    const resultregex=await client.db(dbname).collection(colname).find({name:{$regex:"^d"}}).toArray();//start with d
    console.log(JSON.stringify(resultregex));
    const resultregex2=await client.db(dbname).collection(colname).find({name:/le/}).toArray();//staring with two letter
    console.log(JSON.stringify(resultregex2));
    const resultregex3=await client.db(dbname).collection(colname).find({name:/vo$/}).toArray();//staring with two letter
    console.log(JSON.stringify(resultregex3));
}