import { ethers } from "hardhat";

async function main() {

  // const sportCar = await ethers.deployContract("SportCarCollectible");
  // await sportCar.waitForDeployment();

  const raceCar = await ethers.deployContract("RaceCarCollectible");
  await raceCar.waitForDeployment();

  const trackCar = await ethers.deployContract("TrackCarCollectible");
  await trackCar.waitForDeployment();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
