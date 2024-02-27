const {MongoClient}=require('mongodb');
const cli = require('nodemon/lib/cli');
async function main()
{
    const uri="mongodb://localhost:27017";
    const client=new MongoClient(uri);
    try
    {
      await  client.connect();
      await updatedata(client,'mydatabase','products');
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
async function updatedata(client,dbname,colname)
{   
    var query={productid:8};
    var updatevalue={$set:{name:"oppo",price:12000}};
    const result=await client.db(dbname).collection(colname).updateOne(query,updatevalue);
    console.log("Document updated");    
}