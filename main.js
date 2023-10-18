const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  let healthyCount = 0
  let exchangeCount = 0
  let failedCount = 0
  
  const rated_capacity = 120
  
  presentCapacities.forEach(presentCapacity  => {
  const soh = 100 * (presentCapacity  / rated_capacity)
    
    if (soh > 80 && soh <= 100) {
      healthyCount++;
  } else if (soh <= 80 && soh > 63) {
    exchangeCount++;
  } else {
    failedCount++;
  }
   });

  return {
    healthy:healthyCount,
    exchange: exchangeCount,
    failed:failedCount,
  };
}


function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
