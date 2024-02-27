const {MongoClient}=require('mongodb');
async function main()
{
    const uri='mongodb://localhost:27017';
    const client=new MongoClient(uri);
    try
    {
        await client.connect();
        await joindocs(client,'sumit','orders','product');
    }
    catch
    {
       await console.log('error');

    }
    finally
    {
       await client.close();
    }
}
main();
async function joindocs(client,dbname,col1,col2)
{
    const data=[{$lookup:{from:'product',localField:'prodId',foreignField:'prodId',as:'orderdetails'}}];
    const result=await client.db(dbname).collection(col1).aggregate(data).toArray();
    result.forEach(element => {
        console.log(JSON.stringify(element));
    });
}