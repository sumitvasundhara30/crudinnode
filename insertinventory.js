const {MongoClient}=require('mongodb');
async function main()
{
    const uri='mongodb://localhost:27017';
    const client=new MongoClient(uri);
    try
    {
        await client.connect();
        await insert(client,'sumit','orders',
        [  
            { orderId: 201, custid: 301, prodId: 100, numPurchased: 20 },
            { orderId: 202, custid: 302, prodId: 101, numPurchased: 10 },
            { orderId: 203, custid: 303, prodId: 102, numPurchased: 5 },
            { orderId: 204, custid: 303, prodId: 103, numPurchased: 15 },
            { orderId: 205, custid: 303, prodId: 103, numPurchased: 20 },
            { orderId: 206, custid: 302, prodId: 102, numPurchased: 1 },
            { orderId: 207, custid: 302, prodId: 101, numPurchased: 5 },
            { orderId: 208, custid: 301, prodId: 100, numPurchased: 10 },
            { orderId: 209, custid: 303, prodId: 103, numPurchased: 30 }
        ]);
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
async function insert(client,dbname,colname,data)
{
    const result=await client.db(dbname).collection(colname).insertMany(data);
    console.log(`${result.insertedCount} new document(s) created with the following id(s):`);
    console.log(result.insertedIds);
}
async function insert(client,dbname,colname,data)
{
    const result=await client.db(dbname).collection(colname).insertMany(data);
    console.log(`${result.insertedCount} new document(s) created with the following id(s):`);
    console.log(result.insertedIds);
}
    

