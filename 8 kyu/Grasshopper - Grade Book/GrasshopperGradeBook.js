const getGrade = (s1, s2, s3) => (f=Math.ceil(Math.max(Math.min(s1+s2+s3+1, 300), 49)/30)) <= 6 ? 'F' : String.fromCharCode((10-f)+65);
