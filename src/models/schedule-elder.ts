import mongoose  from "mongoose";

import ScheduleSchema from "./schema/scheduleSchema";

export const ScheduleElder  = mongoose.model('ScheduleElder', ScheduleSchema);




