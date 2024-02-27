const {MongoClient}=require('mongodb');
const cli = require('nodemon/lib/cli');
async function main()
{
    const uri='mongodb://localhost:27017';
    const client=new MongoClient(uri);
    try
    {
        await client.connect();
        await insertrecord(client,'mydatabase','products',{"productid":2,"name":"mobile","price":30000});
        
    }
    catch
    {
        console.log('error');
    }
    finally
    {
        await client.close();
    }
}
main();
async function insertrecord(client,dbname,colname,data)
{
    const dbobj=await client.db(dbname);
    const col=dbobj.collection(colname);
    const result=await col.insertOne(data);
    console.log(`New document created with the following id: ${result.insertedId}`)
}