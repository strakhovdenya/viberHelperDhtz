// @ts-ignore
import mongoose  from "mongoose";


const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    data: {
        type: String,
        require: true
    },
    year_month: {
        type: String,
        require: true
    },
    time_ice: {
        type: String
    },
    ice_place: {
        type: String
    },
    time_ground: {
        type: String
    },
    gathering_time: {
        type: String
    }
});

export const ScheduleElder  = mongoose.model('ScheduleElder', ScheduleSchema);

// module.exports.getUserByLogin = function (login, callback) {
//     const query = {login: login};
//     User.findOne(query, callback);
// }
//
// module.exports.getUserById = function (id, callback) {
//     User.findById(id, callback);
// }



