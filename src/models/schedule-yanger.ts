import mongoose  from "mongoose";

import ScheduleSchema from "./schema/scheduleSchema";

export const  ScheduleJunior = mongoose.model('ScheduleJunior', ScheduleSchema);





