const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  let healthy = 0
  let exchange = 0
  let failed = 0
  let soh
  let rated_capacity = 120
  
  presentCapacities.forEach(element => {
    soh = 100 * element / rated_capacity
     console.log(soh)
    if (soh > 80) {
      healthy++;
  } else if (soh <= 80 && soh > 63) {
    exchange++;
  } else {
    failed++;
  }
   });

  return {
    healthy:healthy,
    exchange: exchange,
    failed:exchange,
  };
}


function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 3);
  console.log("Done counting :)");
}

testBucketingByHealth();
