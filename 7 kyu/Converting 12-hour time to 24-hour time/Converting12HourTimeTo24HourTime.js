const to24hourtime = (hour, minute, period) => ('0'+(period == "pm" ? (hour == 12 ? 0 : hour)+12 : (hour == 12 ? 0 : hour)).toString()).slice(-2)+('0'+minute.toString()).slice(-2);