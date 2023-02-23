const geo_mean = (nums, arith_mean) => (nums=[...nums, ((arith_mean*(nums.length+1)) - (nums.reduce((t, x) => t+x, 0)))]).reduce((t, x) => t*x, 1)**(1/nums.length);
