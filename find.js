const {MongoClient}=require('mongodb');
const http=require('http');


async function main()
{
    const uri='mongodb://localhost:27017';
    const client=new MongoClient(uri);
    try
    {
       await client.connect();
       await find(client,"mydatabase","products");
    }
    catch
    {
       await console.log("Error");
    }
    finally
    {
        await client.close();
    }
}
main();
async function find(client,dbname,col)
{
    const result= await client.db(dbname).collection(col).find({}).toArray();
    var count=0;
    console.log(JSON.stringify(result))
    result.forEach(row=>{count++;console.log(count,row['name'],row['price']);});
}
