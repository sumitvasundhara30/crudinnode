const {MongoClient}=require('mongodb');
async function main()
{
    const uri='mongodb://localhost:27017';
    const client=new MongoClient(uri);
    try
    {
       await client.connect(); 
       await createdb(client,'sumit');
    }
    catch(error)
    {
        await console.log('not created ');
    }
    finally
    {
        await client.close();
    }
}
main();
async function createdb(client,dbname)
{
    const dbobj=await client.db(dbname);
    console.log('database created');
    console.log(dbobj);

}