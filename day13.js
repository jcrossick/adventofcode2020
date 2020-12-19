const leaveAt = 1000067;
const busInput = `17,x,x,x,x,x,x,x,x,x,x,37,x,x,x,x,x,439,x,29,x,x,x,x,x,x,x,x,x,x,13,x,x,x,x,x,x,x,x,x,23,x,x,x,x,x,x,x,787,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,19`;

const buses = busInput
  .split(",")
  .filter((entry) => entry != "x")
  .map((entry) => parseInt(entry));

const minutesWait = (leaveAt, busId) =>
  (parseInt(leaveAt / busId) + 1) * busId - leaveAt;

const leavingArray = buses.map(
  (bus) => {return {bus, wait: minutesWait(leaveAt, bus)}}
).sort((a,b) => a.wait - b.wait);

console.log("Part 1 is", leavingArray[0].bus*leavingArray[0].wait);
