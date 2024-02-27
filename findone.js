const {MongoClient}=require('mongodb');
async function main()
{
    const uri='mongodb://localhost:27017';
    const client=new MongoClient(uri);
    try
    {
       await client.connect();
       await findone(client,"mydatabase","products");
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
async function findone(client,dbname,colname)
{
    const result=await client.db(dbname).collection(colname).find({"name":"hp"}).toArray();
    console.log(JSON.stringify(result));
    const secondresult=await client.db(dbname).collection(colname).findOne({});
    console.log(JSON.stringify(secondresult));
}