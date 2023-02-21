const consonantCount = (str) => str.replace(new RegExp(/[^qwrtyplkjhgfdszxcvbnmQWRTYPLKJHGFDSZXCVBNM]*/, 'g'), '').length;
