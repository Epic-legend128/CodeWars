const whatCentury = (y) => (y=Math.ceil(parseInt(y)/100).toString()) + (/1[123]/.test(y) ? 'th' : y[1] == '1' ? 'st' : y[1] == '2' ? 'nd' : y[1] == '3' ? 'rd' : 'th');
