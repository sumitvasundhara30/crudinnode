const {MongoClient}=require('mongodb');
async function main()
{
    const uri='mongodb://localhost:27017';
    const client=new MongoClient(uri);
    try
    {
        await client.connect();
        await  deletedoc(client,"mydatabase","products");
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
async function deletedoc(client,dbname,colname)
{
    const deleteprice={name:"hp"};
    const result=await client.db(dbname).collection(colname).deleteOne(deleteprice);
    console.log("Record is Deleted");
    const deletemany={price:{$gt:50000}};
    const resultdeletemany=await client.db(dbname).collection(colname).deleteOne(deletemany);
    console.log("Record is Deleted");
}   