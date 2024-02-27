const {MongoClient}=require('mongodb');
async function main()
{
    const url="mongodb://localhost:27017";
    const client=new MongoClient(url);
    try
    {
       await client.connect();
       await listDatabases(client);
    }

    catch(error)
    {
        await  console.log('does not connect');
    }
    finally
    {
        await client.close();
    }
}
main().catch(console.error);
async function listDatabases(client)
{
    databasesList = await client.db().admin().listDatabases();
    console.log('Databases:');
    databasesList.databases.forEach(db=>console.log(`- ${db.name}`));
};