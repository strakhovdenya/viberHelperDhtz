import mongoose  from "mongoose";

import ScheduleSchema from "./schema/scheduleSchema";

export const  ScheduleMiddle = mongoose.model('ScheduleMiddle', ScheduleSchema);





