import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://ashishnandvana123:03lov8KAEuiuE9E3@cluster0.kj8xmni.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(210).send({ message: "data inserted successfully" });
  }
}

export default handler;

//    "mongodb+srv://ashishnandvana123:03lov8KAEuiuE9E3@cluster0.kj8xmni.mongodb.net/expense-tracker?retryWrites=true&w=majority"
