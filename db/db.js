import { JSONPreset } from 'lowdb/node'
import lodash from 'lodash';
import lodashId from 'lodash-id';

//This mixin provides the id functionality we're using to create unique ids
//These unique ids are required for routing
lodash.mixin(lodashId);
let _db;

const db = {
    connect: async () => {
        if (!_db) {
            const defaultData = { messages: [] }
            _db = await JSONPreset('db.json', defaultData);
        }
    },

    getMessageById: async (id) => {
        await _db.read();
        const message = await lodash.getById(_db.data.messages, id);
        return message;
    },


    getMessages: async () => {
        await _db.read();
        return _db.data.messages;
    },

    //We want to do a read, loading fresh data, in case we've got a concurrency issue
    //In theory, we should introduce some sort of locking, but that's for another day #TODO
    createMessage: async (messageText) => {
        const message = {message: messageText, time: new Date()}
        await _db.read();
        await lodash.insert(_db.data.messages, message);
        await _db.write();
        return message
    },

    //Same here, reading first to try and mitigate concurrency issues #scopecreep
    deleteMessage: async (id) => {
        await _db.read();
        await lodash.removeById(_db.data.messages, id);
        await _db.write();
    }

}

export { db };
