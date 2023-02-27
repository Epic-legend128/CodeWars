const countSheeps = (arrayOfSheep) => arrayOfSheep.reduce((t, x) => t+(x==null||x==undefined?0:x), 0);
