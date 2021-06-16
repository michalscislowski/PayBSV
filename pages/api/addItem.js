import { connectToDatabase } from "../../util/mongodb";
const Item  = require("../../models/itemModel");

export default async (req, res) => {
    console.log(JSON.stringify(req.body))
    const { db } = await connectToDatabase();
    const items = db.collection("items");
    const email = req.body.email;
    const item = req.body.item;
    const status = req.body.status;
    const linkurl = req.body.linkurl;
    const mbuserid = req.body.mbuserid;
    const date = req.body.date;
    let newItem = new Item({
        email,
        item,
        status,
        linkurl,
        mbuserid,
        date
    });
    const result = await items.insertOne(newItem);

    console.log(
        `${result.insertedCount} items was inserted with the _id: ${result.insertedId}`,
    );
    res.status(200).end();
};
