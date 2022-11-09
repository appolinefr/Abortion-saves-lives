const db = require("../config/connection");
const { Facility } = require("../models");
// const userSeeds = require("./userSeeds.json");
const facilitySeeds = require("./facilitySeeds.json");

db.once("open", async () => {
  try {
    await Facility.deleteMany({});
    await Facility.create(facilitySeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  console.log(facilitySeeds)
  process.exit(0);
});
