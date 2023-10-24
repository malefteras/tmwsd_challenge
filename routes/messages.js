import express from 'express';
import bodyParser from 'body-parser';
import lodash from 'lodash'
import { db } from '../db/db.js';

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
await db.connect();

router.post('/message', async (req, res) => {
  await db.createMessage(req.body.message);
  const messages = await db.getMessages();
  const orderedMessages = lodash.orderBy(messages.map((r) => { return { id: r.id, time: new Date(r.time) } }), (m) => m.time, 'desc');
  res.render('messages/index', { ids: orderedMessages, showSave: true });
})

router.get('/', async (req, res) => {
  const messages = await db.getMessages();
  const orderedMessages = await lodash.orderBy(messages.map((r) => { return { id: r.id, time: new Date(r.time) } }), (m) => m.time, 'desc');
  res.render('messages/index', { ids: orderedMessages, showSave: false });
})

router.get('/message/:id', async (req, res) => {
  const message = await db.getMessageById(req.params.id);
  if (message) {
    const clonedMessage = lodash.cloneDeep(message);
    await db.deleteMessage(req.params.id);
    res.render('messages/individual', { message: clonedMessage.message })
  } else {
    res.render('messages/message-gone')
  }

})



export { router }
