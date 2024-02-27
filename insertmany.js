const {MongoClient}=require('mongodb');
async function main()
{
    const uri='mongodb://localhost:27017';
    const client=new MongoClient(uri);
    try
    {
        await client.connect();
        await insertmany(client,'mydatabase','products',
        [
            {"productid":6,"name":"dell","price":45000},
            {"productid":7,"name":"hp","price":60000}, 
            {"productid":8,"name":"lenovo","price":15000},
            {"productid":9,"name":"samsung","price":78000},
            {"productid":10,"name":"vivo","price":145000}
        ]); 
    }
    catch
    {
      await  console.log('insert error');
    }
    finally
    {
       await client.close();
    }
}
main();
async function insertmany(client,dbname,colname,data)
{
    const dbobj=await client.db(dbname);
    const col=dbobj.collection(colname);
    const result=await col.insertMany(data);
    console.log(`${result.insertedCount} new document(s) created with the following id(s):`);
    console.log(result.insertedIds);

}