const {MongoClient}=require('mongodb');
const cli = require('nodemon/lib/cli');
async function main()
{
    const uri='mongodb://localhost:27017';
    const client=new MongoClient(uri);
    try
    {
       await client.connect();
       await sorting(client,'mydatabase','products');
    }
    catch
    {
       await console.log('Error');
    }
    finally
    {
        await client.close();
    }
}
main();
async function sorting(client,dbname,colname)
{
    const myshorting={price:1};//Ascending sort
    const mysortname = { name: 1 };//Ascending sort
    const myshortingdec={price:1};//Ascending sort
    const mysortnamedec = { name: 1 };//Ascending sort
    const resultsort=await client.db(dbname).collection(colname).find({}).sort(myshorting).toArray();
    resultsort.forEach(element => {
        console.log(element);
    });
    const resultsortname=await client.db(dbname).collection(colname).find({}).sort(mysortname).toArray();
    resultsortname.forEach(element => {
        console.log(element);
    });
    const resultsortnamedec=await client.db(dbname).collection(colname).find({}).sort(mysortnamedec).toArray();
    resultsortnamedec.forEach(element => {
        console.log(element);
    });
    const resultsortpricedec=await client.db(dbname).collection(colname).find({}).sort(myshortingdec).toArray();
    resultsortpricedec.forEach(element => {
        console.log(element);
    });
}