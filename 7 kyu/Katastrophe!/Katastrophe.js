strongEnough = (e, a) => (Math.pow(0.99, a)*1000 > e.map(x => x.reduce((t,x)=>t+x, 0)).reduce((t,x)=>t*x,1) ? "Safe!" : "Needs Reinforcement!");
